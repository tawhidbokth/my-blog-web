import React from 'react';
import Image from 'next/image';

export default function Banner() {
  return (
    <header className="relative overflow-hidden">
      <section className="bg-white dark:bg-gray-900 min-h-[450px] flex items-center">
        {/* Background gradient for visual interest */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 dark:from-gray-800/50 dark:to-gray-900/50 z-0"></div>

        <div className="max-w-screen-xl px-4 py-16 mx-auto lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16 lg:items-center relative z-10">
          <div className="lg:col-span-7 xl:col-span-6 space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-[3.5rem] leading-tight">
              Share Your{' '}
              <span className="text-indigo-600 dark:text-indigo-400">
                Ideas
              </span>{' '}
              with the World
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 md:text-xl max-w-2xl">
              Build your own blog. Use AI to generate content, get tag
              suggestions, and grow your audience faster than ever before.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-8 py-3.5 text-white font-medium hover:bg-indigo-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                aria-label="Get started with blogging"
              >
                Get Started
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 px-8 py-3.5 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-sm focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-gray-300"
                aria-label="Learn more about our platform"
              >
                Learn More
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="pt-4 flex items-center space-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(item => (
                  <div
                    key={item}
                    className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-900"
                  ></div>
                ))}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium">10,000+</span> creators already
                building
              </div>
            </div>
          </div>

          {/* Image section */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-6 justify-center items-center relative">
            <div className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://i.ibb.co/0VdRwKYg/1747030755900.jpg"
                alt="Blog Illustration"
                fill
                className="object-cover"
                quality={100}
                priority
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
