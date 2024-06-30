import { getPostCollection } from "@/utill/database";
import { ObjectId } from "mongodb";

export default async function handler(
    { method, body, params, query },
    response,
) {
    if (method === "POST") {
        try {
            const { id, title, content } = body;
            if (!title) {
                return response.status(400).json("제목 써라");
            }
            // const collection = await getPostCollection();
            // await collection.updateOne(
            //     { _id: new ObjectId(id) },
            //     { $set: { title, content } },
            // );
            const collection = await getPostCollection();
            const { insertedId } = await collection.insertOne(body);
            return response.status(200).redirect(`/detail/${insertedId}`);
        } catch (error) {
            return response.status(500).json("에러났다.");
        }
    } else if (method === "PUT") {
        try {
            console.log(params);
            return response.status(200).redirect("list");
        } catch (error) {
            return response.status(500).json("에러났다.");
        }
    } else if (method === "DELETE") {
        try {
            console.log(query);
            const collection = await getPostCollection();
            const { id } = JSON.parse(body);
            await collection.deleteOne({ _id: new ObjectId(id) });
            return response.status(200).redirect("list");
        } catch (error) {
            return response.status(500).json("에러났다.");
        }
    }
}
