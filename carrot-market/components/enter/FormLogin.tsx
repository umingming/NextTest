"use client";

import ButtonText from "@/components/common/button/ButtonText";
import IconBase from "@/components/common/icon/IconBase";
import InputText from "@/components/common/input/InputText";
import { ICON_KEY } from "@/constants/keyConstants";
import useMutation from "@/libs/client/hooks/useMutation";
import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
    email: string;
    password: string;
}

export default function FormLogin() {
    const [login] = useMutation("/api/auth/login");
    const { register, handleSubmit } = useForm<LoginForm>();

    const onValid = (data: LoginForm) => login(data);
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
        </>
    );
}
