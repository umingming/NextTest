"use client";

import ButtonText from "@/components/common/button/ButtonText";
import CardProfile from "@/components/common/card/CardProfile";
import IconBase from "@/components/common/icon/IconBase";
import InputBox from "@/components/common/input/InputBox";
import { ICON_KEY } from "@/constants/keyConstants";
import { TEXT } from "@/constants/styleConstants";
import useMutation from "@/libs/client/hooks/useMutation";
import { Post, PostAnswer, User } from "@prisma/client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import useSWR from "swr";

interface AnswerWithUser extends PostAnswer {
    user: User;
}

interface AnswerForm {
    answer: string;
}

interface AnswerResponse {
    ok: boolean;
    newAnswer: PostAnswer;
}
interface PostDetailCount {
    answers: number;
    wonderings: number;
}

interface PostDetail extends Post {
    user: User;
    answers: AnswerWithUser[];
    _count: PostDetailCount;
}

interface PostDetailResponse {
    ok: boolean;
    post: PostDetail;
    isWondering: boolean;
}

export default function CommunityDetail({ params: { id } }: any) {
    const { data, mutate } = useSWR<PostDetailResponse>(
        `/api/posts/${id}`,
        (url: string) => fetch(url).then((response) => response.json()),
    );
    const { post, isWondering } = data ?? ({} as PostDetailResponse);
    const {
        question,
        user,
        answers = [] as AnswerWithUser[],
        _count,
    } = post ?? ({} as PostDetail);

    const [toggleWondering] = useMutation(`/api/posts/${id}/wondering`);

    const onWonderingClick = () => {
        if (data) {
            mutate(
                {
                    ...data,
                    post: {
                        ...post,
                        _count: {
                            ..._count,
                            wonderings: data.isWondering
                                ? _count.wonderings - 1
                                : _count.wonderings + 1,
                        },
                    },
                    isWondering: !data.isWondering,
                },
                false,
            );
        }
        toggleWondering({});
    };

    const { register, handleSubmit, reset } = useForm<AnswerForm>();

    const [sendAnswer, { data: answerData }] = useMutation<AnswerResponse>(
        `/api/posts/${id}/answer`,
    );

    const onValid = (data: AnswerForm) => {
        sendAnswer(data);
    };

    useEffect(() => {
        if (answerData?.ok) {
            reset();
            mutate();
        }
    }, [answerData]);

    return (
        <div>
            <span className="mb-3 ml-4 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                동네질문
            </span>
            <div className="border-b pb-1 pl-4">
                <CardProfile user={user}>
                    <p className="text-xs font-medium text-gray-500">
                        View profile &rarr;
                    </p>
                </CardProfile>
            </div>
            <div className="mb-4">
                <div className="mt-2 px-4 text-gray-700">
                    <span className="font-medium text-orange-500">Q. </span>
                    {question}
                </div>
                <div className="mt-3 flex w-full space-x-5 border-b-[2px] border-t px-4 py-2.5 text-gray-700">
                    <span
                        onClick={onWonderingClick}
                        className="flex cursor-pointer items-center space-x-2 text-sm"
                    >
                        <IconBase
                            iconKey={ICON_KEY.QUESTION}
                            color={
                                isWondering
                                    ? TEXT.COLOR.GREEN
                                    : TEXT.COLOR.DEFAULT
                            }
                            strokeWidth={isWondering ? 2.2 : 1.8}
                            size={4}
                        />
                        <span>궁금해요 {_count?.wonderings ?? 0}</span>
                    </span>
                    <span className="flex items-center space-x-2 text-sm">
                        <IconBase iconKey={ICON_KEY.CHAT} size={4} />
                        <span>답변 {_count?.answers ?? 0}</span>
                    </span>
                </div>
            </div>
            {answers.map(({ id, user, answer }) => (
                <div key={id} className="mb-5 mt-1 px-4">
                    <CardProfile user={user} imagePx={8}>
                        <span className="block text-xs text-gray-500">
                            2시간 전
                        </span>
                    </CardProfile>
                    <p className="relative -top-1 ml-10 pl-1 text-gray-700">
                        {answer}
                    </p>
                </div>
            ))}
            <form className="px-4 pt-3" onSubmit={handleSubmit(onValid)}>
                <InputBox
                    register={register("answer", {
                        required: true,
                        minLength: 5,
                    })}
                    placeholder="Answer this question!"
                />
                <ButtonText label="Reply" />
            </form>
        </div>
    );
}
