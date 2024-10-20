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

        const post = await client.post.findUnique({
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
                answers: true,
                _count: {
                    select: {
                        answers: true,
                        wonderings: true,
                    },
                },
            },
        });
        return res.json({ ok: true, post });
    }
}

export default withHandler(["GET"], handler);
