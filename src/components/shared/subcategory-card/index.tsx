"use client";
import { SubCategoryProps } from "@/components/helpers/interfaces/category";
import { ProductProps } from "@/components/helpers/interfaces/product";
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

type SubCategoryCardProps = {
    subcategory: SubCategoryProps;
};

export function SubCategoryCard({ subcategory }: SubCategoryCardProps) {
  const pathname = usePathname();
  const isCategoriesPage = /^\/docs\/[^/]+$/.test(pathname);



  //console.log(`\n\n\n\n\n${product.image}\n\n\n\n\n\n\n`)

  return (
    <Card className="rounded-lg border bg-zinc-900">
      <CardHeader className="p-0">
        <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
          <Image
            src={
              "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500"
            }
            alt={subcategory.name}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-medium text-lg">
          {subcategory.name}
        </h3>
      </CardContent>
      <CardFooter className="flex gap-2">
        {!isCategoriesPage && (
          <Button size={"icon"} variant={"outline"}>
            <Eye />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}