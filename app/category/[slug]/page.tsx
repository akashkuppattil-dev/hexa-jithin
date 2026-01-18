import supabase from '@/lib/supabaseClient';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  // Fetch category details
  const { data: category, error: categoryError } = await supabase
    .from('categories')
    .select('id, name')
    .eq('slug', slug)
    .single();

  if (categoryError || !category) {
    console.error('Error fetching category:', categoryError);
    return notFound();
  }

  // Fetch brands under the category
  const { data: brands, error: brandsError } = await supabase
    .from('brands')
    .select('id, name, slug')
    .eq('category_id', category.id);

  // Fetch products under the category
  const { data: products, error: productsError } = await supabase
    .from('products')
    .select(`id, name, slug, price, currency, product_images(storage_path, alt_text)`)
    .eq('category_id', category.id)
    .eq('available', true)
    .order('created_at', { ascending: false });

  if (brandsError || productsError) {
    console.error('Error fetching brands or products:', brandsError || productsError);
    return <div>Error loading category data.</div>;
  }

  return (
    <div className="space-y-12">
      {/* Category Header */}
      <header className="text-center">
        <h1 className="text-3xl font-bold">{category.name}</h1>
      </header>

      {/* Brands Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Brands</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {brands?.map((brand) => (
            <div key={brand.id} className="border rounded-lg p-4 text-center">
              <h3 className="text-lg font-semibold">{brand.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products?.map((product) => (
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
      </section>
    </div>
  );
}