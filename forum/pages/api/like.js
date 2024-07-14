import { getCollection } from "@/utill/database";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(request, response) {
    const session = await getServerSession(request, response, authOptions);
    const { method, body, query } = request;

    if (method === "POST") {
        try {
            const { postId, liked } = JSON.parse(body);

            // 유저 정보 추가
            const user = session.user.email;
            const collection = await getCollection("like");

            await collection.updateOne(
                { postId, user }, // 조건
                { $set: { liked } }, // 업데이트 대상
                { upsert: true }, // 옵션; 없을 경우 생성한다.
            );
            return response.status(200).redirect(`/detail/${postId}`);
        } catch (error) {
            return response.status(500).json("에러났다.");
        }
    } else if (method === "GET") {
        try {
            const { postId } = query;
            const collection = await getCollection("like");
            const result = await collection.find({ postId }).toArray();
            return response.status(200).json(result);
        } catch (error) {
            return response.status(500).json("에러났다.");
        }
    }
}
