"use client";

import ButtonText from "@/components/common/button/ButtonText";
import CardProfile from "@/components/common/card/CardProfile";
import IconBase from "@/components/common/icon/IconBase";
import { ICON_KEY } from "@/constants/keyConstants";
import { TEXT } from "@/constants/styleConstants";
import useMutation from "@/libs/client/hooks/useMutation";
import { Product, User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import useSWR from "swr";

// type ProductWithUser = Product & { user: User };
interface ProductWithUser extends Product {
    user: User;
}

interface ProductDetailResponse {
    ok: boolean;
    product: ProductWithUser;
    relatedProducts: Product[];
    isLiked: boolean;
}

export default function ProductDetail({ params: { id } }: any) {
    const { data, mutate } = useSWR<ProductDetailResponse>(
        `/api/products/${id}`,
        (url: string) => fetch(url).then((response) => response.json()),
    );
    // const { name, description, price, user } = useMemo<ProductWithUser>(
    //     () => data?.product ?? ({} as ProductWithUser),
    //     [data],
    // );
    // const relatedProducts = useMemo<Product[]>(
    //     () => data?.relatedProducts ?? ([] as Product[]),
    //     [data],
    // );

    // data가 undefined일 수도 있어서 정의해줘야 함.
    const {
        product,
        relatedProducts = [],
        isLiked = false,
    } = data ?? ({} as ProductDetailResponse);
    const { name, description, price, user } = product as ProductWithUser;

    const router = useRouter();
    const goDetail = (id: string) => router.push(`/products/${id}`);

    // const [liked, setLiked] = useState<boolean>(data?.isLiked ?? false);
    const [toggleFavorite] = useMutation(`/api/products/${id}/favorite`);
    const onFavoriteClick = () => {
        // setTimeout(() => setLiked((liked) => !liked), 100);
        toggleFavorite({});

        // mutate에서 두번째 인자로 false를 넣으면 검증하지 않고 그 데이터를 그대로 사용함.
        // true일 경우 검증해서 다르면 제대로된 데이터 보여줌.
        if (data) {
            mutate({ ...data, isLiked: !data.isLiked }, false);
        }
    };

    return (
        <div className="px-4">
            <div className="mb-8">
                <div className="h-96 bg-slate-300" />
                <div className="border-b pl-1">
                    <CardProfile user={user}>
                        <p className="text-xs font-medium text-gray-500">
                            View profile &rarr;
                        </p>
                    </CardProfile>
                </div>
                <div className="mt-4">
                    <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
                    <p className="mt-3 text-2xl text-gray-900">${price}</p>
                    <p className="my-6 text-base text-gray-700">
                        {description}
                    </p>
                    <div className="flex items-center justify-between space-x-2">
                        <ButtonText label="Talk to seller" />
                        <button
                            className="mt-2 flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                            onClick={onFavoriteClick}
                        >
                            <IconBase
                                iconKey={ICON_KEY.LIKE}
                                color={
                                    isLiked ? TEXT.COLOR.RED : TEXT.COLOR.SOFT
                                }
                                isFill={isLiked}
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold text-gray-900">
                    Similar items
                </h2>
                <div className="mt-6 grid grid-cols-2 gap-4">
                    {relatedProducts.map((product) => (
                        <div
                            key={product.id}
                            onClick={() => goDetail(product.id)}
                        >
                            <div className="mb-4 h-56 w-full bg-slate-300" />
                            <h3 className="-mb-1 text-gray-700">
                                {product.name}
                            </h3>
                            <p className="text-sm font-medium text-gray-900">
                                ${product.price}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
