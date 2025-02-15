import { NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';

export async function GET() {
    try {
        const categories = await prisma.category.findMany({
            include: {
                subcategories: true,
            },
        })
        return NextResponse.json(categories);
    } catch (error) {
      return NextResponse.json({ error: error}, { status: 500 });
    }
}