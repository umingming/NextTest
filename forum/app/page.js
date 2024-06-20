import { getBy } from "@/utill/database";

export default async function Home() {
    const result = await getBy("forum", "post");

    return <div></div>;
}
