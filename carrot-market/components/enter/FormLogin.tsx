"use client";

import ButtonText from "@/components/common/button/ButtonText";
import IconBase from "@/components/common/icon/IconBase";
import InputText from "@/components/common/input/InputText";
import { ICON_KEY } from "@/constants/keyConstants";
import { FieldErrors, useForm } from "react-hook-form";
import { signIn, signOut } from "next-auth/react";

interface LoginForm {
    email: string;
    password: string;
}

export default function FormLogin() {
    const { register, handleSubmit } = useForm<LoginForm>();

    const onValid = async ({ email, password }: LoginForm) =>
        await signIn("credentials", {
            email,
            password,
            redirect: false,
        });
    const onInvalid = (errors: FieldErrors) => console.log(errors);

    return (
        <>
            <form
                className="mt-5 flex flex-col"
                onSubmit={handleSubmit(onValid, onInvalid)}
            >
                <InputText
                    register={register("email")}
                    type="email"
                    label="Email address"
                />
                <InputText
                    register={register("password")}
                    type="password"
                    label="Password"
                />
                <ButtonText label="Login" />
                <ButtonText label="Logout" onClick={() => signOut()} />
            </form>
            <div className="mt-10">
                <div className="relative">
                    <div className="absolute w-full border-t border-gray-300" />
                    <div className="relative -top-3 text-center">
                        <span className="bg-white px-2 text-sm text-gray-500">
                            Or enter with
                        </span>
                    </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                    <button
                        className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 pb-2 pt-3 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                        onClick={() => signIn("github")}
                    >
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
        </>
    );
}
