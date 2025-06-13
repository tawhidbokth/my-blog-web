'use client';

import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import { SessionProvider } from 'next-auth/react';
import { ToastContainer } from 'react-toastify';

export default function ClientLayout({ children }) {
  return (
    <SessionProvider>
      <Navbar />
      <main className="flex-grow">
        {children}
        <ToastContainer position="top-center" />
      </main>
      <Footer />
    </SessionProvider>
  );
}
