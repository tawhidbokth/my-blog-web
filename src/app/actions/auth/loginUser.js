'use server';

import dbConnect, { collectionNameobj } from '@/lib/dbConnect';

export async function loginUser(payload) {
  const { email, password } = payload;

  const userCollection = dbConnect(collectionNameobj.userCollection);
  const user = await userCollection.findOne({ email });

  if (!user) return null;

  if (user.password !== password) return null;

  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
  };
}
