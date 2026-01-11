"use client";

import supabase from '@/lib/supabaseClient';
import { redirect, usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface AdminLayoutProps {
  children: ReactNode;
}

export default async function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();

  // Skip redirection for the login page
  if (pathname === '/admin/login') {
    return (
      <div className="min-h-screen bg-gray-100">
        <main className="p-6">{children}</main>
      </div>
    );
  }

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  console.log('User data:', user); // Debugging log to check user data

  if (error) {
    console.error('Error fetching user:', error);
    redirect('/admin/login'); // Redirect to login page on error
  }

  if (!user) {
    console.error('No user found. Redirecting to login page.');
    redirect('/admin/login'); // Redirect to login page if no user is found
  }

  if (!user.role) {
    console.error('User role is missing. Redirecting to login page.');
    redirect('/admin/login'); // Redirect to login page if role is missing
  }

  if (user.role !== 'admin') {
    console.error(`User role is '${user.role}', not 'admin'. Redirecting to login page.`);
    redirect('/admin/login'); // Redirect to login page if user is not an admin
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}