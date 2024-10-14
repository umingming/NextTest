import { IconKey, MENU_KEY as KEY } from "@/constants/keyConstants";

export interface MenuConfig {
    [KEY.PATH]: string;
    [KEY.TITLE]: string;
    [KEY.ICON]: IconKey;
}
