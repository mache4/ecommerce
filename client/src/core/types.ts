export interface ProductType {
    id: number,
    name: string,
    img1: any,
    img2: any,
    price: number
}

export interface CategoryType {
    id: number,
    name: string,
    value: string
}

export interface QueryType {
    categories: string[] | null,
    sort: string | null,
    maxPrice: number | null,
}

export interface SortingType {
    id: number,
    name: string,
    value: string,
}

export interface CartItemType {
    id: number,
    name: string,
    image: any,
    price: number
}