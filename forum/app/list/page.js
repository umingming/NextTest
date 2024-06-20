import { getBy } from "@/utill/database";

export default async function List() {
    const posts = await getBy("forum", "post");

    return (
        <div className="list-bg">
            {posts.map(({ _id, title, content }) => (
                <Post key={_id} title={title} content={content} />
            ))}
        </div>
    );
}

function Post({ title, content }) {
    return (
        <div className="list-item">
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
    );
}
