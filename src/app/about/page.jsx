'use client';

export default function About() {
  return (
    <div className="bg-gray-50 mt-20 text-gray-800">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Learn more about who we are, what we do, and why we do it.
        </p>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Story</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 text-center">
          We started our journey with a vision to bring innovation and
          simplicity together. From a small team of passionate minds, we have
          grown into a community focused on creating meaningful solutions.
        </p>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-white px-6 md:px-20">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 text-center">
          Our mission is to empower people and organizations through technology
          that enhances lives and makes everyday tasks easier.
        </p>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-gray-100 px-6 md:px-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Meet Our Team
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              name: 'Tawhid Hossain',
              role: 'Founder & CEO',
              img: 'https://i.ibb.co/xt7nHWNQ/1747031291039.jpg',
            },
            {
              name: 'Israt Jahan',
              role: 'Marketing Lead',
              img: 'https://i.ibb.co/cKQ7vzPS/gettyimages-1438969575-612x612.jpg',
            },
            {
              name: 'Raju Ahmed',
              role: 'UI/UX Designer',
              img: 'https://i.ibb.co/vmHtDT7/385490917-1510631689733100-2473354057220819702-n-LE-upscale-balanced-x4-removebg-preview.png',
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden p-6 text-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-indigo-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Want to join us?</h2>
        <p className="mb-6">
          We're always looking for talented people to join our team.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
