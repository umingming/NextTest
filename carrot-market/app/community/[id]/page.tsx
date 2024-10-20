"use client";

import ButtonText from "@/components/common/button/ButtonText";
import CardProfile from "@/components/common/card/CardProfile";
import IconBase from "@/components/common/icon/IconBase";
import InputBox from "@/components/common/input/InputBox";
import { ICON_KEY } from "@/constants/keyConstants";
import { Post, PostAnswer, User } from "@prisma/client";

import useSWR from "swr";

interface PostDetail extends Post {
    user: User;
    answers: PostAnswer[];
    _count: {
        answers: number;
        wonderings: number;
    };
}

interface PostDetailResponse {
    ok: boolean;
    post: PostDetail;
}

export default function CommunityDetail({ params: { id } }: any) {
    const { data } = useSWR<PostDetailResponse>(
        `/api/posts/${id}`,
        (url: string) => fetch(url).then((response) => response.json()),
    );
    const { question, user, _count } = data?.post ?? ({} as PostDetail);

    return (
        <div>
            <span className="my-3 ml-4 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                동네질문
            </span>
            <div className="border-b pb-1 pl-4">
                <CardProfile user={user}>
                    <p className="text-xs font-medium text-gray-500">
                        View profile &rarr;
                    </p>
                </CardProfile>
            </div>
            <div>
                <div className="mt-2 px-4 text-gray-700">
                    <span className="font-medium text-orange-500">Q. </span>
                    {question}
                </div>
                <div className="mt-3 flex w-full space-x-5 border-b-[2px] border-t px-4 py-2.5 text-gray-700">
                    <span className="flex items-center space-x-2 text-sm">
                        <IconBase iconKey={ICON_KEY.QUESTION} size={4} />
                        <span>궁금해요 {_count?.wonderings ?? 0}</span>
                    </span>
                    <span className="flex items-center space-x-2 text-sm">
                        <IconBase iconKey={ICON_KEY.CHAT} size={4} />
                        <span>답변 {_count?.answers ?? 0}</span>
                    </span>
                </div>
            </div>
            <div className="mb-5 mt-1 px-4">
                <CardProfile imagePx={8}>
                    <span className="block text-xs text-gray-500">
                        2시간 전
                    </span>
                </CardProfile>
                <p className="relative -top-1 ml-10 pl-1 text-gray-700">
                    The best mandu restaurant is the one next to my house.
                </p>
            </div>
            <div className="px-4">
                <InputBox placeholder="Answer this question!" />
                <ButtonText label="Reply" />
            </div>
        </div>
    );
}
