import { findPostAll } from "@/utill/database";
import Link from "next/link";
import DetailLink from "./detailLink";

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
            {/* Link태그엔 Router prefetch 기능 내장 */}
            <Link href={url}>
                <h4>{title}</h4>
            </Link>
            <DetailLink id={id} />
            <p>{content}</p>
        </div>
    );
}
