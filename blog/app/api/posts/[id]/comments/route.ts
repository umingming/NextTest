import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import { getCollection, ObjectId } from "@/libs/database";
import { CreateCommentDto } from "@/types/comment";

/**
 * GET /api/posts/[id]/comments - 특정 포스트의 댓글 목록
 */
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> },
) {
    try {
        const { id } = await params;

        if (!ObjectId.isValid(id)) {
            return NextResponse.json(
                { success: false, error: "Invalid post ID" },
                { status: 400 },
            );
        }

        const collection = await getCollection("comments");
        const comments = await collection
            .find({ postId: id })
            .sort({ createdAt: -1 })
            .toArray();

        return NextResponse.json({
            success: true,
            data: comments,
        });
    } catch (error) {
        console.error("Error fetching comments:", error);
        return NextResponse.json(
            { success: false, error: "Failed to fetch comments" },
            { status: 500 },
        );
    }
}

/**
 * POST /api/posts/[id]/comments - 댓글 작성 (로그인 필요)
 */
export async function POST(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> },
) {
    try {
        // 인증 체크
        const session = await getServerSession(authOptions);
        if (!session || !session.user) {
            return NextResponse.json(
                { success: false, error: "Unauthorized - Please login" },
                { status: 401 },
            );
        }

        const { id } = await params;

        if (!ObjectId.isValid(id)) {
            return NextResponse.json(
                { success: false, error: "Invalid post ID" },
                { status: 400 },
            );
        }

        const body: CreateCommentDto = await request.json();

        if (!body.content) {
            return NextResponse.json(
                { success: false, error: "Content is required" },
                { status: 400 },
            );
        }

        const commentCollection = await getCollection("comments");
        const postCollection = await getCollection("posts");

        // 댓글 생성
        const newComment = {
            postId: id,
            content: body.content,
            authorId: session.user.id,
            authorName: session.user.name,
            createdAt: new Date(),
        };

        const result = await commentCollection.insertOne(newComment);

        // 포스트의 댓글 개수 증가
        await postCollection.updateOne(
            { _id: new ObjectId(id) },
            { $inc: { commentCount: 1 } },
        );

        return NextResponse.json(
            {
                success: true,
                data: {
                    _id: result.insertedId,
                    ...newComment,
                },
            },
            { status: 201 },
        );
    } catch (error) {
        console.error("Error creating comment:", error);
        return NextResponse.json(
            { success: false, error: "Failed to create comment" },
            { status: 500 },
        );
    }
}
