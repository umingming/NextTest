import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import { getCollection, ObjectId } from "@/libs/database";

/**
 * DELETE /api/comments/[id] - 댓글 삭제 (본인만 가능)
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
                { success: false, error: "Unauthorized" },
                { status: 401 },
            );
        }

        const { id } = await params;

        if (!ObjectId.isValid(id)) {
            return NextResponse.json(
                { success: false, error: "Invalid comment ID" },
                { status: 400 },
            );
        }

        const commentCollection = await getCollection("comments");
        const postCollection = await getCollection("posts");

        // 댓글 찾기
        const comment = await commentCollection.findOne({
            _id: new ObjectId(id),
        });

        if (!comment) {
            return NextResponse.json(
                { success: false, error: "Comment not found" },
                { status: 404 },
            );
        }

        // 권한 체크
        if (comment.authorId !== session.user.id) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Forbidden - You can only delete your own comments",
                },
                { status: 403 },
            );
        }

        // 댓글 삭제
        await commentCollection.deleteOne({ _id: new ObjectId(id) });

        // 포스트의 댓글 개수 감소
        await postCollection.updateOne(
            { _id: new ObjectId(comment.postId) },
            { $inc: { commentCount: -1 } },
        );

        return NextResponse.json({
            success: true,
            message: "Comment deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting comment:", error);
        return NextResponse.json(
            { success: false, error: "Failed to delete comment" },
            { status: 500 },
        );
    }
}
