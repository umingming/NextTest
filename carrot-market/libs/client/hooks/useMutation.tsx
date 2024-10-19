"use client";

import { useState } from "react";

interface UseMutationState<T> {
    loading: boolean;
    data?: T;
    error?: object;
}
type UseMutationResult<T> = [(data: any) => void, UseMutationState<T>];

export default function useMutationM<T>(url: string): UseMutationResult<T> {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<undefined | T>(undefined);
    const [error, setError] = useState<undefined | any>(undefined);

    function mutation(body: any): void {
        setLoading(true);
        fetch(url, {
            method: "POST",
            // header를 지정하지 않으면 서버에서 body의 프로퍼티에 접근할 수 없다.
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
            .then((response) => response.json())
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));
    }

    return [mutation, { loading, data, error }];
}
