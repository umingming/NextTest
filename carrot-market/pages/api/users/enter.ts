import client from "@/libs/server/client";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

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

    // 느낌표를 붙이면 확실히 존재하는 값이라고 알려줄 수 있음.
    const message = await twilioClient.messages.create({
        messagingServiceSid: process.env.TWILIO_MSID,
        to: process.env.MY_PHONE!,
        body: `Your login token is ${payload}`,
    });
    console.log(message);

    return res.json({
        ok: true,
    });
}

export default withHandler("POST", handler);
