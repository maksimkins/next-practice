import { NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma-client";

export async function GET(req: Request, { params }: { params: { category: string } }) {
    try {
        const categoryName = await params.category.charAt(0).toUpperCase() + params.category.slice(1).toLowerCase();

        const category = await prisma.category.findFirst({
            where: {
                name: categoryName,
            },
            include: {
                subcategories: true,  
            },
        });

        if (!category) {
            return NextResponse.json({ error: "Category not found" }, { status: 404 });
        }

        return NextResponse.json(category.subcategories);
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}
