import { findPostAll } from "@/utill/database";

export default async function handler(_, response) {
    const posts = await findPostAll();
    response.status(200).json(posts);
}
