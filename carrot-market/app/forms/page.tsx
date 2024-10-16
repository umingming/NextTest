"use client";

import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
    username: string;
    password: string;
    email: string;
}

export default function Forms() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>();
    const onValid = (data: LoginForm) => console.log(data, "valid");
    const onInvalid = (errors: FieldErrors) => console.log(errors);

    return (
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
            <input
                {...register("username", {
                    required: "Username is required",
                    minLength: {
                        message: "Username should be longer than 5 chars",
                        value: 5,
                    },
                })}
                type="text"
                placeholder="User Name"
            />
            {errors.username?.message}
            <input
                {...register("email", {
                    required: true,
                    validate: {
                        notGmail: (value) =>
                            !value.includes("@gmail.com") ||
                            "Gmail is not allowed",
                    },
                })}
                type="email"
                placeholder="Email"
                className={
                    Boolean(errors.email?.message)
                        ? "border-red-500"
                        : "border-blue-500"
                }
            />
            {errors.email?.message}
            <input
                {...register("password", {
                    required: "Password is required",
                })}
                type="password"
                placeholder="Password"
            />
            {errors.password?.message}
            <input type="submit" placeholder="Create Account" />
        </form>
    );
}
