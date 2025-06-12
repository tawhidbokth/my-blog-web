'use server';

import dbConnect, { collectionNameobj } from '@/lib/dbConnect';

export async function registerUser(payload) {
  const userCollection = dbConnect(collectionNameobj.userCollection);

  const { name, email, password } = payload;

  if (!name || !email || !password) {
    return {
      success: false,
      message: 'All fields are required',
    };
  }

  const existingUser = await userCollection.findOne({ email });

  if (existingUser) {
    return {
      success: false,
      message: 'This email is already registered',
    };
  }

  const result = await userCollection.insertOne({ name, email, password });

  if (!result.acknowledged) {
    return {
      success: false,
      message: 'Failed to register user',
    };
  }

  return {
    success: true,
    message: 'User registered successfully',
  };
}
