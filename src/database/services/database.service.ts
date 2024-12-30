import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: {tierlist?: mongoDB.Collection, users?: mongoDB.Collection} = {};

dotenv.config();

export async function connectToDB() {

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.MONGODB_URI!);

    await client.connect();

    const db: mongoDB.Db = client.db(process.env.DB_NAME);

    const tierCollection: mongoDB.Collection = db.collection(process.env.TIERLIST_COLLECTION_NAME!);
    const userCollection: mongoDB.Collection = db.collection(process.env.USERS_COLLECTION_NAME!)

    collections.tierlist = tierCollection;
    collections.users = userCollection;
    
    console.log(`Successfully connected to database ${db.databaseName} and collection ${tierCollection.collectionName} ${userCollection.collectionName}`)
    
}   