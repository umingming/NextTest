export default function Upload() {
    return (
        <div className="px-4 py-16">
            <div>
                <div className="flex w-full items-center justify-center">
                    <label>
                        <svg
                            aria-hidden="true"
                            className="h-12 w-12"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 48 48"
                        >
                            <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                            />
                        </svg>
                        <input className="hidden" type="file" />
                    </label>
                </div>
            </div>
            <div>
                <label>Price</label>
                <div>
                    <div>
                        <span>$</span>
                    </div>
                    <input placeholder="0.00" type="text" />
                    <div>
                        <span>USD</span>
                    </div>
                </div>
            </div>
            <div>
                <label>Description</label>
                <div>
                    <textarea rows={4} />
                </div>
            </div>
            <button>Upload product</button>
        </div>
    );
}
