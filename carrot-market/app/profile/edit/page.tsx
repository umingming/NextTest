import ButtonText from "@/components/common/button/ButtonText";
import CardProfile from "@/components/common/card/CardProfile";
import IconBase from "@/components/common/icon/IconBase";
import InputPhone from "@/components/common/input/InputPhone";
import InputText from "@/components/common/input/InputText";
import { ICON_KEY } from "@/constants/keyConstants";

export default function Edit() {
    return (
        <div className="space-y-4 px-4">
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
                <InputText type="email" label="Email address" />
            </div>
            <div className="space-y-1">
                <InputPhone />
            </div>
            <ButtonText label="Update profile" />
        </div>
    );
}
