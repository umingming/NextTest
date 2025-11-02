import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import { getPostCollection } from "@/libs/database";
import { CreatePostDto } from "@/types/post";

/**
 * GET /api/posts - 모든 포스트 가져오기
 */
export async function GET() {
    try {
        const collection = await getPostCollection();
        const posts = await collection.find().sort({ createdAt: -1 }).toArray();

        return NextResponse.json({
            success: true,
            data: posts,
        });
    } catch (error) {
        console.error("Error fetching posts:", error);
        return NextResponse.json(
            {
                success: false,
                error: "Failed to fetch posts",
            },
            { status: 500 },
        );
    }
}

/**
 * POST /api/posts - 새 포스트 생성 (로그인 필요)
 */
export async function POST(request: NextRequest) {
    try {
        // 인증 체크
        const session = await getServerSession(authOptions);
        if (!session || !session.user) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Unauthorized - Please login",
                },
                { status: 401 },
            );
        }

        const body: CreatePostDto = await request.json();

        // 유효성 검사
        if (!body.title || !body.content) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Title and content are required",
                },
                { status: 400 },
            );
        }

        const collection = await getPostCollection();

        const newPost = {
            title: body.title,
            content: body.content,
            tags: body.tags || [],
            authorId: session.user.id,
            authorName: session.user.name,
            commentCount: 0,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        const result = await collection.insertOne(newPost);

        return NextResponse.json(
            {
                success: true,
                data: {
                    _id: result.insertedId,
                    ...newPost,
                },
            },
            { status: 201 },
        );
    } catch (error) {
        console.error("Error creating post:", error);
        return NextResponse.json(
            {
                success: false,
                error: "Failed to create post",
            },
            { status: 500 },
        );
    }
}
