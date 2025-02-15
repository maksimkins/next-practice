import { SubCategoryProps } from "@/components/helpers/interfaces/category";
import { SubCategoryCard } from "@/components/shared/subcategory-card";
import Link from "next/link";

interface Props {
  params: {
    category: string;
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/docs/${category}`
  );

  const subcategories: SubCategoryProps[] = await response.json();

  return (
    <div className="container mt-10 flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">
          {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
        </h1>
        <p className="text-lg text-muted-foreground">
          Buy {category} from the best stores
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {subcategories.map((subcategory: SubCategoryProps) => (
          <Link key={`${subcategory.id}`} href={`${subcategory.href}`}>
             <SubCategoryCard subcategory={subcategory} />
          </Link>
        ))}
      </div>
    </div>
  );
}