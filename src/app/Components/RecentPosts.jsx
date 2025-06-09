import React from 'react';
const recentPostsData = [
  {
    id: 101,
    title: 'Deploying Your Next.js Blog on Vercel',
    author: 'Mahmudul Hasan',
    date: '2025-06-04',
    image: 'https://source.unsplash.com/featured/?vercel,deploy',
    tags: ['Next.js', 'Vercel', 'Deployment'],
    summary:
      'Step-by-step guide to deploy your Next.js application on Vercel with GitHub integration.',
  },
  {
    id: 102,
    title: 'Why You Should Use MongoDB for Blogging Platforms',
    author: 'Anika Sultana',
    date: '2025-06-02',
    image: 'https://source.unsplash.com/featured/?mongodb,database',
    tags: ['MongoDB', 'Database', 'Backend'],
    summary:
      'Learn the benefits of using MongoDB for dynamic content and how to set it up with Mongoose.',
  },
  {
    id: 103,
    title: 'Clerk vs NextAuth: Best Auth Solution in 2025',
    author: 'Rezaul Karim',
    date: '2025-06-01',
    image: 'https://source.unsplash.com/featured/?auth,login',
    tags: ['Authentication', 'NextAuth', 'Clerk'],
    summary:
      'Compare Clerk and NextAuth to choose the perfect authentication method for your blog app.',
  },
];
export default function RecentPosts() {
  return (
    <div>
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">
            🕒 Recent Posts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPostsData.map(post => (
              <div
                key={post.id}
                className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  <p className="text-sm text-gray-500">
                    by {post.author} •{' '}
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                  <p className="mt-2 text-gray-700 text-sm">{post.summary}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
