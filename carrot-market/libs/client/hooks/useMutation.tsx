"use client";

import { useState } from "react";

interface UseMutationState {
    loading: boolean;
    data?: object;
    error?: object;
}
type UseMutationResult = [(data: any) => void, UseMutationState];

export default function useMutation(url: string): UseMutationResult {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<undefined | any>(undefined);
    const [error, setError] = useState<undefined | any>(undefined);

    function mutation(data: any): void {
        setLoading(true);

        fetch(url, {
            method: "POST",
            // header를 지정하지 않으면 서버에서 body의 프로퍼티에 접근할 수 없다.
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));
    }

    return [mutation, { loading, data, error }];
}
