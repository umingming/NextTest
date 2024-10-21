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
        const { latitude, longitude } = req.query;

        const posts = await client.post.findMany({
            where: {
                latitude: {
                    gte: (Number(latitude) || 0) - 0.01,
                    lte: (Number(latitude) || 0) + 0.01,
                },
                longitude: {
                    gte: (Number(longitude) || 0) - 0.01,
                    lte: (Number(longitude) || 0) + 0.01,
                },
            },
            include: {
                user: { select: { name: true } },
                _count: {
                    select: {
                        answers: true,
                        wonderings: true,
                    },
                },
            },
        });
        return res.json({ ok: true, posts });
    }

    if (req.method === "POST") {
        const { question, latitude, longitude } = req.body;

        const session = await getServerSession(req, res, authOptions);
        const { id } = session?.user as User;

        const post = await client.post.create({
            data: {
                question,
                latitude,
                longitude,
                user: { connect: { id } },
            },
        });

        return res.json({ ok: true, post });
    }
}

export default withHandler(["GET", "POST"], handler);
