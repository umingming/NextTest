"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useCreateComment } from "@/hooks/useComments";

interface CommentFormProps {
    postId: string;
}

export default function CommentForm({ postId }: CommentFormProps) {
    const { data: session } = useSession();
    const [content, setContent] = useState("");
    const createComment = useCreateComment(postId);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!content.trim()) return;

        try {
            await createComment.mutateAsync({ content });
            setContent("");
        } catch (error) {
            alert("댓글 작성에 실패했습니다.");
        }
    };

    if (!session) {
        return (
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <p className="mb-3 text-center text-gray-600">
                    댓글을 작성하려면 로그인이 필요합니다.
                </p>
                <Link
                    href="/login"
                    className="block rounded-lg bg-blue-500 px-4 py-2 text-center font-medium text-white transition-colors hover:bg-blue-600"
                >
                    로그인하기
                </Link>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-lg border border-gray-200 bg-white p-4"
        >
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="댓글을 입력하세요..."
                rows={3}
                className="w-full resize-none rounded-lg border border-gray-300 px-3 py-2 text-black focus:border-transparent focus:ring-2 focus:ring-blue-500"
            />
            <div className="mt-3 flex justify-end">
                <button
                    type="submit"
                    disabled={!content.trim() || createComment.isPending}
                    className="rounded-lg bg-blue-500 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {createComment.isPending ? "작성 중..." : "댓글 작성"}
                </button>
            </div>
        </form>
    );
}
