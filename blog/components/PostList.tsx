"use client";

import { useRouter } from "next/navigation";
import { usePosts } from "@/hooks/usePosts";

export default function PostList() {
    const router = useRouter();
    const { data: posts, isLoading, error } = usePosts();

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

    return (
        <div className="space-y-4">
            {posts.map((post) => (
                <article
                    key={post._id}
                    onClick={() => router.push(`/posts/${post._id}`)}
                    className="cursor-pointer rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-md"
                >
                    <h2 className="mb-3 text-2xl font-bold text-gray-800 hover:text-blue-600">
                        {post.title}
                    </h2>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <span className="font-medium">{post.authorName}</span>

                        {post.createdAt && (
                            <time>
                                {new Date(post.createdAt).toLocaleDateString(
                                    "ko-KR",
                                )}
                            </time>
                        )}

                        <span className="flex items-center gap-1">
                            💬 {post.commentCount || 0}
                        </span>

                        {post.tags && post.tags.length > 0 && (
                            <div className="flex gap-2">
                                {post.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-700"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </article>
            ))}
        </div>
    );
}
