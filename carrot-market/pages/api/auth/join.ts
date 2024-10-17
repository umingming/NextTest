import client from "@/libs/server/client";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>,
) {
    const { email, password, name, phone } = req.body;

    const user = await client.user.findUnique({ where: { email } });
    if (user) {
        return res.json({ ok: false });
    }
    const payload = `${Date.now()}.${Math.floor(Math.random() * 1000)}`;

    const token = await client.token.create({
        data: {
            payload,
            user: {
                connectOrCreate: {
                    where: { email },
                    create: {
                        email,
                        password,
                        name,
                        phone: +phone,
                    },
                },
            },
        },
    });

    return res.json({ ok: true });
}

export default withHandler("POST", handler);
