export default function Join() {
    return (
        <div>
            <h4>회원가입</h4>
            <form action="/api/user" method="POST">
                <div>
                    <input name="name" placeholder="이름" />
                </div>
                <div>
                    <input name="email" placeholder="Email" />
                </div>
                <div>
                    <input name="password" placeholder="Password" />
                </div>
                <div>
                    <label>
                        <input name="isAdmin" type="checkbox" />
                        관리자
                    </label>
                </div>
                <button type="submit">회원가입</button>
            </form>
        </div>
    );
}
