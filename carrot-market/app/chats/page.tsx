"use client";

import CardProfile from "@/components/common/card/CardProfile";
import { useRouter } from "next/navigation";

export default function Chats() {
    const router = useRouter();
    const goChat = () => router.push("/chats/1");

    return (
        <div className="divide-y-[1px]">
            {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
                <div key={`chat-${i}`} className="px-4" onClick={goChat}>
                    <CardProfile>
                        <p className="text-sm text-gray-500">
                            See you tomorrow in the corner at 2pm!
                        </p>
                    </CardProfile>
                </div>
            ))}
        </div>
    );
}
