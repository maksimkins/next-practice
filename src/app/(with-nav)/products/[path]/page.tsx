import Image from "next/image";
import { Star } from "lucide-react";

import { Separator } from "@/components/ui/separator"
import CardAction from "@/components/shared/card-action";
import { ProductProps } from "@/components/helpers/interfaces/product";
import { StoredProductProps } from "@/components/helpers/interfaces/storedProducts";



interface ProdProps {
  params: Promise<{
    path: string;
  }>;
}

export default async function Product({ params }: ProdProps) {
  const { path } = await params;
  const productId = Number(path);
  //console.log(`\n\n\n\n${`${process.env.NEXT_PUBLIC_API_HOST}/products/${productId}`}\n\n\n\n\n\n`);
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/products/${productId}`);
  const product: ProductProps = await response.json();

  

  return (
    <div className="min-h-screen container p-5">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="aspect-square relative overflow-hidden rounded-lg">
          <Image
            src={
              product?.image ||
              "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"
            }
            alt={product?.name || "No image"}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex w-full flex-col gap-4">
         <div className="space-y-2 mb-3">
            <div>
              <h1 className="line-clamp-1 text-2xl font-bold">
                {product?.name || "Product not found"}
              </h1>
              <p className="text-zinc-400">
                {product?.subCategoryId || "Description not found"}
              </p>
            </div>

            <div>
              <p className="text-base text-muted-foreground">
                ${product?.price || "Price not found"}
              </p>
            </div>
          </div>

          <Separator />


            

            {product ? <CardAction storedProduct={{product: product, quantity: 0} as StoredProductProps} /> : <p>Product not found</p>}  
            <Separator />

            <div className="mt-3 flex flex-col gap-4">
              <h2 className="text-xl font-bold">Description</h2>
              <p className="text-zinc-400">
                {product?.description || "Description not found"}
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}