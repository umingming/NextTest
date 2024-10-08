export default function Items() {
    return (
        <div className="px-4 py-10">
            <div className="mb-8">
                <div className="h-96 bg-slate-300" />
                <div className="flex cursor-pointer items-center space-x-3 border-b border-t py-3">
                    <div className="h-12 w-12 rounded-full bg-slate-300" />
                    <div>
                        <p className="text-sm font-medium text-gray-700">
                            Steve Jebs
                        </p>
                        <p className="text-xs font-medium text-gray-500">
                            View profile &rarr;
                        </p>
                    </div>
                </div>
                <div className="mt-5">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Galaxy S50
                    </h1>
                    <p className="mt-3 text-3xl text-gray-900">$140</p>
                    <p className="my-6 text-base text-gray-700">
                        My money&apos;s in that office, right? If she start
                        giving me some bullshit about it ain&apos;t there, and
                        we got to go someplace else and get it, I&apos;m gonna
                        shoot you in the head then and there. Then I&apos;m
                        gonna shoot that bitch in the kneecaps, find out where
                        my goddamn money is. She gonna tell me too. Hey, look at
                        me when I&apos;m talking to you, motherfucker. You
                        listen: we go in there, and that ni**a Winston or
                        anybody else is in there, you the first motherfucker to
                        get shot. You understand?
                    </p>
                    <div className="flex items-center justify-between space-x-2">
                        <button className="flex-1 rounded-md bg-orange-500 py-3 font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                            Talk to seller
                        </button>
                        <button className="flex items-center justify-center rounded-md p-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                            <svg
                                aria-hidden="true"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold text-gray-900">
                    Similar items
                </h2>
                <div className="mt-6 grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((_, i) => (
                        <div key={i}>
                            <div className="mb-4 h-56 w-full bg-slate-300" />
                            <h3 className="-mb-1 text-gray-700">Galaxy S60</h3>
                            <p className="text-sm font-medium text-gray-900">
                                $6
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
