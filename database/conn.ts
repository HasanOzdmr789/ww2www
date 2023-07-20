import { MongoClient } from "mongodb";

const uri2 =
  "mongodb+srv://mbkara:admin13@cluster0.yxbalpx.mongodb.net/?retryWrites=true&w=majority";
const uri = "mongodb://localhost:27017";
const options = {};

if (!uri2) {
  throw new Error('Invalid environment variable: "MONGODB_URI"');
}

let client;
let clientPromise: Promise<MongoClient>;

client = new MongoClient(uri2, options);
clientPromise = client.connect();
console.log("Database Connected");

export default clientPromise;
