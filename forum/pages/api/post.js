import { getPostCollection } from "@/utill/database";

export default async function handler({ method, body }, response) {
    if (method === "POST") {
        if (!body.title) {
            return response.status(400).json("제목 써라");
        }
        try {
            const collection = await getPostCollection();
            const { insertedId } = await collection.insertOne(body);
            return response.status(200).redirect(`/detail/${insertedId}`);
        } catch (error) {
            return response.status(500).json("에러났다.");
        }
    }
}
