import { getCollection } from "@/utill/database";

export default async function handler({ method, body }, response) {
    if (method === "POST") {
        const { id, password } = body;
        if (!id || !password) {
            return response.status(400).json("유저 정보 필수 입력");
        }
        try {
            const userCollection = await getCollection("user");
            if (await userCollection.findOne({ id })) {
                return response.status(400).json("존재하는 유저다.");
            }
            await userCollection.insertOne(body);
            return response.status(200).redirect("/");
        } catch (error) {
            return response.status(500).json("에러났다.");
        }
    }
}
