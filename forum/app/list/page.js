import { findPostAll } from "@/utill/database";
import ListItem from "./listItem";

export default async function List() {
    const posts = await findPostAll();

    return (
        <div className="list-bg">
            {posts.map(({ _id, title, content }) => {
                const id = _id.toString();
                return (
                    <ListItem
                        key={id}
                        id={id}
                        title={title}
                        content={content}
                    />
                );
            })}
        </div>
    );
}
