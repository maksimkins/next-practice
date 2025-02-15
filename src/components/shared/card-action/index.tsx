"use client";

import QuantitySelector from "../quantity-selector";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useProductStore } from "@/store";
import { ProductProps } from "@/components/helpers/interfaces/product";
import { StoredProductProps } from "@/components/helpers/interfaces/storedProducts";

export default function CardAction({ storedProduct }: { storedProduct: StoredProductProps }) {
  const { setProducts } = useProductStore();

  const addProducts = (
    event: React.MouseEvent<HTMLButtonElement>,
    storedProduct: StoredProductProps
  ) => {
    event.preventDefault();
    setProducts((prev) => {
      const current = prev.find((p) => p?.product.id === storedProduct?.product.id);
      if (!current) {
        return [...prev, storedProduct];
      }
      return prev;
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <QuantitySelector storedProduct={storedProduct} />

      <div className="flex gap-4">
        <Button className="flex-1 bg-white hover:bg-zinc-200">Buy now </Button>
        <Button
          variant={"outline"}
          className="flex-1 border-zinc-800"
          onClick={(event) => addProducts(event, storedProduct)}
        >
          Add to card
        </Button>
        <Button variant={"outline"} className="flex-1 border-zinc-800">
          <Heart className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}