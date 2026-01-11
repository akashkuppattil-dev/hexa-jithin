import Link from 'next/link';

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Admin Panel</h1>
      <ul className="space-y-4">
        <li>
          <Link href="/admin/dashboard" className="text-blue-500 hover:underline">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/admin/categories" className="text-blue-500 hover:underline">
            Manage Categories
          </Link>
        </li>
        <li>
          <Link href="/admin/brands" className="text-blue-500 hover:underline">
            Manage Brands
          </Link>
        </li>
        <li>
          <Link href="/admin/products" className="text-blue-500 hover:underline">
            Manage Products
          </Link>
        </li>
      </ul>
    </div>
  );
}