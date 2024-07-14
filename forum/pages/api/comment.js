import { getCollection } from "@/utill/database";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(request, response) {
    const session = await getServerSession(request, response, authOptions);
    const { method, body, query } = request;

    if (method === "POST") {
        try {
            const { postId, comment } = JSON.parse(body);
            if (!comment) {
                return response.status(400).json("댓글 써라");
            }

            // 유저 정보 추가
            const author = session.user.email;
            const collection = await getCollection("comment");
            await collection.insertOne({ postId, comment, author });

            return response.status(200).redirect(`/detail/${postId}`);
        } catch (error) {
            return response.status(500).json("에러났다.");
        }
    } else if (method === "GET") {
        try {
            const { postId } = query;
            const collection = await getCollection("comment");
            const result = await collection.find({ postId }).toArray();
            return response.status(200).json(result);
        } catch (error) {
            return response.status(500).json("에러났다.");
        }
    }
}
