import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-client";

export async function GET(req: Request) {
    try {
        const products = await prisma.product.findMany({
            take: 8,
        });

        if (!products.length) {
            return NextResponse.json({ error: "No products found" }, { status: 404 });
        }

        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}