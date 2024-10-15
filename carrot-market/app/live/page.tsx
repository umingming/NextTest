"use client";

import ButtonCreate from "@/components/common/button/ButtonCreate";
import { ICON_KEY } from "@/constants/keyConstants";
import { useRouter } from "next/navigation";

export default function Live() {
    const router = useRouter();
    const goLive = () => router.push("/live/1");

    return (
        <div className="space-y-2 divide-y-2 px-4">
            {[1, 2, 3, 4, 5].map((_, i) => (
                <div key={`live-${i}`} className="pt-4" onClick={goLive}>
                    <div className="aspect-video w-full rounded-md bg-slate-300 shadow-sm" />
                    <h3 className="mt-2 text-lg font-medium text-gray-700">
                        Lets try potatos
                    </h3>
                </div>
            ))}
            <ButtonCreate iconKey={ICON_KEY.LIVE} />
        </div>
    );
}
