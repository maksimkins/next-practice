import { SearchItemProps } from "@/components/helpers/interfaces/search-item";
import { items } from "@/data/items";
import { navbar } from "@/data/navbar";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query")?.toLowerCase() || "";

    const formatSlug = (str: string) => 
        str.toLowerCase().replace(/&/g, "").replace(/\s+/g, "-");

    const searchItems: SearchItemProps[] = [
        ...navbar.flatMap(category => 
            category.items.map(item => ({
                id: crypto.randomUUID(),
                title: `${category.name}: ${item.title}`,
                href: item.title.toLowerCase() === "all" 
                    ? `/docs/${formatSlug(category.name)}` 
                    : `/docs/${formatSlug(category.name)}/${formatSlug(item.title)}`,
            }))
        ),
        ...items.map(item => ({
            id: item.id,
            title: item.name,
            href: item.href
        }))
    ];

    const filteredItems = searchItems.filter(item => 
        item.title.toLowerCase().includes(query)
    );

    if (!filteredItems.length) {
        return NextResponse.json({ error: "No matching search items found" }, { status: 404 });
    }

    return NextResponse.json(filteredItems);
}