import CardProfile from "@/components/common/card/CardProfile";
import IconBase from "@/components/common/icon/IconBase";
import { ICON_KEY } from "@/constants/keyConstants";

export default function Edit() {
    return (
        <div className="space-y-4 px-4 py-10">
            <CardProfile isLarge={true}>
                <label
                    htmlFor="picture"
                    className="relative -left-8 top-1 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-white bg-orange-400 p-1 text-sm font-medium shadow-sm hover:bg-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                    <IconBase
                        iconKey={ICON_KEY.WRITE}
                        color="text-white"
                        size={3}
                        isFill={true}
                        strokeWidth={0}
                    />
                    <input
                        id="picture"
                        accept="image/*"
                        type="file"
                        className="hidden"
                    />
                </label>
            </CardProfile>
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
