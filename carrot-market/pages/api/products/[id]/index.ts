import client from "@/libs/server/client";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>,
) {
    if (req.method === "GET") {
        const id = req.query.id?.toString();
        const product = await client.product.findUnique({
            where: { id },
            include: {
                // user: true 하면 모든 데이터 가져옴.
                user: {
                    select: {
                        id: true,
                        name: true,
                        image: true,
                    },
                },
            },
        });
        const terms = product!.name.split(" ").map((word) => ({
            name: { contains: word },
        }));
        const relatedProducts = await client.product.findMany({
            where: {
                OR: terms,
                AND: {
                    id: {
                        not: id,
                    },
                },
            },
        });

        return res.json({ ok: true, product, relatedProducts });
    }
}

export default withHandler(["GET"], handler);
