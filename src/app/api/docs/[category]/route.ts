import { NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma-client";

export async function GET(req: Request, { params }: { params: { category: string } }) {
    try {
        const {category} = await params;
        const categoryName = await category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

        const categoryFound = await prisma.category.findFirst({
            where: {
                name: categoryName,
            },
            include: {
                subcategories: {
                    where: {
                        name: {
                            not: "All", 
                        },
                    },
                },
            },
        });

        if (!categoryFound) {
            return NextResponse.json({ error: "Category not found" }, { status: 404 });
        }

        return NextResponse.json(categoryFound.subcategories);
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}
