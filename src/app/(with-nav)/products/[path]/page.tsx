
import { ItemProps } from "@/components/helpers/interfaces/items";
import QuantitySelector from "@/components/shared/quantity-selector";
import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";
import Image from "next/image";

import { items } from "@/data/items";

import { Separator } from "@/components/ui/separator"



interface ProdProps {
  params: Promise<{
    path: string;
  }>;
}

export default async function ProductCategory({ params }: ProdProps) {
  const { path } = await params;

  const product = items
    .flatMap((item) => item)
    .find((item) => item.path === `/products/${path}`);

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

              <Button variant={"outline"} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 size-8 shrink-0">
                <Heart className="w-4 h-4" />
              </Button>
            </div>

            <QuantitySelector />

            <div className="flex gap-4 max-w-[260px] mb-3">
              <Button className="flex-1 bg-white hover:bg-zinc-200">
                Buy now{" "}
              </Button>
              <Button variant={"outline"} className="flex-1 border-zinc-800">
                Add to card
              </Button>
            </div>
            
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
