import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Header />
                <div className="mt-16 h-[calc(100vh-150px)] overflow-y-auto">
                    <div className="mx-auto w-full max-w-xl py-5">
                        {children}
                    </div>
                </div>
                <NavBar />
            </body>
        </html>
    );
}
