import { ProductProps } from "./product"

export interface CategoryProps {
    id: number
    name: string
    href?: string
    description: string
    subCategories: SubCategoryProps[]
}


export interface SubCategoryProps {
    id: number
    name: string
    href: string
    description: string
    categoryId: number;
    products?: ProductProps[]
}