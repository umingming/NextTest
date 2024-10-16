import { useId } from "react";

export function useInputHandler() {
    const id = useId();

    return { id };
}
