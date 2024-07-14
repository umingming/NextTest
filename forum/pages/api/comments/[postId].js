import { getCollection } from "@/utill/database";

export default async function handler(request, response) {
    const { method, query } = request;

    if (method === "GET") {
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
