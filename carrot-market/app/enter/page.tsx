"use client";

import ButtonText from "@/components/common/button/ButtonText";
import IconBase from "@/components/common/icon/IconBase";
import InputPhone from "@/components/common/input/InputPhone";
import InputText from "@/components/common/input/InputText";
import { ICON_KEY } from "@/constants/keyConstants";
import useMutation from "@/libs/client/hooks/useMutation";
import { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";

const METHOD = {
    EMAIL: "email",
    PHONE: "phone",
} as const;

interface EnterForm {
    email?: string;
    phone?: string;
}

type MethodType = (typeof METHOD)[keyof typeof METHOD];

export default function Enter() {
    const [enter, { loading, data, error }] = useMutation("/api/users/enter");
    const { register, handleSubmit, reset } = useForm<EnterForm>();
    const [method, setMethod] = useState<MethodType>(METHOD.EMAIL);

    const isMethodEmail = () => method === METHOD.EMAIL;
    const onMethodClick = (newMethod: MethodType) => {
        reset();
        setMethod(newMethod);
    };

    const onValid = (data: EnterForm) => enter(data);
    const onInvalid = (errors: FieldErrors) => console.log(errors);

    console.log(loading, data, error);

    return (
        <div className="mt-16">
            <h3 className="text-center text-3xl font-bold">Enter to Carrot</h3>
            <div className="mt-16 px-4">
                <div className="flex flex-col items-center">
                    <h5 className="text-sm font-medium text-gray-500">
                        Enter using:
                    </h5>
                    <div className="mt-8 grid w-full grid-cols-2 border-b border-transparent">
                        {Object.values(METHOD).map((value) => (
                            <button
                                key={value}
                                className={`pb-4 font-medium ${
                                    method === value &&
                                    "border-b-2 border-orange-500 text-orange-400"
                                }`}
                                onClick={() => onMethodClick(value)}
                            >
                                {value.toString()}
                            </button>
                        ))}
                    </div>
                </div>
                <form
                    className="mt-8 flex flex-col"
                    onSubmit={handleSubmit(onValid, onInvalid)}
                >
                    {isMethodEmail() ? (
                        <>
                            <InputText
                                register={register(METHOD.EMAIL)}
                                type="email"
                                label="Email address"
                            />
                            <ButtonText label="Get login link" />
                        </>
                    ) : (
                        <>
                            <InputPhone register={register(METHOD.PHONE)} />
                            <ButtonText label="Get one-time password" />
                        </>
                    )}
                </form>
                <div className="mt-8">
                    <div className="relative">
                        <div className="absolute w-full border-t border-gray-300" />
                        <div className="relative -top-3 text-center">
                            <span className="bg-white px-2 text-sm text-gray-500">
                                Or enter with
                            </span>
                        </div>
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-3">
                        <button className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 pb-2 pt-3 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50">
                            <IconBase
                                iconKey={ICON_KEY.GITHUB}
                                isFill={true}
                                strokeWidth={0}
                            />
                        </button>
                        <button className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 pb-2 pt-3 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50">
                            <IconBase
                                iconKey={ICON_KEY.TWITTER}
                                isFill={true}
                                strokeWidth={0}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
