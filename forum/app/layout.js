import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="navbar">
                    <Link href="/">홈</Link>
                    <Link href="/list">List</Link>
                    <Link href="/join">회원가입</Link>
                </div>
                {/* Page.js 들어가는 부분 */}
                {children}
            </body>
        </html>
    );
}
