import { NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma-client";

export async function GET(req: Request, { params }: { params: { productId: string } }) {
  try {
    const {productId} = await params;
    const productIdNum = Number(productId);

    if (isNaN(productIdNum)) {
      return NextResponse.json({ error: "Invalid Product ID" }, { status: 400 });
    }

    const product = await prisma.product.findUnique({
      where: { id: productIdNum },
      include: {
        subCategory: true,
        category: true,
      },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
