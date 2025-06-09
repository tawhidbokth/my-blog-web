import React from 'react';

const featuredPosts = [
  {
    id: 1,
    title: '10 Tips to Improve Your React Skills',
    author: 'John Doe',
    date: '2025-06-01',
    image: 'https://source.unsplash.com/featured/?reactjs',
    tags: ['React', 'JavaScript', 'Frontend'],
    summary:
      'Discover top tips that will help you become a better React developer in 2025.',
  },
  {
    id: 2,
    title: 'Understanding AI-Assisted Blogging',
    author: 'Sarah Khan',
    date: '2025-05-28',
    image: 'https://source.unsplash.com/featured/?ai,blogging',
    tags: ['AI', 'Writing', 'Blog'],
    summary:
      'Explore how AI tools like Gemini are revolutionizing the way we create and share content.',
  },
  {
    id: 3,
    title: 'The Power of RTK Query in Modern Web Apps',
    author: 'Aminul Rahman',
    date: '2025-06-03',
    image: 'https://source.unsplash.com/featured/?code,redux',
    tags: ['Redux', 'RTK Query', 'API'],
    summary:
      'Learn why RTK Query is a game-changer for managing data fetching and caching in React apps.',
  },
  {
    id: 4,
    title: 'How to Write SEO-Friendly Blog Posts',
    author: 'Ritika Das',
    date: '2025-05-20',
    image: 'https://source.unsplash.com/featured/?seo,writing',
    tags: ['SEO', 'Marketing', 'Content'],
    summary:
      'Master the art of writing content that ranks well on search engines and drives traffic.',
  },
];

export default function FeaturedPosts() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          🔥 Featured Posts
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map(post => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-sm text-gray-600">
                  by {post.author} • {new Date(post.date).toLocaleDateString()}
                </p>
                <p className="mt-2 text-gray-700">{post.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full"
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
  );
}
