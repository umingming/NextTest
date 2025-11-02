import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import { getPostCollection, ObjectId } from "@/libs/database";
import { UpdatePostDto } from "@/types/post";

/**
 * GET /api/posts/[id] - 특정 포스트 가져오기
 */
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> },
) {
    try {
        const { id } = await params;

        if (!ObjectId.isValid(id)) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Invalid post ID",
                },
                { status: 400 },
            );
        }

        const collection = await getPostCollection();
        const post = await collection.findOne({ _id: new ObjectId(id) });

        if (!post) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Post not found",
                },
                { status: 404 },
            );
        }

        return NextResponse.json({
            success: true,
            data: post,
        });
    } catch (error) {
        console.error("Error fetching post:", error);
        return NextResponse.json(
            {
                success: false,
                error: "Failed to fetch post",
            },
            { status: 500 },
        );
    }
}

/**
 * PUT /api/posts/[id] - 포스트 업데이트 (본인만 가능)
 */
export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> },
) {
    try {
        // 인증 체크
        const session = await getServerSession(authOptions);
        if (!session || !session.user) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Unauthorized",
                },
                { status: 401 },
            );
        }

        const { id } = await params;

        if (!ObjectId.isValid(id)) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Invalid post ID",
                },
                { status: 400 },
            );
        }

        const collection = await getPostCollection();

        // 포스트 소유자 확인
        const existingPost = await collection.findOne({
            _id: new ObjectId(id),
        });

        if (!existingPost) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Post not found",
                },
                { status: 404 },
            );
        }

        if (existingPost.authorId !== session.user.id) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Forbidden - You can only edit your own posts",
                },
                { status: 403 },
            );
        }

        const body: UpdatePostDto = await request.json();

        const updateData = {
            ...body,
            updatedAt: new Date(),
        };

        const result = await collection.findOneAndUpdate(
            { _id: new ObjectId(id) },
            { $set: updateData },
            { returnDocument: "after" },
        );

        return NextResponse.json({
            success: true,
            data: result,
        });
    } catch (error) {
        console.error("Error updating post:", error);
        return NextResponse.json(
            {
                success: false,
                error: "Failed to update post",
            },
            { status: 500 },
        );
    }
}

/**
 * DELETE /api/posts/[id] - 포스트 삭제 (본인만 가능)
 */
export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> },
) {
    try {
        // 인증 체크
        const session = await getServerSession(authOptions);
        if (!session || !session.user) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Unauthorized",
                },
                { status: 401 },
            );
        }

        const { id } = await params;

        if (!ObjectId.isValid(id)) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Invalid post ID",
                },
                { status: 400 },
            );
        }

        const collection = await getPostCollection();

        // 포스트 소유자 확인
        const existingPost = await collection.findOne({
            _id: new ObjectId(id),
        });

        if (!existingPost) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Post not found",
                },
                { status: 404 },
            );
        }

        if (existingPost.authorId !== session.user.id) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Forbidden - You can only delete your own posts",
                },
                { status: 403 },
            );
        }

        const result = await collection.deleteOne({ _id: new ObjectId(id) });

        return NextResponse.json({
            success: true,
            message: "Post deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting post:", error);
        return NextResponse.json(
            {
                success: false,
                error: "Failed to delete post",
            },
            { status: 500 },
        );
    }
}
