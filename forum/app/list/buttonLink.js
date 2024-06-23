"use client";

import { useRouter } from "next/navigation";

export default function ButtonLink({ id, type }) {
    // cilent 컴포넌트에서만 가능함
    const router = useRouter();

    function go() {
        const url = `/${type}/${id}`;
        router.prefetch(url);
        router.push(url);
    }

    return <button onClick={go}>{type}</button>;
}
