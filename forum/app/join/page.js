export default function Join() {
    return (
        <div>
            <h4>회원가입</h4>
            <form action="/api/user" method="POST">
                <div>
                    <input name="id" placeholder="ID" />
                </div>
                <div>
                    <input name="password" placeholder="Password" />
                </div>
                <button type="submit">회원가입</button>
            </form>
        </div>
    );
}
