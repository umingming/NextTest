import { InputProps } from "@/types/input";
import { useId } from "react";
import InputBase from "./InputBase";

export default function InputBox({ label, placeholder }: InputProps) {
    const id = useId();

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
