import { UseFormRegisterReturn } from "react-hook-form";

export interface InputProps {
    type?: string;
    label?: string;
    placeholder?: string;
    register?: UseFormRegisterReturn;
}
