import React from 'react';

export default function CallToAction() {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ✍️ Ready to Share Your Thoughts?
          </h2>
          <p className="text-lg mb-6">
            Join our blogging community today. Write your first post or explore
            what others are talking about.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/create-post"
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
            >
              Write a Blog
            </a>
            <a
              href="/signup"
              className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 transition"
            >
              Join Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
