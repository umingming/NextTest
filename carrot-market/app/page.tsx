export default function Home() {
    return (
        // space는 자식 요소에 margin을 만들어줌.
        <div className="bg-slate-400 py-10 px-5 flex flex-col space-y-5">
            <div className="bg-white p-10 rounded-2xl shadow-xl">
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
            <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
            <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
            <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
            <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
        </div>
    );
}
