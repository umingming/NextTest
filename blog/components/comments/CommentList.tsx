"use client";

import { useSession } from "next-auth/react";
import { useComments, useDeleteComment } from "@/hooks/useComments";

interface CommentListProps {
    postId: string;
}

export default function CommentList({ postId }: CommentListProps) {
    const { data: session } = useSession();
    const { data: comments, isLoading, error } = useComments(postId);
    const deleteComment = useDeleteComment(postId);

    const handleDelete = async (commentId: string) => {
        if (confirm("정말로 이 댓글을 삭제하시겠습니까?")) {
            try {
                await deleteComment.mutateAsync(commentId);
            } catch (error) {
                alert("댓글 삭제에 실패했습니다.");
            }
        }
    };

    if (isLoading) {
        return (
            <div className="py-4 text-center text-gray-500">
                댓글을 불러오는 중...
            </div>
        );
    }

    if (error) {
        return (
            <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                <p className="text-red-600">댓글을 불러오는데 실패했습니다.</p>
            </div>
        );
    }

    if (!comments || comments.length === 0) {
        return (
            <div className="py-8 text-center">
                <p className="text-gray-500">
                    아직 댓글이 없습니다. 첫 번째 댓글을 작성해보세요!
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {comments.map((comment) => (
                <div
                    key={comment._id}
                    className="rounded-lg border border-gray-200 bg-white p-4"
                >
                    <div className="mb-2 flex items-start justify-between">
                        <div>
                            <span className="font-medium text-gray-900">
                                {comment.authorName}
                            </span>
                            {comment.createdAt && (
                                <span className="ml-2 text-sm text-gray-500">
                                    {new Date(comment.createdAt).toLocaleString(
                                        "ko-KR",
                                    )}
                                </span>
                            )}
                        </div>
                        {session?.user?.id === comment.authorId && (
                            <button
                                onClick={() => handleDelete(comment._id!)}
                                disabled={deleteComment.isPending}
                                className="text-sm text-red-500 hover:text-red-600 disabled:opacity-50"
                            >
                                삭제
                            </button>
                        )}
                    </div>
                    <p className="whitespace-pre-wrap text-gray-700">
                        {comment.content}
                    </p>
                </div>
            ))}
        </div>
    );
}
