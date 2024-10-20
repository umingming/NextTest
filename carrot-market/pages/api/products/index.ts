import client from "@/libs/server/client";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { Product, User } from "@prisma/client";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>,
) {
    if (req.method === "GET") {
        const products = await client.product.findMany({
            include: {
                _count: {
                    select: {
                        favorites: true,
                    },
                },
            },
        });
        return res.json({ ok: true, products });
    }

    if (req.method === "POST") {
        const { name, price, description } = req.body;

        const session = await getServerSession(req, res, authOptions);
        const { id } = session?.user as User;

        const product = await client.product.create({
            data: {
                name,
                price: +price,
                description,
                user: { connect: { id } },
            },
        });

        return res.json({ ok: true, product });
    }
}

export default withHandler(["GET", "POST"], handler);
