import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function Write() {
    const session = await getServerSession(authOptions);

    return (
        <div>
            {session ? (
                <div className="p-20">
                    <h4>글 작성</h4>
                    {/* Post, Get만 가능 */}
                    <form action="/api/post" method="POST">
                        {/* name 정의하면 body key 받을 수 있다. */}
                        <input type="text" name="title" />
                        <input type="text" name="content" />
                        <button type="submit">버튼</button>
                    </form>
                </div>
            ) : (
                <div>로그인부터 해라</div>
            )}
        </div>
    );
}
