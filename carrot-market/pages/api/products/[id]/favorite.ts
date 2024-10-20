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
    if (req.method === "POST") {
        const productId = req.query.id?.toString();
        const session = await getServerSession(req, res, authOptions);
        const { id: userId } = session?.user as User;

        const favorite = await client.productFavorite.findFirst({
            where: { productId, userId },
        });

        if (favorite) {
            const { id } = favorite;
            await client.productFavorite.delete({ where: { id } });
        } else {
            await client.productFavorite.create({
                data: {
                    user: { connect: { id: userId } },
                    product: { connect: { id: productId } },
                },
            });
        }

        return res.json({ ok: true });
    }
}

export default withHandler(["POST"], handler);
