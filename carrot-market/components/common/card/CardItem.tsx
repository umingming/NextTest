import IconBase from "@/components/common/icon/IconBase";
import { ICON_KEY } from "@/constants/keyConstants";

export default function CardItem() {
    return (
        <div className="flex cursor-pointer justify-between border-b px-4 pb-5">
            <div className="flex space-x-4">
                <div className="h-20 w-20 rounded-md bg-gray-400" />
                <div className="flex flex-col pt-2">
                    <h3 className="text-sm font-medium text-gray-900">
                        New iPhone 14
                    </h3>
                    <span className="text-xs text-gray-500">Black</span>
                    <span className="mt-1 font-medium text-gray-900">$95</span>
                </div>
            </div>
            <div className="flex items-end justify-end space-x-1.5">
                <div className="flex items-center space-x-0.5 text-sm text-gray-600">
                    <IconBase iconKey={ICON_KEY.LIKE} size={4} />
                    <span>1</span>
                </div>
                <div className="flex items-center space-x-0.5 text-sm text-gray-600">
                    <IconBase iconKey={ICON_KEY.CHAT} size={4} />
                    <span>1</span>
                </div>
            </div>
        </div>
    );
}
