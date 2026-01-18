"use client"

import supabase from '@/lib/supabaseClient';
import { useState, useEffect } from 'react';

// Define the Category type
interface Category {
  id: string;
  name: string;
  slug: string;
}

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState('');
  const [newSlug, setNewSlug] = useState('');
  const [error, setError] = useState('');

  // Fetch categories on component mount
  useEffect(() => {
    async function fetchCategories() {
      const { data, error } = await supabase.from('categories').select('*');
      if (error) {
        console.error('Error fetching categories:', error);
      } else {
        setCategories(data as Category[]);
      }
    }
    fetchCategories();
  }, []);

  const addCategory = async () => {
    if (!newCategory || !newSlug) {
      setError('Both name and slug are required.');
      return;
    }
    setError('');
    const { error } = await supabase.from('categories').insert([{ name: newCategory, slug: newSlug }]);
    if (error) {
      console.error('Error adding category:', error);
      setError('Failed to add category.');
    } else {
      setNewCategory('');
      setNewSlug('');
      // Refetch categories after adding a new one
      const { data } = await supabase.from('categories').select('*');
      if (data) {
        setCategories(data as Category[]);
      }
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Manage Categories</h1>

      {/* Add Category */}
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="New category name"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Slug"
          value={newSlug}
          onChange={(e) => setNewSlug(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          onClick={addCategory}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}

      {/* Categories List */}
      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.id} className="border p-4 rounded">
            {category.name} ({category.slug})
          </div>
        ))}
      </div>
    </div>
  );
}