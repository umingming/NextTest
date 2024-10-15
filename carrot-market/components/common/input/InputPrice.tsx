import InputBase from "./InputBase";

let index = 0;

export default function InputPrice({
    placeholder = "0.00",
}: {
    placeholder?: string;
}) {
    const id = `input-price-${++index}`;

    return (
        <InputBase id={id} label="Price">
            <div className="relative flex items-center rounded-md shadow-sm">
                <div className="pointer-events-none absolute left-0 flex items-center justify-center pl-3">
                    <span className="text-sm text-gray-500">$</span>
                </div>
                <input
                    id="Price"
                    className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 pl-7 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                    type="text"
                    placeholder={placeholder}
                />
                <div className="pointer-events-none absolute right-0 flex items-center pr-3">
                    <span className="text-gray-500">USD</span>
                </div>
            </div>
        </InputBase>
    );
}
