export default function Home() {
    return (
        // space는 자식 요소에 margin을 만들어줌.
        <div className="bg-slate-400 py-10 px-5 flex flex-col space-y-5">
            <div className="bg-white p-10 rounded-2xl"></div>
            <div className="bg-white p-10 rounded-2xl"></div>
            <div className="bg-white p-10 rounded-2xl"></div>
            <div className="bg-white p-10 rounded-2xl"></div>
            <div className="bg-white p-10 rounded-2xl"></div>
        </div>
    );
}
