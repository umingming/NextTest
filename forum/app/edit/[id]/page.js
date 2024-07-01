import { findPostBy } from "@/utill/database";

// dynamic route param
export default async function Edit({ params: { id } }) {
    const post = await findPostBy(id);
    if (post) {
        return (
            <div className="p-20">
                <h4>글 수정</h4>
                {/* Post api 정의 */}
                <form action="/api/post" method="POST">
                    {/* name 정의하면 body key 받을 수 있다. */}
                    <input type="hidden" name="id" defaultValue={id} />
                    <input type="text" name="title" defaultValue={post.title} />
                    <input
                        type="text"
                        name="content"
                        defaultValue={post.content}
                    />
                    <button type="submit">버튼</button>
                </form>
            </div>
        );
    } else {
        return <div>존재하지 않는 페이지입니다.</div>;
    }
}
