import ButtonText from "@/components/common/button/ButtonText";
import IconBase from "@/components/common/icon/IconBase";
import InputBox from "@/components/common/input/InputBox";
import InputPrice from "@/components/common/input/InputPrice";
import InputText from "@/components/common/input/InputText";
import { ICON_KEY } from "@/constants/keyConstants";

export default function ItemCreate() {
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
            <div>
                <InputText label="Name" />
            </div>
            <div className="my-5">
                <InputPrice />
            </div>
            <div>
                <InputBox label="Description" />
            </div>
            <ButtonText label="Upload item" />
        </div>
    );
}
