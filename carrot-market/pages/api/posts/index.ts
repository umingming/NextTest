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
    if (req.method === "POST") {
        const { question } = req.body;

        const session = await getServerSession(req, res, authOptions);
        const { id } = session?.user as User;

        const post = await client.post.create({
            data: {
                question,
                user: { connect: { id } },
            },
        });

        return res.json({ ok: true, post });
    }
}

export default withHandler(["GET", "POST"], handler);
