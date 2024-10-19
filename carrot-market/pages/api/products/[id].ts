import client from "@/libs/server/client";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>,
) {
    if (req.method === "GET") {
        const { id } = req.query;
        const product = await client.product.findUnique({
            where: {
                id: id?.toString(),
            },
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
        return res.json({ ok: true, product });
    }
}

export default withHandler(["GET"], handler);
