import { navbarItems } from "@/data/navbar";

interface CategoryProps {
  params: {
    category: string;
  };
}

export default async function CategoryPage({ params }: CategoryProps) {


  const { category } = await params;

  const itemsArr = navbarItems.flatMap((a) => {
    return a.items;
  });



  return (
    <div className="container">
      <h1>This is page from Category: {category}</h1>
    </div>
  );
}