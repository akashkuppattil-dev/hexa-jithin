import supabase from '@/lib/supabaseClient';
import Image from 'next/image';

export default async function HomePage() {
  const { data: featuredProducts, error: featuredError } = await supabase
    .from('products')
    .select(`id, name, slug, price, currency, product_images(storage_path, alt_text)`)
    .eq('featured', true)
    .eq('available', true)
    .order('created_at', { ascending: false })
    .limit(6);

  const { data: categories, error: categoriesError } = await supabase
    .from('categories')
    .select('id, name, slug')
    .order('name', { ascending: true });

  const { data: latestProducts, error: latestError } = await supabase
    .from('products')
    .select(`id, name, slug, price, currency, product_images(storage_path, alt_text)`)
    .eq('available', true)
    .order('created_at', { ascending: false })
    .limit(6);

  if (featuredError || categoriesError || latestError) {
    console.error('Error fetching data:', featuredError || categoriesError || latestError);
    return <div>Error loading homepage data.</div>;
  }

  return (
    <div className="space-y-12">
      {/* Featured Products Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts?.map((product) => (
            <div key={product.id} className="border rounded-lg p-4">
              {product.product_images?.[0]?.storage_path && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${product.product_images[0].storage_path}`}
                  alt={product.product_images[0].alt_text || product.name}
                  width={300}
                  height={300}
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

      {/* Categories Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories?.map((category) => (
            <div key={category.id} className="border rounded-lg p-4 text-center">
              <h3 className="text-lg font-semibold">{category.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Products Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Latest Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestProducts?.map((product) => (
            <div key={product.id} className="border rounded-lg p-4">
              {product.product_images?.[0]?.storage_path && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${product.product_images[0].storage_path}`}
                  alt={product.product_images[0].alt_text || product.name}
                  width={300}
                  height={300}
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