"use client";

import { useState } from "react";
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import AuthNav from "@/components/auth/AuthNav";
import { Post } from "@/types/post";

export default function Home() {
    const [editingPost, setEditingPost] = useState<Post | null>(null);

    const handleComplete = () => {
        setEditingPost(null);
    };

    const handleEdit = (post: Post) => {
        setEditingPost(post);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="border-b border-gray-200 bg-white shadow-sm">
                <div className="mx-auto max-w-4xl px-4 py-6">
                    <div className="mb-4 flex items-center justify-between">
                        <h1 className="text-3xl font-bold text-gray-900">
                            📝 블로그
                        </h1>
                        <AuthNav />
                    </div>
                    <p className="text-gray-600">
                        TanStack Query와 MongoDB를 활용한 블로그 프로젝트
                    </p>
                </div>
            </header>

            <main className="mx-auto max-w-4xl px-4 py-8">
                <PostForm
                    editingPost={editingPost}
                    onComplete={handleComplete}
                />
                <PostList onEdit={handleEdit} />
            </main>

            <footer className="mt-12 border-t border-gray-200 bg-white">
                <div className="mx-auto max-w-4xl px-4 py-6 text-center text-sm text-gray-500">
                    <p>
                        Next.js 16 • TanStack Query • MongoDB • Tailwind CSS 4
                    </p>
                </div>
            </footer>
        </div>
    );
}
