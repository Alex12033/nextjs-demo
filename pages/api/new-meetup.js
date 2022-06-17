import { MongoClient } from "mongodb";

async function handler(req, res) {
    if (req.method === "POST") {
      const data = req.body;

      const client = await MongoClient.connect(
        "mongodb+srv://test:123@cluster0.ytg5u.mongodb.net/meetups?retryWrites=true&w=majority"
      );
      const db = client.db();

      const meetupsCollection = db.collection("meetups");

      const result = await meetupsCollection.insertOne(data);

      client.close(result);

      res.status(201).json({ message: "Meetup inserted!" });
    }
}

export default handler;
