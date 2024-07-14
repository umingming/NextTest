import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { findPostBy } from "@/utill/database";
import { getServerSession } from "next-auth";
import Comment from "./comment";
import Like from "./like";

// dynamic route param
export default async function Detail({ params: { id } }) {
    const post = await findPostBy(id);
    const { user } = (await getServerSession(authOptions)) ?? {};

    if (post) {
        return (
            <div>
                <h4>
                    {post.title}
                    <Like postId={id} user={user} />
                </h4>
                <p>{post.content}</p>
                <Comment postId={id} />
            </div>
        );
    } else {
        return <div>존재하지 않는 페이지입니다.</div>;
    }
}
