import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "YOOM",
  description: "Video Calling App",
  icons: {
    icon: '/icon/logo.svg'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='relative'>
      <Navbar />

      <div className='flex'>
        <Sidebar />

        <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14'>
          <div className='w-full'>
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}
