import ButtonText from "@/components/common/button/ButtonText";
import InputBox from "@/components/common/input/InputBox";
import InputPrice from "@/components/common/input/InputPrice";
import InputText from "@/components/common/input/InputText";

export default function LiveCreate() {
    return (
        <div className="space-y-5 px-4 py-10">
            <div>
                <InputText type="email" label="Name" />
            </div>
            <div>
                <InputPrice />
            </div>
            <div>
                <InputBox label="Description" />
            </div>
            <ButtonText label="Go Live" />
        </div>
    );
}
