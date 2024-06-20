import { MongoClient } from "mongodb";
const url = "mongodb+srv://u13040035:java1234@cluster0.rrl2jwu.mongodb.net/";
const options = { useNewUrlParser: true };
let connectDB;

if (process.env.NODE_ENV === "development") {
    // 연결 오버헤드 감소
    if (!global._mongo) {
        global._mongo = new MongoClient(url, options).connect();
    }
    connectDB = global._mongo;
} else {
    connectDB = new MongoClient(url, options).connect();
}

/**
 * @param {String} db
 * @param {String} collection
 * @returns {Promise<Object[]>}
 */
async function getBy(database, collection) {
    try {
        const client = await connectDB;
        const db = client.db(database);
        return await db.collection(collection).find().toArray();
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export { getBy };
