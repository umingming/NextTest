"use client";

import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePost, useDeletePost } from "@/hooks/usePosts";
import CommentForm from "@/components/comments/CommentForm";
import CommentList from "@/components/comments/CommentList";

export default function PostDetailPage() {
    const params = useParams();
    const router = useRouter();
    const { data: session } = useSession();
    const postId = params.id as string;
    const { data: post, isLoading, error } = usePost(postId);
    const deletePost = useDeletePost();

    const handleDelete = async () => {
        if (confirm("정말로 이 포스트를 삭제하시겠습니까?")) {
            try {
                await deletePost.mutateAsync(post!._id!);
                router.push("/");
            } catch (error) {
                alert("포스트 삭제에 실패했습니다.");
            }
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="text-center text-lg">로딩 중...</div>
                </div>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                        <p className="text-red-600">
                            포스트를 불러오는데 실패했습니다.
                        </p>
                    </div>
                    <Link
                        href="/"
                        className="mt-4 inline-block text-blue-500 hover:text-blue-600"
                    >
                        ← 목록으로 돌아가기
                    </Link>
                </div>
            </div>
        );
    }

    const isAuthor = session?.user?.id === post.authorId;

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="mx-auto max-w-4xl px-4">
                {/* 뒤로가기 */}
                <Link
                    href="/"
                    className="mb-4 inline-block text-blue-500 hover:text-blue-600"
                >
                    ← 목록으로
                </Link>

                {/* 포스트 상세 */}
                <article className="mb-8 rounded-lg border border-gray-200 bg-white p-8">
                    <div className="mb-6 flex items-start justify-between">
                        <h1 className="text-3xl font-bold text-gray-900">
                            {post.title}
                        </h1>
                        {isAuthor && (
                            <div className="flex gap-2">
                                <Link
                                    href={`/posts/${post._id}/edit`}
                                    className="rounded bg-blue-500 px-3 py-1 text-sm text-white transition-colors hover:bg-blue-600"
                                >
                                    수정
                                </Link>
                                <button
                                    onClick={handleDelete}
                                    disabled={deletePost.isPending}
                                    className="rounded bg-red-500 px-3 py-1 text-sm text-white transition-colors hover:bg-red-600 disabled:opacity-50"
                                >
                                    삭제
                                </button>
                            </div>
                        )}
                    </div>

                    <p className="mb-6 whitespace-pre-wrap text-gray-700">
                        {post.content}
                    </p>

                    {post.tags && post.tags.length > 0 && (
                        <div className="mb-4 flex flex-wrap gap-2">
                            {post.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="rounded bg-blue-100 px-3 py-1 text-sm text-blue-700"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="border-t border-gray-200 pt-4">
                        <div className="flex items-center justify-between text-sm text-gray-500">
                            <span className="font-medium">
                                작성자: {post.authorName}
                            </span>
                            {post.createdAt && (
                                <time>
                                    {new Date(post.createdAt).toLocaleString(
                                        "ko-KR",
                                    )}
                                </time>
                            )}
                        </div>
                    </div>
                </article>

                {/* 댓글 섹션 */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                        💬 댓글 {post.commentCount || 0}개
                    </h2>

                    <CommentForm postId={postId} />

                    <CommentList postId={postId} />
                </div>
            </div>
        </div>
    );
}
