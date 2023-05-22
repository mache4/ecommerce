export interface Product {
    id: number,
    name: string,
    img1: any,
    img2: any,
    price: number
}

export interface Category {
    id: number,
    name: string,
    value: string
}

export interface Query {
    categories: string[] | null,
    sort: string | null,
    maxPrice: number | null,
}

export interface Sorting {
    id: number,
    name: string,
    value: string,
}

export interface CartItem {
    id: number,
    name: string,
    image: any,
    price: number
}