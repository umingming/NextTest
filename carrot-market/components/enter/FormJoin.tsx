"use client";

import ButtonText from "@/components/common/button/ButtonText";
import InputText from "@/components/common/input/InputText";
import useMutation from "@/libs/client/hooks/useMutation";
import { FieldErrors, useForm } from "react-hook-form";
import InputPhone from "../common/input/InputPhone";

interface JoinForm {
    email: string;
    password: string;
    phone: string;
    name: string;
}

export default function FormJoin() {
    const [join] = useMutation("/api/auth/join");
    const { register, handleSubmit } = useForm<JoinForm>();

    const onValid = (data: JoinForm) => join(data);
    const onInvalid = (errors: FieldErrors) => console.log(errors);

    return (
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
            <InputText register={register("name")} label="Name" />
            <InputPhone register={register("phone")} />
            <ButtonText label="Join" />
        </form>
    );
}
