"use client";

import { ProductProps } from "@/components/helpers/interfaces/product";
import { StoredProductProps } from "@/components/helpers/interfaces/storedProducts";
import { Button } from "@/components/ui/button";
import { useProductStore } from "@/store";
import { MinusIcon, PlusIcon } from "lucide-react";

interface QuantitySelectorProps {
  storedProduct: StoredProductProps;
}

export default function QuantitySelector({ storedProduct }: QuantitySelectorProps) {
  const { storedProducts, setProducts } = useProductStore();

  const current = storedProducts.find((p) => p?.product.id === storedProduct?.product.id);
  const count = current ? current.quantity : 1;

  const increment = () => {
    setProducts((prev) =>
      prev.map((p) =>
        p?.product.id === storedProduct?.product.id ? { ...p, quantity: (p?.quantity ? 0 : p.quantity) + 1 } : p
      )
    );
  };

  const decrement = () => {
    if (count > 1) {
      setProducts((prev) =>
        prev.map((p) =>
          p.product.id === storedProduct.product.id ? { ...p, quantity:  p?.quantity ? 0 : p.quantity - 1 } : p
        )
      );
    }
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center">
        <Button
          variant="outline"
          size="icon"
          className="rounded-r-none"
          onClick={decrement}
        >
          <MinusIcon className="w-4 h-4" />
        </Button>
        <span className="mx-3">{count}</span>
        <Button
          variant="outline"
          size="icon"
          className="rounded-l-none"
          onClick={increment}
        >
          <PlusIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}