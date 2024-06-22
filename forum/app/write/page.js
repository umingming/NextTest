export default function Write() {
    return (
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
    );
}
