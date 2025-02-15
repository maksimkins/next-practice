"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ShoppingCart } from "lucide-react";
import CardItem from "./card-item";
import { useProductStore } from "../../../store/add-products";
import { StoredProductProps } from "@/components/helpers/interfaces/storedProducts";

export function Sidebar() {
  const { storedProducts } = useProductStore();
  console.log("\n\n\n\n\n\n---", storedProducts, "-\n\n\n\n\n\n\n");
  const cartItems = storedProducts.filter((storedProduct : StoredProductProps) => (storedProduct?.quantity || 0) > 0);
  const cartCount = cartItems.reduce((total, item) => total + (item?.quantity || 0), 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative">
          <ShoppingCart className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="md:min-w-[500px]">
        <SheetHeader className="border-b py-3">
          <SheetTitle>Cart ({cartCount})</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {cartItems.length > 0 ? (
            <div className="flex flex-col items-center justify-center gap-4 py-4">
              {cartItems.map((item) => (
                <CardItem key={item.product.id} {...item} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-10">Your cart is empty.</p>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
