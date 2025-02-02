import { CategoryProps } from "@/components/helpers/interfaces/category";

export async function searchItems(query: string): Promise<CategoryProps[]> {
    const searchResponse = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/search?query=${query}`);

    if (searchResponse.status !== 404 && !searchResponse.ok) {
        throw new Error("Failed to fetch search items");
    }

    return searchResponse.json();
}