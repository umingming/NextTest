import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { findPostAll } from "@/utill/database";
import { getServerSession } from "next-auth";
import ListItem from "./listItem";

export const dynamic = "force-dynamic";
export default async function List() {
    const posts = await findPostAll();
    const { user } = (await getServerSession(authOptions)) ?? {};

    return (
        <div className="list-bg">
            {posts.map(({ _id, title, content, author }) => {
                const id = _id.toString();
                const hasAuth =
                    user?.isAdmin || (author && author === user?.email);

                return (
                    <ListItem
                        key={id}
                        id={id}
                        title={title}
                        content={content}
                        hasAuth={hasAuth}
                    />
                );
            })}
        </div>
    );
}
