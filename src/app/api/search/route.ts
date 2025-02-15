import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-client";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const query = searchParams.get("query")?.toLowerCase() || "";
        const formatSlug = (str: string) => 
            str.toLowerCase().replace(/&/g, "").replace(/\s+/g, "-");

        if (!query) {
            return NextResponse.json({ error: "Query parameter is required" }, { status: 400 });
        }

        const categoriesWithProducts = await prisma.category.findMany({
            where: {
                OR: [
                    { name: { contains: query, mode: "insensitive" } },
                    { subcategories: { some: { name: { contains: query, mode: "insensitive" } } } },
                    { products: { some: { name: { contains: query, mode: "insensitive" } } } },
                ],
            },
            include: {
                subcategories: {
                    where: {
                        name: { contains: query, mode: "insensitive" }
                    }
                },
                products: {
                    where: {
                        name: { contains: query, mode: "insensitive" }
                    }
                }
            }
        });

        const searchItems = [
            ...categoriesWithProducts.flatMap(category => 
                category.subcategories.flatMap(subcategory => ({
                    id: crypto.randomUUID(),
                    name: `${category.name}: ${subcategory.name}`,
                    href: `/docs/${formatSlug(category.name)}/${formatSlug(subcategory.name)}`
                })),
            ),
            ...categoriesWithProducts.flatMap(category =>
                category.products.map(product => ({
                    id: product.id,
                    name: product.name,
                    href: `/products/${product.id}`
                }))
            )
        ];

        

        return NextResponse.json(searchItems);
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
