"use client";

import ButtonText from "@/components/common/button/ButtonText";
import InputBox from "@/components/common/input/InputBox";
import { useCoords } from "@/libs/client/hooks/useCoords";
import useMutation from "@/libs/client/hooks/useMutation";
import { Post } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface CreateForm {
    question: string;
}

interface CreateResponse {
    ok: boolean;
    post: Post;
}

export default function Create() {
    const { latitude, longitude } = useCoords();
    const { register, handleSubmit } = useForm<CreateForm>();
    const [post, { data }] = useMutation<CreateResponse>("/api/posts");
    const onValid = (data: CreateForm) => {
        post({ ...data, latitude, longitude });
    };
    const router = useRouter();
    useEffect(() => {
        if (data && data.ok) {
            router.push(`/community/${data.post.id}`);
        }
    }, [data]);

    return (
        <form className="px-4 py-10" onSubmit={handleSubmit(onValid)}>
            <InputBox
                register={register("question", {
                    required: true,
                    minLength: 5,
                })}
                placeholder="Ask a question!"
            />
            <ButtonText label="Submit" />
        </form>
    );
}
