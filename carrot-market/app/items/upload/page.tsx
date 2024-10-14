import IconBase from "@/components/common/icon/IconBase";
import InputBox from "@/components/common/input/InputBox";
import { ICON_KEY } from "@/constants/keyConstants";

export default function Upload() {
    return (
        <div className="space-y-5 px-4 py-16">
            <div>
                <label className="flex h-48 w-full items-center justify-center rounded-md border-2 border-dashed border-gray-300 py-6 text-gray-600 hover:border-orange-500 hover:text-orange-500">
                    <IconBase
                        iconKey={ICON_KEY.IMAGE}
                        size={12}
                        strokeWidth={1}
                    />
                    <input className="hidden" type="file" />
                </label>
            </div>
            <div className="">
                <label
                    className="mb-1 block text-sm font-medium text-gray-700"
                    htmlFor="name"
                >
                    Name
                </label>
                <div className="relative flex items-center rounded-md shadow-sm">
                    <input
                        id="name"
                        type="email"
                        className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                        required
                    />
                </div>
            </div>
            <div className="my-5">
                <label
                    htmlFor="price"
                    className="mb-1 block text-sm font-medium text-gray-700"
                >
                    Price
                </label>
                <div className="relative flex items-center rounded-md shadow-sm">
                    {/* pointer-events-none: Input 선택 안 되도록  */}
                    <div className="pointer-events-none absolute left-0 flex items-center justify-center pl-3">
                        <span className="text-sm text-gray-500">$</span>
                    </div>
                    <input
                        id="price"
                        className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 pl-7 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                        placeholder="0.00"
                        type="text"
                    />
                    <div className="absolute right-0 flex items-center pr-3">
                        <span className="text-gray-500">USD</span>
                    </div>
                </div>
            </div>
            <div>
                <InputBox label="Description" />
            </div>
            <button className="mt-5 w-full rounded-md border border-transparent bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                Upload item
            </button>
        </div>
    );
}
