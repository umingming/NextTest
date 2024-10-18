import { NextApiRequest, NextApiResponse } from "next";
export interface ResponseType {
    ok: boolean;
    [key: string]: any;
}

type Method = "GET" | "POST" | "DELETE";

export default function withHandler(
    methods: Method[],
    handler: (req: NextApiRequest, res: NextApiResponse) => void,
) {
    return async function (req: NextApiRequest, res: NextApiResponse) {
        if (!methods.includes(req.method as Method)) {
            return res.status(405).end();
        }

        try {
            await handler(req, res);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error });
        }
    };
}
