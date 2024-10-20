import client from "@/libs/server/client";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>,
) {
    const { phone, email } = req.body;
    const payload = `${Date.now()}.${Math.floor(Math.random() * 1000)}`;

    const token = await client.token.create({
        data: {
            payload,
            user: {
                connectOrCreate: {
                    where: { email },
                    create: {
                        name: "Anonymous",
                        email,
                    },
                },
            },
        },
    });

    return res.json({
        ok: true,
    });
}

export default withHandler("POST", handler);
