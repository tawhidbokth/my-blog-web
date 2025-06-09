import React from 'react';

export default function Banner() {
  return (
    <div>
      <header>
        <section className="bg-white dark:bg-gray-900 h-[450px]">
          <div className="max-w-screen-xl px-4 py-16 mx-auto lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
            <div className="lg:col-span-6">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                Share Your Ideas with the World
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Build your own blog. Use AI to generate content, get tag
                suggestions, and grow your audience faster than ever before.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="inline-block rounded-full bg-indigo-600 px-8 py-3 text-white font-medium hover:bg-indigo-700 transition"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className="inline-block rounded-full border border-gray-300 dark:border-gray-600 px-8 py-3 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="hidden lg:col-span-6 lg:flex justify-center">
              <img
                src="https://i.ibb.co/cKQ7vzPS/gettyimages-1438969575-612x612.jpg"
                alt="Blog Illustration"
                className="w-full max-w-md"
              />
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}
