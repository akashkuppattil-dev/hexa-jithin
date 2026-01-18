"use client"

import supabase from '@/lib/supabaseClient';
import { useState } from 'react';

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  currency: string;
  product_images: { storage_path: string; alt_text: string }[];
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  const fetchProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('products')
      .select(`id, name, slug, price, currency, product_images(storage_path, alt_text)`)
      .eq('available', true)
      .gte('price', priceRange.min)
      .lte('price', priceRange.max)
      .ilike('name', `%${search}%`)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching products:', error);
    } else {
      setProducts(data);
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/3"
        />
        <div className="flex gap-2 items-center">
          <input
            type="number"
            placeholder="Min Price"
            value={priceRange.min}
            onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
            className="border p-2 rounded w-24"
          />
          <span>-</span>
          <input
            type="number"
            placeholder="Max Price"
            value={priceRange.max}
            onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
            className="border p-2 rounded w-24"
          />
        </div>
        <button
          onClick={fetchProducts}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Apply Filters
        </button>
      </div>

      {/* Products List */}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-4">
              {product.product_images?.[0]?.storage_path && (
                <img
                  src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${product.product_images[0].storage_path}`}
                  alt={product.product_images[0].alt_text || product.name}
                  className="w-full h-48 object-cover rounded"
                />
              )}
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-sm text-gray-600">
                {product.currency} {product.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}