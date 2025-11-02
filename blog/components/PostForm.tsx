"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCreatePost, useUpdatePost } from "@/hooks/usePosts";
import { Post } from "@/types/post";

interface PostFormProps {
    editingPost: Post | null;
    onComplete: () => void;
}

export default function PostForm({ editingPost, onComplete }: PostFormProps) {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState("");

    const createPost = useCreatePost();
    const updatePost = useUpdatePost();

    useEffect(() => {
        if (editingPost) {
            setTitle(editingPost.title);
            setContent(editingPost.content);
            setTags(editingPost.tags?.join(", ") || "");
        } else {
            setTitle("");
            setContent("");
            setTags("");
        }
    }, [editingPost]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const postData = {
            title,
            content,
            tags: tags
                .split(",")
                .map((tag) => tag.trim())
                .filter((tag) => tag),
        };

        try {
            if (editingPost?._id) {
                await updatePost.mutateAsync({
                    id: editingPost._id,
                    data: postData,
                });
            } else {
                await createPost.mutateAsync(postData);
            }
            onComplete();
        } catch (error: any) {
            if (error?.message?.includes("401")) {
                alert("로그인이 필요합니다.");
                router.push("/login");
            } else {
                alert("포스트 저장에 실패했습니다.");
            }
        }
    };

    const isLoading = createPost.isPending || updatePost.isPending;

    // 로그인하지 않은 경우
    if (status === "loading") {
        return (
            <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
                <p className="text-center text-gray-500">로딩 중...</p>
            </div>
        );
    }

    if (!session) {
        return (
            <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
                <h2 className="mb-4 text-2xl font-bold">새 포스트 작성</h2>
                <p className="mb-4 text-gray-600">
                    포스트를 작성하려면 로그인이 필요합니다.
                </p>
                <Link
                    href="/login"
                    className="inline-block rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600"
                >
                    로그인하기
                </Link>
            </div>
        );
    }

    return (
        <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="mb-6 text-2xl font-bold">
                {editingPost ? "포스트 수정" : "새 포스트 작성"}
            </h2>

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
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                        placeholder="포스트 제목을 입력하세요"
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
                        rows={8}
                        className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                        placeholder="포스트 내용을 입력하세요"
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
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                        placeholder="예: React, Next.js, TypeScript"
                    />
                </div>

                <div className="flex gap-3">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="flex-1 rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {isLoading
                            ? "저장 중..."
                            : editingPost
                              ? "수정하기"
                              : "작성하기"}
                    </button>

                    {editingPost && (
                        <button
                            type="button"
                            onClick={onComplete}
                            className="rounded-lg bg-gray-500 px-6 py-3 font-medium text-white transition-colors hover:bg-gray-600"
                        >
                            취소
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
