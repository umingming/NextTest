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
        const postId = req.query.id?.toString();
        const session = await getServerSession(req, res, authOptions);
        const { id: userId } = session?.user as User;

        const wondering = await client.postWondering.findFirst({
            where: { postId, userId },
        });

        if (wondering) {
            const { id } = wondering;
            await client.postWondering.delete({ where: { id } });
        } else {
            await client.postWondering.create({
                data: {
                    user: { connect: { id: userId } },
                    post: { connect: { id: postId } },
                },
            });
        }

        return res.json({ ok: true });
    }
}

export default withHandler(["POST"], handler);
