'use server';

import dbConnect, { collectionNameobj } from '@/lib/dbConnect';

export async function registerUser(payload) {
  console.log('Registering user with payload:', payload);
  const userCollection = dbConnect(collectionNameobj.userCollection);

  // Validate the payload
  const { name, email, password } = payload;
  if (!name || !email || !password) {
    return {
      success: false,
      message: 'All fields are required',
    };
  }

  // Check if the user already exists
  const existingUser = await userCollection.findOne({
    email: payload.email,
  });
  if (!existingUser) {
    const result = await userCollection.insertOne(payload);
    if (!result.acknowledged) {
      return {
        success: false,
        message: 'Failed to register user',
      };
    }
  }
  return {
    success: true,
    message: 'User registered successfully',
  };
}
