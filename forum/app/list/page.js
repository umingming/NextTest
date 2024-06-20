import { findPostAll } from "@/utill/database";
import Link from "next/link";

export default async function List() {
    const posts = await findPostAll();

    return (
        <div className="list-bg">
            {posts.map(({ _id, title, content }) => {
                const id = _id.toString();
                return (
                    <Post key={id} id={id} title={title} content={content} />
                );
            })}
        </div>
    );
}

function Post({ id, title, content }) {
    const url = `/detail/${id}`;
    return (
        <div className="list-item">
            <Link href={url}>
                <h4>{title}</h4>
            </Link>
            <p>{content}</p>
        </div>
    );
}
