import Link from 'next/link';

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p>Welcome to the admin panel. Use the navigation below to manage categories, brands, and products.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/admin/categories">
          <a className="block bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h2 className="text-xl font-bold">Manage Categories</h2>
            <p className="text-gray-600">Create, update, and delete categories.</p>
          </a>
        </Link>
        <Link href="/admin/brands">
          <a className="block bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h2 className="text-xl font-bold">Manage Brands</h2>
            <p className="text-gray-600">Create, update, and delete brands.</p>
          </a>
        </Link>
        <Link href="/admin/products">
          <a className="block bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h2 className="text-xl font-bold">Manage Products</h2>
            <p className="text-gray-600">Create, update, and delete products.</p>
          </a>
        </Link>
      </div>
    </div>
  );
}