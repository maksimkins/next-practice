import { items } from "@/data/items";
import { NextResponse } from "next/server";


export async function GET() {
    return NextResponse.json(items);
}