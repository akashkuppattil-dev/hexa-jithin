import supabase from '@/lib/supabaseClient';
import { useEffect, useState } from 'react';

// Define the Product type
interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  available: boolean;
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState({ name: '', slug: '', price: 0 });
  const [error, setError] = useState('');

  // Fetch products on component mount
  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase.from('products').select('*');
      if (error) {
        console.error('Error fetching products:', error);
      } else {
        setProducts(data as Product[]);
      }
    }
    fetchProducts();
  }, []);

  const addProduct = async () => {
    if (!newProduct.name || !newProduct.slug || newProduct.price <= 0) {
      setError('All fields are required, and price must be greater than 0.');
      return;
    }
    setError('');
    const { error } = await supabase.from('products').insert([
      { name: newProduct.name, slug: newProduct.slug, price: newProduct.price },
    ]);
    if (error) {
      console.error('Error adding product:', error);
      setError('Failed to add product.');
    } else {
      setNewProduct({ name: '', slug: '', price: 0 });
      // Refetch products after adding a new one
      const { data } = await supabase.from('products').select('*');
      if (data) {
        setProducts(data as Product[]);
      }
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Manage Products</h1>

      {/* Add Product */}
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Product name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Slug"
          value={newProduct.slug}
          onChange={(e) => setNewProduct({ ...newProduct, slug: e.target.value })}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
          className="border p-2 rounded w-full"
        />
        <button
          onClick={addProduct}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}

      {/* Products List */}
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            {product.name} - ${product.price.toFixed(2)} ({product.available ? 'Available' : 'Unavailable'})
          </div>
        ))}
      </div>
    </div>
  );
}