import { MongoClient, ServerApiVersion } from 'mongodb';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const collectionNameobj = {
  userCollection: 'usersdb',
};
export default function dbConnect(collectionName) {
  const uri =
    'mongodb+srv://myBlogPlatfrom:BsvCxMqnWbkCtHTa@cluster0.yzegd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0;';
  console.log('Connecting to MongoDB with URI:', uri);
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  return client.db('myBlogPlatfrom').collection(collectionName);
}
