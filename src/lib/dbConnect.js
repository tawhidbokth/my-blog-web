import { MongoClient, ServerApiVersion } from 'mongodb';

export const collectionNameobj = {
  userCollection: 'usersdb',
  blogCollection: 'postsdb',
};

export default function dbConnect(collectionName) {
  const uri =
    'mongodb+srv://myBlogPlatfrom:BsvCxMqnWbkCtHTa@cluster0.yzegd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0;';
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client.db('myBlogPlatfrom').collection(collectionName);
}
