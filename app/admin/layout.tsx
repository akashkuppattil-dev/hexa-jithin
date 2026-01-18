"use client";

import supabase from '@/lib/supabaseClient';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();

  // Skip redirection for the login page
  useEffect(() => {
    if (pathname === '/admin/login') return;

    const checkUser = async () => {
      try {
        const { data: { user }, error } = await supabase.auth.getUser();

        console.log('User data:', user);

        if (error || !user || !user.role || user.role !== 'admin') {
          console.error('Auth check failed or not admin:', error || user);
          router.push('/admin/login');
        }
      } catch (err) {
        console.error('Unexpected auth check error:', err);
        router.push('/admin/login');
      }
    };

    checkUser();
  }, [pathname, router]);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}