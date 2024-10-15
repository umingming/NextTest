import InputBase from "./InputBase";

let index = 0;

export default function InputBox({
    label,
    placeholder,
}: {
    label?: string;
    placeholder?: string;
}) {
    const id = `input-box-${++index}`;

    return (
        <InputBase id={id} label={label}>
            <textarea
                id={id}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                rows={4}
                placeholder={placeholder}
            />
        </InputBase>
    );
}
