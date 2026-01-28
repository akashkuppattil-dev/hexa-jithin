"use client";
import supabase from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  useEffect(() => {
    const createAdminUser = async () => {
      const { error } = await supabase.auth.signUp({
        email: 'hexa@gmail.com',
        password: '12345678',
      });

      if (error) {
        console.error('Error creating admin user:', error);
      } else {
        console.log('Admin user created successfully');
      }
    };

    // Only try to create the admin user in development and only once per browser
    try {
      if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined' && !localStorage.getItem('admin_created')) {
        createAdminUser().then(() => localStorage.setItem('admin_created', '1'));
      }
    } catch (e) {
      console.debug('Skipping admin creation:', e);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await supabase.auth.signInWithPassword({ email, password });

      if (res.error) {
        console.error('Login error:', res.error);
        setError(res.error.message || 'Invalid credentials. Please try again.');
        return;
      }

      // success
      router.push('/admin');
    } catch (err: any) {
      console.error('Unexpected login error:', err);
      setError(err?.message || 'An unexpected error occurred.');
    }
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
}