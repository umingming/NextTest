import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./[...nextauth]";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>,
) {
    const session = await getServerSession(req, res, authOptions);
    console.log(session);

    return res.json({ ok: true });
}
export default withHandler("POST", handler);
