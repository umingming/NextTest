import ButtonText from "@/components/common/button/ButtonText";
import InputBox from "@/components/common/input/InputBox";

export default function Create() {
    return (
        <form className="px-4 py-10">
            <InputBox placeholder="Ask a question!" />
            <ButtonText label="Submit" />
        </form>
    );
}
