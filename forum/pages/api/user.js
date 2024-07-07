import { getCollection } from "@/utill/database";
import bcrypt from "bcrypt";

export default async function handler({ method, body }, response) {
    if (method === "POST") {
        const { email, password } = body;
        if (!email || !password) {
            return response.status(400).json("유저 정보 필수 입력");
        }
        try {
            const userCollection = await getCollection("user");
            if (await userCollection.findOne({ email })) {
                return response.status(400).json("존재하는 유저다.");
            }

            // 암호화
            const hash = await bcrypt.hash(body.password, 10);
            body.password = hash;

            // 관리자 여부
            body.isAdmin = body.isAdmin === "on";
            await userCollection.insertOne(body);
            return response.status(200).redirect("/");
        } catch (error) {
            return response.status(500).json("에러났다.");
        }
    }
}
