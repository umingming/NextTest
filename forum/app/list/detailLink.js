"use client";

import {
    useRouter,
    usePathname,
    useSearchParams,
    useParams,
} from "next/navigation";

export default function DetailLink({ id }) {
    // cilent 컴포넌트에서만 가능함
    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const params = useParams();

    function goDetail() {
        console.log(pathName);
        console.log(searchParams);
        console.log(params);
        const url = `/detail/${id}`;
        router.prefetch(url);
        router.push(url);
    }

    return <button onClick={goDetail}>버튼</button>;
}
