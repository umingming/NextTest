"use client";

import FormJoin from "@/components/enter/FormJoin";
import FormLogin from "@/components/enter/FormLogin";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const METHOD = {
    LOGIN: "login",
    JOIN: "join",
} as const;

type MethodType = (typeof METHOD)[keyof typeof METHOD];

export default function Enter() {
    const [method, setMethod] = useState<MethodType>(METHOD.LOGIN);
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session) {
            router.push("/products");
        }
    });

    const isMethodLogin = () => method === METHOD.LOGIN;

    return (
        <div className="mt-16">
            <h3 className="text-center text-3xl font-bold">Enter to Carrot</h3>
            <div className="mt-10 px-4">
                <div className="flex flex-col items-center">
                    <div className="grid w-full grid-cols-2 border-b border-transparent">
                        {Object.values(METHOD).map((value) => (
                            <button
                                key={value}
                                className={`pb-4 font-medium ${
                                    method === value &&
                                    "border-b-2 border-orange-500 text-orange-400"
                                }`}
                                onClick={() => setMethod(value)}
                            >
                                {value.replace(/^[a-z]/, (char) =>
                                    char.toUpperCase(),
                                )}
                            </button>
                        ))}
                    </div>
                </div>
                {isMethodLogin() ? (
                    <FormLogin />
                ) : (
                    <FormJoin afterJoin={() => setMethod(METHOD.LOGIN)} />
                )}
            </div>
        </div>
    );
}
