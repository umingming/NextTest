"use client";

import ButtonCreate from "@/components/common/button/ButtonCreate";
import IconBase from "@/components/common/icon/IconBase";
import { ICON_KEY } from "@/constants/keyConstants";
import { Post, User } from "@prisma/client";
import { useRouter } from "next/navigation";
import useSWR from "swr";

interface PostDetail extends Post {
    user: User;
    _count: {
        answers: number;
        wonderings: number;
    };
}

interface PostsResponse {
    ok: boolean;
    posts: PostDetail[];
}

export default function Community() {
    const router = useRouter();
    const goDetail = (id: string) => router.push(`/community/${id}`);

    const { data = {} } = useSWR<PostsResponse>("/api/posts", (url: string) =>
        fetch(url).then((response) => response.json()),
    );
    const { posts = [] as PostDetail[] } = data as PostsResponse;

    return (
        <div className="space-y-8 px-4">
            {posts.map(({ id, user, ...post }) => (
                <div
                    key={id}
                    className="flex cursor-pointer flex-col items-start"
                    onClick={() => goDetail(id)}
                >
                    <span className="text-gray-80 flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                        동네질문
                    </span>
                    <div className="mt-2 text-gray-700">
                        <span className="font-medium text-orange-500">Q. </span>
                        {post.question}
                    </div>
                    <div className="mt-5 flex w-full items-center justify-between text-xs font-medium text-gray-500">
                        <span>{user.name}</span>
                        <span>18시간 전</span>
                    </div>
                    <div className="mt-3 flex w-full space-x-5 border-b-[1.5px] border-t py-2.5 text-gray-700">
                        <span className="flex items-center space-x-2 text-sm">
                            <IconBase iconKey={ICON_KEY.QUESTION} size={4} />
                            <span>궁금해요 {post._count.wonderings}</span>
                        </span>
                        <span className="flex items-center space-x-2 text-sm">
                            <IconBase iconKey={ICON_KEY.CHAT} size={4} />
                            <span>답변 {post._count.answers}</span>
                        </span>
                    </div>
                </div>
            ))}
            <ButtonCreate iconKey={ICON_KEY.WRITE} />
        </div>
    );
}
