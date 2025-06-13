// app/api/postblog/route.js

import { NextResponse } from 'next/server';
import dbConnect, { collectionNameobj } from '@/lib/dbConnect';

export async function POST(req) {
  const body = await req.json();
  const { title, date, image, tags, summary, userId, userName } = body;

  if (!title || !date || !image || !tags || !summary) {
    return NextResponse.json(
      { success: false, message: 'All fields are required' },
      { status: 400 }
    );
  }

  const blogCollection = await dbConnect(collectionNameobj.blogCollection);

  const result = await blogCollection.insertOne({
    title,
    date,
    image,
    tags,
    summary,
    userId,
    userName,
  });

  if (!result.acknowledged) {
    return NextResponse.json(
      { success: false, message: 'Failed to post blog' },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    message: 'Blog posted successfully',
  });
}
