import { getCollection } from "@/utill/database";

export default async function handler(request, response) {
    const { method, query } = request;

    if (method === "GET") {
        try {
            const { postId } = query;
            const collection = await getCollection("comment");
            const result = await collection.findAll({ postId });
            console.log(result);
            return response.status(200).redirect(`/detail/${postId}`);
        } catch (error) {
            return response.status(500).json("에러났다.");
        }
    }
}
