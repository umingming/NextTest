import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { Inter } from "next/font/google";
import Link from "next/link";
import ButtonLogin from "./buttonLogin";
import ButtonLogout from "./buttonLogout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
    const session = await getServerSession(authOptions);
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="navbar">
                    <Link href="/" className="logo">
                        AppleForum
                    </Link>
                    <Link href="/list">List</Link>
                    <Link href="/join">회원가입</Link>
                    {session ? <ButtonLogout /> : <ButtonLogin />}
                </div>
                {/* Page.js 들어가는 부분 */}
                {children}
            </body>
        </html>
    );
}
