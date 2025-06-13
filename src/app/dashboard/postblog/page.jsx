'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PostBlog() {
  const { data: session, status } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login'); // 👈 login page route
    }
  }, [status, router]);

  if (status === 'loading') {
    return <p>Loading...</p>; // or spinner
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = e.target;
    const title = formData.title.value;
    const date = formData.date.value;
    const image = formData.image.value;
    const tags = formData.tags.value.split(',').map(tag => tag.trim());
    const summary = formData.summary.value;

    const res = await fetch('/api/postblog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        date,
        image,
        tags,
        summary,
        userId: session?.user?.id || null,
        userName: session?.user?.name || 'Anonymous',
      }),
    });

    const data = await res.json();

    if (data.success) {
      toast.success(data.message);
      router.push('/dashboard/myposts');
    } else {
      toast.error(data.message);
    }
  };

  if (status === 'loading') return <p>Loading session...</p>;

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
            placeholder="Blog Title"
            required
            className="w-full border px-4 py-2 rounded-md"
          />
          <input
            name="date"
            type="date"
            required
            className="w-full border px-4 py-2 rounded-md"
          />
          <input
            name="image"
            type="text"
            placeholder="Image URL"
            required
            className="w-full border px-4 py-2 rounded-md"
          />
          <input
            name="tags"
            type="text"
            placeholder="Tags (comma separated)"
            className="w-full border px-4 py-2 rounded-md"
          />
          <textarea
            name="summary"
            rows="5"
            placeholder="Blog Summary"
            className="w-full border px-4 py-2 rounded-md"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition disabled:opacity-60"
          >
            Submit Post
          </button>
        </form>
      </div>
    </div>
  );
}
