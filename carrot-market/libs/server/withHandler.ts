import { NextApiRequest, NextApiResponse } from "next";
export interface ResponseType {
    ok: boolean;
    [key: string]: any;
}

export default async function withHandler(
    method: "GET" | "POST" | "DELETE",
    handler: (req: NextApiRequest, res: NextApiResponse) => void,
): Promise<any> {
    return async function (req: NextApiRequest, res: NextApiResponse) {
        if (req.method !== method) {
            return res.status(405).end();
        }

        try {
            await handler(req, res);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error });
        }
        res.json({ hello: true });
    };
}
