"use client"

import supabase from '@/lib/supabaseClient';
import { useEffect, useState } from 'react';

// Define the Brand type
interface Brand {
  id: string;
  name: string;
}

export default function AdminBrandsPage() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [newBrand, setNewBrand] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [error, setError] = useState('');

  // Fetch brands on component mount
  useEffect(() => {
    async function fetchBrands() {
      const { data, error } = await supabase.from('brands').select('*');
      if (error) {
        console.error('Error fetching brands:', error);
      } else {
        setBrands(data as Brand[]);
      }
    }
    fetchBrands();
  }, []);

  const addBrand = async () => {
    if (!newBrand || !categoryId) {
      setError('Both brand name and category ID are required.');
      return;
    }
    setError('');
    const { error } = await supabase.from('brands').insert([{ name: newBrand, category_id: categoryId }]);
    if (error) {
      console.error('Error adding brand:', error);
      setError('Failed to add brand.');
    } else {
      setNewBrand('');
      setCategoryId('');
      // Refetch brands after adding a new one
      const { data } = await supabase.from('brands').select('*');
      if (data) {
        setBrands(data as Brand[]);
      }
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Manage Brands</h1>

      {/* Add Brand */}
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="New brand name"
          value={newBrand}
          onChange={(e) => setNewBrand(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Category ID"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          onClick={addBrand}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}

      {/* Brands List */}
      <div className="space-y-4">
        {brands.map((brand) => (
          <div key={brand.id} className="border p-4 rounded">
            {brand.name}
          </div>
        ))}
      </div>
    </div>
  );
}