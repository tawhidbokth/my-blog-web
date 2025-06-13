'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function BlogManagement() {
  // Sample blog data

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

  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'Getting Started with Next.js',
      status: 'Published',
      views: 245,
      lastUpdated: '2023-05-15',
      image: '/nextjs-blog.jpg',
    },
    {
      id: 2,
      title: 'Advanced React Patterns',
      status: 'Draft',
      views: 0,
      lastUpdated: '2023-05-10',
      image: '/react-blog.jpg',
    },
    {
      id: 3,
      title: 'Tailwind CSS Best Practices',
      status: 'Published',
      views: 189,
      lastUpdated: '2023-05-05',
      image: '/tailwind-blog.jpg',
    },
  ]);

  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleDelete = id => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  const handleEdit = blog => {
    setSelectedBlog(blog);
    setIsEditModalOpen(true);
  };

  const handleSave = updatedBlog => {
    setBlogs(
      blogs.map(blog => (blog.id === updatedBlog.id ? updatedBlog : blog))
    );
    setIsEditModalOpen(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            Manage Your Blog Posts
          </h1>
          <Link
            href="/dashboard/postblog"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md flex items-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            New Post
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map(blog => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 w-full bg-gray-200">
                {/* Replace with your actual image component */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Blog Cover Image
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {blog.title}
                  </h3>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      blog.status === 'Published'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {blog.status}
                  </span>
                </div>

                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>{blog.views} views</span>
                  <span>
                    Updated: {new Date(blog.lastUpdated).toLocaleDateString()}
                  </span>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="flex-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 px-4 py-2 rounded-md flex items-center justify-center transition-colors"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-md flex items-center justify-center transition-colors"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Edit Blog Post
                </h3>
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    value={selectedBlog?.title || ''}
                    onChange={e =>
                      setSelectedBlog({
                        ...selectedBlog,
                        title: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    value={selectedBlog?.status || ''}
                    onChange={e =>
                      setSelectedBlog({
                        ...selectedBlog,
                        status: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="Draft">Draft</option>
                    <option value="Published">Published</option>
                  </select>
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    onClick={() => setIsEditModalOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleSave(selectedBlog)}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
