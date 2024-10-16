import { InputProps } from "@/types/input";
import { useId } from "react";
import InputBase from "./InputBase";

export default function InputText({
    type = "text",
    label,
    placeholder,
    register,
}: InputProps) {
    const id = useId();

    return (
        <InputBase id={id} label={label}>
            <div className="relative flex items-center rounded-md shadow-sm">
                <input
                    id={id}
                    {...register}
                    type={type}
                    placeholder={placeholder}
                    className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                    required
                />
            </div>
        </InputBase>
    );
}
