import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-client";
import { CategoryProps, SubCategoryProps } from "@/components/helpers/interfaces/category";

export async function GET(req: Request) {
    try {
        const categories = await prisma.category.findMany({
            include: {
                subcategories: {
                    include: {
                        products: false,
                    },
                },
            },
        });

        const categoriesWithSubcategories: CategoryProps[] = categories.map(category => ({
            id: category.id,
            name: category.name,
            description: category.description,
            href: category.href,
            subCategories: category.subcategories.map(subcategory => ({
                id: subcategory.id,
                name: subcategory.name,
                description: subcategory.description,
                href: subcategory.href,
                categoryId: subcategory.categoryId,
            })),
        }));

        if (!categoriesWithSubcategories.length) {
            return NextResponse.json({ error: "Categories not found" }, { status: 404 });
        }

        return NextResponse.json(categoriesWithSubcategories);
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }

}