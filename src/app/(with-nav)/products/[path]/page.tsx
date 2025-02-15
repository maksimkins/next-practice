import Image from "next/image";
import { Star } from "lucide-react";

import { Separator } from "@/components/ui/separator"
import CardAction from "@/components/shared/card-action";



interface ProdProps {
  params: Promise<{
    id: number;
  }>;
}

export default async function ProductCategory({ params }: ProdProps) {
  const { id } = await params;
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/products/${id}`);
  const product = await response.json();

  return (
    <div className="min-h-screen container p-5">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="aspect-square relative overflow-hidden rounded-lg">
          <Image
            src={
              product?.imageUrl ||
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
                {product?.category || "Description not found"}
              </p>
            </div>

            <div>
              <p className="text-base text-muted-foreground">
                ${product?.price || "Price not found"}
              </p>
            </div>
          </div>

          <Separator />

            <div className="mt-3">
              <p className="text-base text-muted-foreground">
                {product?.stockCount || "Stock not found"} in stock
              </p>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < (product?.rating || 0)
                        ? "text-yellow-400"
                        : "text-gray-400"
                    }`}
                    fill="currentColor"
                  />
                ))}
              </div>
            </div>

            {product ? <CardAction product={product} /> : <p>Product not found</p>}  
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