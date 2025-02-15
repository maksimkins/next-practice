export interface NavBarProps {
    id: number;
    name: string;
    description: string;
    subcategories: { id: number; name: string; href: string; description: string }[];
}