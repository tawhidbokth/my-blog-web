'use client';

import { useState } from 'react';

export default function PostBlog({ user }) {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    image: '',
    tags: '',
    summary: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    const blogData = {
      id: Date.now(), // Optional if MongoDB auto-generates _id
      title: formData.title,
      author: user?.name || 'Anonymous',
      date: formData.date,
      image: formData.image,
      tags: formData.tags.split(',').map(tag => tag.trim()),
      summary: formData.summary,
    };

    try {
      const res = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blogData),
      });

      const data = await res.json();

      if (res.ok) {
        alert('✅ Blog posted successfully!');
        setFormData({
          title: '',
          date: '',
          image: '',
          tags: '',
          summary: '',
        });
      } else {
        alert(`❌ Failed: ${data.message}`);
      }
    } catch (err) {
      alert('❌ Server Error');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen px-4 py-10 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Create a Blog Post
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            placeholder="Blog Title"
            required
            className="w-full border px-4 py-2 rounded-md"
          />
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded-md"
          />
          <input
            name="image"
            type="text"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            required
            className="w-full border px-4 py-2 rounded-md"
          />
          <input
            name="tags"
            type="text"
            value={formData.tags}
            onChange={handleChange}
            placeholder="Tags (comma separated)"
            className="w-full border px-4 py-2 rounded-md"
          />
          <textarea
            name="summary"
            rows="5"
            value={formData.summary}
            onChange={handleChange}
            placeholder="Blog Summary"
            className="w-full border px-4 py-2 rounded-md"
            required
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition disabled:opacity-60"
          >
            {loading ? 'Posting...' : 'Post Blog'}
          </button>
        </form>
      </div>
    </div>
  );
}
