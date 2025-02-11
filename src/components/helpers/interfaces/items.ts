export interface ItemProps {
    id: number;
    name: string;
    price: string;
    imageUrl: string;
    href: string;
    description: string;
    stockCount: string;
    category: string;
    rating: number;
    quantity: number;
}

export interface SubProduct {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    stockCount: number;
}