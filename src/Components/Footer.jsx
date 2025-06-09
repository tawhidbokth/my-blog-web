// components/Footer.js
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold mb-2">MyBlog</h2>
          <p className="text-sm text-gray-400">
            Share your thoughts. Explore ideas. Empower your voice.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm space-y-1 text-gray-300">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/posts" className="hover:underline">
                Posts
              </a>
            </li>
            <li>
              <a href="/create-post" className="hover:underline">
                Write a Blog
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="#" className="hover:text-pink-400 transition">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="#" className="hover:text-blue-300 transition">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8">
        &copy; {new Date().getFullYear()} MyBlog. All rights reserved.
      </div>
    </footer>
  );
}
