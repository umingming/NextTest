import client from "@/libs/server/client";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { User } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>,
) {
    if (req.method === "GET") {
        const id = req.query.id?.toString();
        const session = await getServerSession(req, res, authOptions);
        const { id: userId } = session?.user as User;

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
        const isLiked = Boolean(
            await client.favorite.findFirst({
                where: { productId: id, userId },
                select: { id: true },
            }),
        );

        return res.json({ ok: true, product, relatedProducts, isLiked });
    }
}

export default withHandler(["GET"], handler);
