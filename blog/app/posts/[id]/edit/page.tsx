"use client";

import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePost, useUpdatePost } from "@/hooks/usePosts";

export default function PostEditPage() {
    const params = useParams();
    const router = useRouter();
    const { data: session, status } = useSession();
    const postId = params.id as string;
    const { data: post, isLoading: postLoading } = usePost(postId);
    const updatePost = useUpdatePost();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState("");

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setContent(post.content);
            setTags(post.tags?.join(", ") || "");
        }
    }, [post]);

    // 로딩 중
    if (status === "loading" || postLoading) {
        return (
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="text-center text-lg">로딩 중...</div>
                </div>
            </div>
        );
    }

    // 미로그인
    if (!session) {
        router.push("/login");
        return null;
    }

    // 권한 없음
    if (post && post.authorId !== session.user.id) {
        return (
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                        <p className="text-red-600">
                            본인이 작성한 글만 수정할 수 있습니다.
                        </p>
                    </div>
                    <Link
                        href={`/posts/${postId}`}
                        className="mt-4 inline-block text-blue-500 hover:text-blue-600"
                    >
                        ← 돌아가기
                    </Link>
                </div>
            </div>
        );
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await updatePost.mutateAsync({
                id: postId,
                data: {
                    title,
                    content,
                    tags: tags
                        .split(",")
                        .map((tag) => tag.trim())
                        .filter((tag) => tag),
                },
            });
            router.push(`/posts/${postId}`);
        } catch (error) {
            alert("포스트 수정에 실패했습니다.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="mx-auto max-w-4xl px-4">
                <Link
                    href={`/posts/${postId}`}
                    className="mb-4 inline-block text-blue-500 hover:text-blue-600"
                >
                    ← 취소
                </Link>

                <div className="rounded-lg border border-gray-200 bg-white p-8">
                    <h1 className="mb-6 text-2xl font-bold">포스트 수정</h1>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label
                                htmlFor="title"
                                className="mb-1 block text-sm font-medium text-gray-700"
                            >
                                제목 *
                            </label>
                            <input
                                id="title"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:border-transparent focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="content"
                                className="mb-1 block text-sm font-medium text-gray-700"
                            >
                                내용 *
                            </label>
                            <textarea
                                id="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                required
                                rows={12}
                                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2 text-black focus:border-transparent focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="tags"
                                className="mb-1 block text-sm font-medium text-gray-700"
                            >
                                태그 (쉼표로 구분)
                            </label>
                            <input
                                id="tags"
                                type="text"
                                value={tags}
                                onChange={(e) => setTags(e.target.value)}
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:border-transparent focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={updatePost.isPending}
                            className="w-full rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {updatePost.isPending ? "저장 중..." : "수정 완료"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
