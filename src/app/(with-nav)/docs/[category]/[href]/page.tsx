import { ProductProps } from "@/components/helpers/interfaces/product";
import { StoredProductProps } from "@/components/helpers/interfaces/storedProducts";
import { ProductCard } from "@/components/shared/product-card";
import Link from "next/link";

interface PageProps {
  params: {
    category: string;
    href: string;
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { category, href } = await params;
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/docs/${category}/${href}`);

  //console.log(`\n\n\n\n${process.env.NEXT_PUBLIC_API_HOST}/docs/${category}/${href}\n\n\n\n`)

  const products = await response.json();

  //console.log(products);

  //console.log(products);

  return (
    <div className="container p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {products.map((product: ProductProps) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <ProductCard storedProduct={{product: product, quantity: 0} as StoredProductProps} />
            </Link>
          ))}
      </div>
    </div>
  );
}