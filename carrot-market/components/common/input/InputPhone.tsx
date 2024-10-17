import { InputProps } from "@/types/input";
import { useId } from "react";
import InputBase from "./InputBase";

export default function InputPhone({ register }: InputProps) {
    const id = useId();

    return (
        <InputBase id={id} label="Phone number">
            <div className="shodw-sm mb-4 flex rounded-md">
                <span className="flex select-none items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500">
                    +82
                </span>
                <input
                    id={id}
                    {...register}
                    className="w-full appearance-none rounded-md rounded-l-none border border-gray-300 px-4 py-2 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                    type="number"
                    required
                />
            </div>
        </InputBase>
    );
}
