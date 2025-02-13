import { ItemProps } from "@/components/helpers/interfaces/items";
import { ProductCard } from "@/components/shared/product-card";
import Link from "next/link";

interface PageProps {
  params: {
    category: string;
    href: string;
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { category, href } = params;
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/docs/${category}/${href}`);

  console.log(`${process.env.NEXT_PUBLIC_API_HOST}/${category}/${href}`)

  const items = await response.json();

  return (
    <div className="container p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {items.map((product: ItemProps) => (
            <Link key={product.id} href={`${product.href}`}>
              <ProductCard product={product} />
            </Link>
          ))}
      </div>
    </div>
  );
}