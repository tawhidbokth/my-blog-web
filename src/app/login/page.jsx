'use client';
import { signIn } from 'next-auth/react';

export default function Login() {
  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Here you would typically handle the login logic, such as calling an API
    console.log('Login submitted:', { email, password });
    await signIn('credentials', {
      email,
      password,
      // redirect: true, // Redirect after successful login
      // callbackUrl: '/', // Redirect to home page or any other page after login
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md transition"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Don’t have an account?{' '}
          <a href="/register" className="text-indigo-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
