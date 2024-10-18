"use client";

import ButtonText from "@/components/common/button/ButtonText";
import CardProfile from "@/components/common/card/CardProfile";
import IconBase from "@/components/common/icon/IconBase";
import { ICON_KEY } from "@/constants/keyConstants";
import { Product } from "@prisma/client";
import { useMemo } from "react";
import useSWR from "swr";

export default function ProductDetail({ params: { id } }: any) {
    const { data } = useSWR(`/api/products/${id}`, (url) =>
        fetch(url).then((response) => response.json()),
    );
    const { name, description, price } = useMemo<Product>(
        () => data?.product ?? {},
        [data],
    );

    return (
        <div className="px-4">
            <div className="mb-8">
                <div className="h-96 bg-slate-300" />
                <div className="border-b pl-1">
                    <CardProfile>
                        <p className="text-xs font-medium text-gray-500">
                            View profile &rarr;
                        </p>
                    </CardProfile>
                </div>
                <div className="mt-4">
                    <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
                    <p className="mt-3 text-3xl text-gray-900">${price}</p>
                    <p className="my-6 text-base text-gray-700">
                        {description}
                    </p>
                    <div className="flex items-center justify-between space-x-2">
                        <ButtonText label="Talk to seller" />
                        <button className="flex items-center justify-center rounded-md p-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                            <IconBase iconKey={ICON_KEY.LIKE} />
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold text-gray-900">
                    Similar items
                </h2>
                <div className="mt-6 grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((_, i) => (
                        <div key={`similar-item-${i}`}>
                            <div className="mb-4 h-56 w-full bg-slate-300" />
                            <h3 className="-mb-1 text-gray-700">Galaxy S60</h3>
                            <p className="text-sm font-medium text-gray-900">
                                $6
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
