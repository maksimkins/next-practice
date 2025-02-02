import { items } from "@/data/items";
import { NextResponse } from "next/server";

export async function GET() {
    console.log(items)

    return NextResponse.json(items);
}