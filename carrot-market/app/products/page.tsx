"use client";

import ButtonCreate from "@/components/common/button/ButtonCreate";
import CardItem from "@/components/common/card/CardItem";
import { Product } from "@prisma/client";
import { useMemo } from "react";
import useSWR from "swr";

export default function Products() {
    const { data } = useSWR("/api/products", (url) =>
        fetch(url).then((response) => response.json()),
    );
    const products = useMemo<Product[]>(() => data.products ?? [], [data]);

    return (
        <div className="flex flex-col space-y-5">
            {products.map((product) => (
                <CardItem key={product.id} {...product} />
            ))}
            <ButtonCreate />
        </div>
    );
}
