export default function Edit() {
    return (
        <div className="space-y-4 px-4 py-10">
            <div className="flex items-center space-x-3">
                <div className="h-14 w-14 rounded-full bg-slate-500" />
                <label
                    htmlFor="picture"
                    className="relative -left-8 top-4 cursor-pointer rounded-full border border-white bg-orange-400 p-1 text-sm font-medium shadow-sm hover:bg-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-3 w-3 text-white"
                    >
                        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                    </svg>
                    <input
                        id="picture"
                        accept="image/*"
                        type="file"
                        className="hidden"
                    />
                </label>
            </div>
            <div className="space-y-1">
                <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                >
                    Email address
                </label>
                <div className="mt-1">
                    <input
                        id="email"
                        className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                        type="Email"
                        required
                    />
                </div>
            </div>
            <div className="space-y-1">
                <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700"
                >
                    Phone number
                </label>

                <div className="shodw-sm flex rounded-md">
                    <span className="flex select-none items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500">
                        +82
                    </span>
                    <input
                        id="input"
                        className="w-full appearance-none rounded-md rounded-l-none border border-gray-300 px-4 py-2 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                        type="number"
                        required
                    />
                </div>
            </div>
            <button className="mt-10 w-full rounded-md border border-transparent bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                Update profile
            </button>
        </div>
    );
}
