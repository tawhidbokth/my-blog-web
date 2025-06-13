// pages/api/postblog.js
import dbConnect from '@/lib/dbConnect';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { title, date, image, tags, summary, userId, userName } = req.body;

  if (!title || !date || !image || !tags || !summary) {
    return res
      .status(400)
      .json({ success: false, message: 'All fields required' });
  }

  const db = await dbConnect();
  const blogCollection = db.collection('blogs');

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
    return res
      .status(500)
      .json({ success: false, message: 'Failed to post blog' });
  }

  return res
    .status(200)
    .json({ success: true, message: 'Blog posted successfully' });
}
