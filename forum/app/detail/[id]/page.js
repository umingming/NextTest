import { findPostBy } from "@/utill/database";

// dynamic route param
export default async function Detail({ params: { id } }) {
    const post = await findPostBy(id);
    if (post) {
        return (
            <div>
                <h4>상세페이지</h4>
                <h4>{post.title}</h4>
                <p>{post.content}</p>
            </div>
        );
    } else {
        return <div>존재하지 않는 페이지입니다.</div>;
    }
}
