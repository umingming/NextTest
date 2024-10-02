export default function Live() {
    return (
        <div className="space-y-2 divide-y-2 px-4 py-10">
            {[1, 2, 3, 4, 5].map((_, i) => (
                <div key={i} className="pt-4">
                    <div className="aspect-video w-full rounded-md bg-slate-300 shadow-sm" />
                    <h3 className="mt-2 text-lg font-medium text-gray-700">
                        Lets try potatos
                    </h3>
                </div>
            ))}
            <button className="fixed bottom-24 right-5 cursor-pointer rounded-full border-transparent bg-orange-400 p-3 text-white shadow-xl transition-colors hover:bg-orange-500">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                </svg>
            </button>
        </div>
    );
}