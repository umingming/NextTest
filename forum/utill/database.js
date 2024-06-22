import { MongoClient, ObjectId } from "mongodb";
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

async function getCollection(collection) {
    try {
        const client = await connectDB;
        const db = client.db("forum");
        return await db.collection(collection);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getPostCollection() {
    return getCollection("post");
}

/**
 * @returns {Promise<Object[]>}
 */
async function findPostAll() {
    try {
        const collection = await getPostCollection();
        return await collection.find().toArray();
    } catch (error) {
        console.log(error);
        throw error;
    }
}

/**
 * @param {String} id
 * @returns {Promise<Object[]>}
 */
async function findPostBy(id) {
    try {
        const client = await connectDB;
        const db = client.db("forum");
        return await db.collection("post").findOne({ _id: new ObjectId(id) });
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export { getCollection, getPostCollection, findPostAll, findPostBy };
