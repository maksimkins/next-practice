import { NextResponse } from "next/server";
import { prisma } from "../../../../../../prisma/prisma-client";


export async function GET(req: Request, { params }: { params: { category: string; href: string } }) {
    try {
        const {category, href } = await params;

        //console.log("\n\n\n\n\n\n\n\n\n\n", `docs/${category}/${href}`, "\n\n\n\n\n\n\n\n\n\n");

        const subcategory = await prisma.subCategory.findFirst({
            where: {
                href: `/docs/${category}/${href}`,
            },
            include: {
                products: true,
            },
        });

        if (!subcategory) {
            return NextResponse.json({ error: "Subcategory not found" }, { status: 404 });
        }

        return NextResponse.json(subcategory.products);
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}