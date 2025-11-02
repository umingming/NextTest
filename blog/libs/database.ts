import { MongoClient, Db, Collection, ObjectId, Document } from "mongodb";

const url = process.env.MONGODB_URI;

if (!url) {
    throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다.");
}

const options = {};

let connectDB: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
    // 개발 환경에서 연결 오버헤드 감소
    if (!(global as any)._mongo) {
        (global as any)._mongo = new MongoClient(url, options).connect();
    }
    connectDB = (global as any)._mongo;
} else {
    connectDB = new MongoClient(url, options).connect();
}

/**
 * 데이터베이스 연결을 가져옵니다
 */
export async function getDb(): Promise<Db> {
    try {
        const client = await connectDB;
        return client.db("blog");
    } catch (error) {
        console.error("Database connection error:", error);
        throw error;
    }
}

/**
 * 컬렉션을 가져옵니다
 */
export async function getCollection<T extends Document = Document>(
    collectionName: string,
): Promise<Collection<T>> {
    try {
        const db = await getDb();
        return db.collection<T>(collectionName);
    } catch (error) {
        console.error(`Error getting collection ${collectionName}:`, error);
        throw error;
    }
}

/**
 * Post 컬렉션을 가져옵니다
 */
export async function getPostCollection() {
    return getCollection("posts");
}

export { connectDB, ObjectId };
