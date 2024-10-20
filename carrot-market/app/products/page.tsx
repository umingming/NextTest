"use client";

import ButtonCreate from "@/components/common/button/ButtonCreate";
import CardItem from "@/components/common/card/CardItem";
import { Product } from "@prisma/client";
import useSWR from "swr";

interface ProductWithFavoriteCount extends Product {
    _count: {
        favorites: number;
    };
}

interface ProductsResponse {
    ok: boolean;
    products: ProductWithFavoriteCount[];
}

export default function Products() {
    const { data = {} } = useSWR<ProductsResponse>(
        "/api/products",
        (url: string) => fetch(url).then((response) => response.json()),
    );
    const { products = [] as ProductWithFavoriteCount[] } =
        data as ProductsResponse;

    return (
        <div className="flex flex-col space-y-5">
            {products.map((product) => (
                <CardItem key={product.id} {...product} />
            ))}
            <ButtonCreate />
        </div>
    );
}
