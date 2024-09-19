export default function Home() {
    return (
        // space는 자식 요소에 margin을 만들어줌.
        <div className="bg-slate-400 py-10 px-5 flex flex-col space-y-5">
            <div className="bg-white p-10 rounded-3xl shadow-xl">
                <span className="font-semibold text-3xl">Select Item</span>
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
                <div className="mt-5 bg-blue-500 text-white p-5 text-center rounded-xl w-1/2 mx-auto">
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
            <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
            <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
            <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
        </div>
    );
}
