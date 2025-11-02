"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function AuthNav() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <div className="text-sm text-gray-500">로딩 중...</div>;
    }

    if (session?.user) {
        return (
            <div className="flex items-center gap-4">
                <span className="text-sm text-gray-700">
                    <span className="font-medium">{session.user.name}</span>님
                    환영합니다
                </span>
                <button
                    onClick={() => signOut()}
                    className="rounded-lg bg-gray-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-600"
                >
                    로그아웃
                </button>
            </div>
        );
    }

    return (
        <div className="flex gap-3">
            <Link
                href="/login"
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
                로그인
            </Link>
            <Link
                href="/register"
                className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
            >
                회원가입
            </Link>
        </div>
    );
}
