import { ROUTE_KEY as KEY } from "@/constants/keyConstants";

export interface RouteConfig {
    [KEY.PATH]: string;
    [KEY.TITLE]: string;
    [KEY.ICON]: string;
}
