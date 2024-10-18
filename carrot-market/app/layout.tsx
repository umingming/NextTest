"use client";

import Header from "@/components/common/Header";
import NavBar from "@/components/common/NavBar";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <SessionProvider>
                    <Header />
                    <div className="mt-16 h-[calc(100vh-150px)] overflow-y-auto">
                        <div className="mx-auto w-full max-w-xl py-5">
                            <Auth>{children}</Auth>
                        </div>
                    </div>
                    <NavBar />
                </SessionProvider>
            </body>
        </html>
    );
}

function Auth({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { data: session } = useSession();
    const router = useRouter();

    if (!session) {
        router.push("/enter");
    }

    return <>{children}</>;
}
