import supabase from '@/lib/supabaseClient';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  // Fetch product details
  const { data: product, error: productError } = await supabase
    .from('products')
    .select(`
      id, name, slug, description, price, currency, available, featured,
      product_images(storage_path, alt_text, position, is_primary),
      brands(name, slug),
      categories(name, slug)
    `)
    .eq('slug', slug)
    .single();

  if (productError || !product) {
    console.error('Error fetching product:', productError);
    return notFound();
  }

  const primaryImage = product.product_images?.find((img) => img.is_primary) || product.product_images?.[0];

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600">
        <a href={`/category/${product.categories.slug}`} className="hover:underline">
          {product.categories.name}
        </a>
        {' / '}
        <a href={`/brand/${product.brands.slug}`} className="hover:underline">
          {product.brands.name}
        </a>
        {' / '}
        <span>{product.name}</span>
      </nav>

      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div>
          {primaryImage && (
            <Image
              src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${primaryImage.storage_path}`}
              alt={primaryImage.alt_text || product.name}
              width={600}
              height={600}
              className="w-full h-auto object-cover rounded"
            />
          )}
          <div className="grid grid-cols-4 gap-2 mt-4">
            {product.product_images?.map((img) => (
              <Image
                key={img.storage_path}
                src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${img.storage_path}`}
                alt={img.alt_text || product.name}
                width={100}
                height={100}
                className="w-full h-auto object-cover rounded cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold mb-4">
            {product.currency} {product.price}
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}