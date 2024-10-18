import client from "@/libs/server/client";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { User as PrismaUser } from "@prisma/client";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>,
) {
    const { name, price, description } = req.body;

    const session = await getServerSession(req, res, authOptions);
    const { id } = session?.user as PrismaUser;

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

export default withHandler("POST", handler);
