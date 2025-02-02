import { CategoryProps } from "@/components/helpers/interfaces/category";
import { navbar } from "@/data/navbar";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const categoriesWithSubcategories: CategoryProps[] = navbar.flatMap(category => 
        category.items.map(item => ({
            id: crypto.randomUUID(),
            title: `${category.name}: ${item.title}`,
            href: item.title.toLowerCase() === "all" 
                ? `/docs/${category.name.toLowerCase()}` 
                : `/docs/${category.name.toLowerCase()}/${item.title.toLowerCase()}`,
            description: ""
        }))
    );

    if (!categoriesWithSubcategories.length) {
        return NextResponse.json({ error: "Subcategories not found" }, { status: 404 });
    }

    return NextResponse.json(categoriesWithSubcategories);
}