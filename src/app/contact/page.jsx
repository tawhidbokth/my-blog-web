'use client';

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen mt-28 text-gray-800 px-4">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <h1 className="text-4xl font-bold mb-2">Get in Touch</h1>
        <p className="text-lg">
          We'd love to hear from you. Please fill out the form below.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Form */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <p className="mb-4">
            <strong>Address:</strong> 1234 Main Street, Dhaka, Bangladesh
          </p>
          <p className="mb-4">
            <strong>Phone:</strong> +880 1234 567 890
          </p>
          <p className="mb-4">
            <strong>Email:</strong> info@example.com
          </p>
          <p className="text-gray-600">
            Feel free to reach out for any inquiries or support.
          </p>
        </div>
      </section>
    </div>
  );
}
