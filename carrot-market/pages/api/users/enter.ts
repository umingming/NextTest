import client from "@/libs/server/client";
import withHandler from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        res.status(401).end();
    }

    // res.status(200).end();
    return res.json({ ok: true });
}

export default withHandler("POST", handler);
