"use client";
import { ProductProps } from "@/components/helpers/interfaces/product";
import { StoredProductProps } from "@/components/helpers/interfaces/storedProducts";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useProductStore } from "@/store";
import { Eye } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

type ProductCardProps = {
  storedProduct: StoredProductProps;
};

export function ProductCard({ storedProduct }: ProductCardProps) {
  const pathname = usePathname();

  console.log("\n\n\n\n", storedProduct, "\n\n\n\n")

  const { setProducts } = useProductStore();

  const addProducts = (
    event: React.MouseEvent<HTMLButtonElement>,
    storedProduct: StoredProductProps
  ) => {
    event.preventDefault();
    setProducts((prev) => {
      const current = prev.find((p) => p.product.id === storedProduct.product.id);
      if (!current) {
        return [...prev, storedProduct];
      }
      return prev;
    });
  };

  //console.log(`\n\n\n\n\n${product.image}\n\n\n\n\n\n\n`)

  return (
    <Card className="rounded-lg border bg-zinc-900">
      <CardHeader className="p-0">
        <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
          <Image
            src={
              storedProduct.product.image !== null
                ? storedProduct.product.image
                : "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500"
            }
            alt={storedProduct.product.name}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-medium text-lg">
          {storedProduct.product.name}
        </h3>
        {(
          <p className="text-sm text-zinc-400">${storedProduct.product.price}</p>
        )}
        {(
          <p className="text-sm text-zinc-400">{storedProduct.product.description}</p>
        )}
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button
          className="flex-1 hover:bg-zinc-900 hover:text-white hover:border hover:border-white transition-all duration-200"
          onClick={(event) => addProducts(event, {product: storedProduct.product, quantity: 0} as StoredProductProps)}
        >
          {"Add to card"}
        </Button>
        {(
          <Button size={"icon"} variant={"outline"}>
            <Eye />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}