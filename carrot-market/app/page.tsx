export default function Home() {
    return (
        // space는 자식 요소에 margin을 만들어줌.
        <div className="bg-slate-400 py-10 px-5 flex flex-col space-y-5 min-h-screen">
            <div className="bg-white p-10 rounded-3xl shadow-xl">
                <span className="font-semibold text-3xl">Select Item</span>
                <ul>
                    {/* only는 요소가 하나면 쓸 수 있다. */}
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
                </ul>
                {/* <div className="flex justify-between my-2">
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
                </div> */}
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
            <div className="bg-white overflow-hidden rounded-2xl shadow-xl">
                <div className="bg-blue-500 p-6 pb-14">
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
                        <div className="h-24 w-24 ml-2 bg-green-500 rounded-full" />
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
            <div className="bg-white p-6 rounded-3xl shadow-xl">
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
        </div>
    );
}
