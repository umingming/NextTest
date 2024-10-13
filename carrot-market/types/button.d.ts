import { IconKey } from "@/constants/keyConstants";

export interface ButtonProps {
    label?: string;
    iconKey?: IconKey;
    onClick?: () => void;
}
