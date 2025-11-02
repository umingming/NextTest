"use client";

import { usePosts, useDeletePost } from "@/hooks/usePosts";
import { Post } from "@/types/post";

interface PostListProps {
    onEdit: (post: Post) => void;
}

export default function PostList({ onEdit }: PostListProps) {
    const { data: posts, isLoading, error } = usePosts();
    const deletePost = useDeletePost();

    if (isLoading) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="text-lg">로딩 중...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                <p className="text-red-600">
                    포스트를 불러오는데 실패했습니다.
                </p>
            </div>
        );
    }

    if (!posts || posts.length === 0) {
        return (
            <div className="py-12 text-center">
                <p className="text-lg text-gray-500">
                    아직 작성된 포스트가 없습니다.
                </p>
                <p className="mt-2 text-gray-400">
                    첫 번째 포스트를 작성해보세요!
                </p>
            </div>
        );
    }

    const handleDelete = async (id: string) => {
        if (confirm("정말로 이 포스트를 삭제하시겠습니까?")) {
            try {
                await deletePost.mutateAsync(id);
            } catch (error) {
                alert("포스트 삭제에 실패했습니다.");
            }
        }
    };

    return (
        <div className="space-y-6">
            {posts.map((post) => (
                <article
                    key={post._id}
                    className="rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
                >
                    <div className="mb-3 flex items-start justify-between">
                        <h2 className="text-2xl font-bold text-gray-800">
                            {post.title}
                        </h2>
                        <div className="flex gap-2">
                            <button
                                onClick={() => onEdit(post)}
                                className="rounded bg-blue-500 px-3 py-1 text-sm text-white transition-colors hover:bg-blue-600"
                            >
                                수정
                            </button>
                            <button
                                onClick={() => handleDelete(post._id!)}
                                disabled={deletePost.isPending}
                                className="rounded bg-red-500 px-3 py-1 text-sm text-white transition-colors hover:bg-red-600 disabled:opacity-50"
                            >
                                삭제
                            </button>
                        </div>
                    </div>

                    <p className="mb-4 whitespace-pre-wrap text-gray-600">
                        {post.content}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="font-medium">
                            작성자: {post.author}
                        </span>
                        {post.tags && post.tags.length > 0 && (
                            <div className="flex gap-2">
                                {post.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="rounded bg-gray-100 px-2 py-1 text-gray-700"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    {post.createdAt && (
                        <div className="mt-3 text-xs text-gray-400">
                            {new Date(post.createdAt).toLocaleString("ko-KR")}
                        </div>
                    )}
                </article>
            ))}
        </div>
    );
}
