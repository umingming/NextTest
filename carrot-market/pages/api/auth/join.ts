import client from "@/libs/server/client";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>,
) {
    const { email, password, name, phone } = req.body;

    const user = await client.user.findUnique({ where: { email } });
    if (user) {
        return res.json({ ok: false });
    }

    // 암호화
    const hash = await bcrypt.hash(password, 10);
    await client.user.create({
        data: {
            email,
            name,
            phone: +phone,
            password: hash,
        },
    });

    return res.json({ ok: true });
}

export default withHandler(["POST"], handler);
