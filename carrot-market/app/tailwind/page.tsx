export default function Home() {
    return (
        // space는 자식 요소에 margin을 만들어줌.
        <div
            className="
                bg-slate-400 py-10 px-5 space-y-5 min-h-screen xl:place-content-center
                grid gap-10 lg:grid-cols-2 xl:grid-cols-3
            "
        >
            <div
                className="
                    bg-white p-10 rounded-3xl shadow-xl
                    sm:bg-red-50
                    md:bg-teal-50
                    lg:bg-indigo-400
                    xl:bg-yellow-300
                    2xl:bg-pink-400
                    dark:bg-black
                    dark:text-white
                "
            >
                <span className="font-semibold text-3xl">Select Item</span>
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
                <div className="flex justify-between my-2">
                    <span className="text-gray-500">Grey Chair</span>
                    <span className="font-semibold">$19</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500">Tooly Table</span>
                    <span className="font-semibold">$80</span>
                </div>
                <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
                    <span>Total</span>
                    <span className="font-semibold">$99</span>
                </div>
                <div
                    className="
                        mt-5 p-5 text-center rounded-xl w-1/2 mx-auto
                        bg-blue-500 text-white
                        hover:bg-teal-500
                        active:bg-yellow-500
                    "
                >
                    Checkout
                </div>
            </div>
            <div
                className="
                    test-group group
                    bg-white overflow-hidden rounded-2xl shadow-xl
                "
            >
                <div
                    className="
                        bg-blue-500 p-6 pb-14 
                        xl:pb-40
                        landscape:bg-teal-500
                    "
                >
                    <span className="text-white text-2xl">Profile</span>
                </div>
                <div className="rounded-3xl p-6 relative -top-5 bg-white">
                    <div className="flex relative -top-16 items-end justify-between">
                        <div className="flex flex-col items-center">
                            <span className="text-sm text-gray-500">
                                Orders
                            </span>
                            <span className="font-medium">340</span>
                        </div>
                        <div
                            className="
                                h-24 w-24 ml-2 bg-green-50 rounded-full
                                test-group-hover:bg-red-300
                                transition-colors
                            "
                        />
                        <div className="flex flex-col items-center">
                            <span className="text-sm text-gray-500">Spent</span>
                            <span className="font-medium">$2,310</span>
                        </div>
                    </div>
                    <div className="relative -mt-10 -mb-5 flex flex-col items-center justify-center">
                        <span className="text-lg font-medium">이유미</span>
                        <span className="text-sm text-gray-500">한국</span>
                    </div>
                </div>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-xl lg:col-span-2 xl:col-span-1">
                <div className="flex mb-5 justify-between items-center">
                    <span>⬅️</span>
                    <div className="space-x-3">
                        <span>⭐️ 4.9</span>
                        <span className="shadow-xl p-2 rounded-md">💖</span>
                    </div>
                </div>
                <div className="bg-zinc-400 h-72 mb-5" />
                <div className="flex flex-col">
                    <span className="font-medium mb-1.5 text-xl">
                        Swoon Lounge
                    </span>
                    <span className="text-xs text-gray-500">Chair</span>
                    <div className="mt-3 mb-5 flex justify-between">
                        <div className="space-x-2">
                            {/* transition으로 자연스러운 처리 가능 */}
                            <button
                                className="
                                    w-5 h-5 rounded-full 
                                    bg-yellow-500 ring-offset-2 ring-yellow-500
                                    transition
                                    focus:ring-2 
                                "
                            />
                            <button
                                className="
                                    w-5 h-5 rounded-full 
                                    bg-indigo-500 ring-offset-2 ring-indigo-500
                                    transition
                                    focus:ring-2 
                                "
                            />
                            <button
                                className="
                                    w-5 h-5 rounded-full 
                                    bg-teal-500 ring-offset-2 ring-teal-500
                                    transition
                                    focus:ring-2 
                                "
                            />
                        </div>
                        <div className="flex items-center space-x-5">
                            <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 font-medium text-xl text-gray-500">
                                -
                            </button>
                            <span>1</span>
                            <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 font-medium text-xl text-gray-500">
                                +
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between itmes-center">
                        <span className="font-medium text-2xl">$450</span>
                        <button className="bg-blue-500 py-2 px-8 text-center text-white rounded-lg">
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
