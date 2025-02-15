
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Github } from "lucide-react";

import Link from "next/link";

import { HiOutlineCube } from "react-icons/hi";
import { GoArrowRight } from "react-icons/go";
import { ProductCard } from "@/components/shared/product-card";
import { NavBarProps } from "@/components/helpers/interfaces/navbar";
import { ProductProps } from "@/components/helpers/interfaces/product";


export default async function Main() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/navbar`);
  const navbar: NavBarProps[] = await res.json();

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/products`);
  const products = await response.json();

  return (
    <main className="container">
      <section className="container py-24 text-center animate-fadeUp">

        <h1 className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ">
          Foundation for your commerce platform
        </h1>
        <p className="mx-auto mb-8 max-w-[500px] text-lg text-zinc-400 sm:text-xl">
          Skateshop is an open-source platform for building and customizing your
          own commerce platform with ease.
        </p>

        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-white text-black hover:bg-zinc-200">
            Buy now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-zinc-800 bg-transparent text-white hover:bg-zinc-800"
          >
            Sell now
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24 max-w-6xl animate-fadeUp duration-700">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {navbar.map((category) => (
            <Link key={category.name} href={`${category.subcategories[0].href}`}>
              <Card className="border-zinc-800 max-h-[186px] h-full transition-all duration-200 hover:bg-zinc-900">
                <CardHeader className="h-full flex flex-col justify-between">
                  <div className="flex flex-col py-3 gap-2">
                    <CardTitle>{category.name}</CardTitle>
                    <CardDescription className="text-zinc-400">
                      {category.description}
                    </CardDescription>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-zinc-400 gap-1 ">
                    <HiOutlineCube />
                    <span className="mt-[-2px]">
                      {category.subcategories.length} products
                    </span>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24 max-w-6xl">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col ">
            <h2 className="text-3xl font-semibold">Featured products</h2>
            <p className="text-zinc-500">
              Explore products from around the world
            </p>
          </div>
          <div className="flex">
            <Link href={"/"} className="text-zinc-800">
              <Button variant="outline" className="text-white font-medium">
                <span>View all products</span> <GoArrowRight />
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product: ProductProps) => (
          <Link key={`${product.id}`} href={`products/${product.id}`}>
            <ProductCard storedProduct={{product: product, quantity: 0}} />
          </Link>
          ))}
        </div>
      </section>
    </main>
  );
}