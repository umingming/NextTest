export default function Home() {
    return (
        // space는 자식 요소에 margin을 만들어줌.
        <div className="grid min-h-screen gap-10 space-y-5 bg-slate-400 px-5 py-10 lg:grid-cols-2 xl:grid-cols-3 xl:place-content-center">
            <div className="rounded-3xl bg-white p-10 shadow-xl dark:bg-black dark:text-white sm:bg-red-50 md:bg-teal-50 lg:bg-indigo-400 xl:bg-yellow-300 2xl:bg-pink-400">
                <span className="text-3xl font-semibold">Select Item</span>
                {/* only는 요소가 하나면 쓸 수 있다. */}a
                {/* <ul>
                    {[1, 2, 3, 4, 5].map((index) => (
                        <div
                            className="
                                flex justify-between
                                first:bg-blue-50 last:bg-blue-50 only:bg-red-500
                                odd:bg-blue-500 even:bg-yellow-500
                            "
                        >
                            <span className="text-gray-500">Tooly Table</span>
                            <span className="font-semibold">$80</span>
                        </div>
                    ))}
                </ul>
                <ul>
                    {["a", "b", "c", ""].map((char, index) => (
                        <li
                            key={char}
                            className="
                            bg-red-500 py-2
                            empty:hidden
                        "
                        >
                            {char}
                        </li>
                    ))}
                </ul> */}
                <div className="my-2 flex justify-between">
                    <span className="text-gray-500">Grey Chair</span>
                    <span className="font-semibold">$19</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500">Tooly Table</span>
                    <span className="font-semibold">$80</span>
                </div>
                <div className="mt-2 flex justify-between border-t-2 border-dashed pt-2">
                    <span>Total</span>
                    <span className="font-semibold">$99</span>
                </div>
                <div className="mx-auto mt-5 w-1/2 rounded-xl bg-blue-500 p-5 text-center text-white hover:bg-teal-500 active:bg-yellow-500">
                    Checkout
                </div>
            </div>
            <div className="test-group group overflow-hidden rounded-2xl bg-white shadow-xl">
                <div className="bg-blue-500 p-6 pb-14 xl:pb-40 landscape:bg-teal-500">
                    <span className="text-2xl text-white">Profile</span>
                </div>
                <div className="relative -top-5 rounded-3xl bg-white p-6">
                    <div className="relative -top-16 flex items-end justify-between">
                        <div className="flex flex-col items-center">
                            <span className="text-sm text-gray-500">
                                Orders
                            </span>
                            <span className="font-medium">340</span>
                        </div>
                        <div className="test-group-hover:bg-red-300 ml-2 h-24 w-24 rounded-full bg-green-50 transition-colors" />
                        <div className="flex flex-col items-center">
                            <span className="text-sm text-gray-500">Spent</span>
                            <span className="font-medium">$2,310</span>
                        </div>
                    </div>
                    <div className="relative -mb-5 -mt-10 flex flex-col items-center justify-center">
                        <span className="text-lg font-medium">이유미</span>
                        <span className="text-sm text-gray-500">한국</span>
                    </div>
                </div>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-xl lg:col-span-2 xl:col-span-1">
                <div className="mb-5 flex items-center justify-between">
                    <span>⬅️</span>
                    <div className="space-x-3">
                        <span>⭐️ 4.9</span>
                        <span className="rounded-md p-2 shadow-xl">💖</span>
                    </div>
                </div>
                <div className="mb-5 h-72 bg-zinc-400" />
                <div className="flex flex-col">
                    <span className="mb-1.5 text-xl font-medium">
                        Swoon Lounge
                    </span>
                    <span className="text-xs text-gray-500">Chair</span>
                    <div className="mb-5 mt-3 flex justify-between">
                        <div className="space-x-2">
                            {/* transition으로 자연스러운 처리 가능 */}
                            <button className="h-5 w-5 rounded-full bg-yellow-500 ring-yellow-500 ring-offset-2 transition focus:ring-2" />
                            <button className="h-5 w-5 rounded-full bg-indigo-500 ring-indigo-500 ring-offset-2 transition focus:ring-2" />
                            <button className="h-5 w-5 rounded-full bg-teal-500 ring-teal-500 ring-offset-2 transition focus:ring-2" />
                        </div>
                        <div className="flex items-center space-x-5">
                            <button className="flex aspect-square w-8 items-center justify-center rounded-lg bg-blue-200 text-xl font-medium text-gray-500">
                                -
                            </button>
                            <span>1</span>
                            <button className="flex aspect-square w-8 items-center justify-center rounded-lg bg-blue-200 text-xl font-medium text-gray-500">
                                +
                            </button>
                        </div>
                    </div>
                    <div className="itmes-center flex justify-between">
                        <span className="text-2xl font-medium">$450</span>
                        <button className="rounded-lg bg-blue-500 px-8 py-2 text-center text-white">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
            {/* placeshown보다 invalid의 우선순위가 더 높다. */}
            {/* <form
                className="
                    flex flex-col space-y-2 p-5
                    bg-blue-500
                    focus-within:bg-blue-100
                "
            >
                <input
                    type="text"
                    required
                    placeholder="Username"
                    className="
                        peer
                        border-yellow-500
                        required:border-2
                        invalid:bg-red-300
                        valid:bg-teal-500
                        placeholder-shown:bg-blue-500
                        placeholder:text-red-500
                    "
                />
                <span
                    className="
                        hidden
                        peer-invalid:block peer-invalid:text-red-500
                    "
                >
                    This input is invalid
                </span>
                <span
                    className="
                        hidden
                        peer-valid:block peer-valid:text-teal-500
                    "
                >
                    This input is valid
                </span>
                <input
                    type="password"
                    required
                    placeholder="Password"
                    className=""
                />
                <input
                    type="submit"
                    value="Login"
                    className="bg-white text-black"
                />
            </form> */}
            {/* user-select none은 사용자가 해당 요소의 텍스트나 내용을 선택할 수 없으며 드래그나 복사가 불가능하다. */}
            {/* <details className="open:bg-indigo-50">
                <summary className="select-none cursor-pointer">
                    What is my fav. food.
                </summary>
                <span className="selection:bg-indigo-600">연어초밥</span>
            </details> */}
            {/* <ul className="list-decimal marker:text-teal-500">
                <li>Hi</li>
                <li>Hi</li>
                <li>Hi</li>
                <li>Hi</li>
                <li>Hi</li>
                <li>Hi</li>
            </ul>
            <div>
                <input
                    type="file"
                    className="file:border-0 file:rounded-md 
                        file:bg-purple-400 file:px-5 file:text-white
                        file:transition-colors
                        file:hover:text-purple-400
                        file:hover:bg-white
                    "
                />
                <p className="first-letter:text-7xl first-letter:hover:text-purple-400">
                    Check the top-level render call using ul. See
                    https://reactjs.org/link/warning-keys for more information.
                </p>
            </div> */}
        </div>
    );
}
