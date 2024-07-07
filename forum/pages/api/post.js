import { getPostCollection } from "@/utill/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(request, response) {
    const session = await getServerSession(request, response, authOptions);
    const { method, body, params, query } = request;

    if (method === "POST") {
        try {
            const { id, title, content } = body;
            if (!title) {
                return response.status(400).json("제목 써라");
            }
            // 유저 정보 추가
            body.author = session.user.email;
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
