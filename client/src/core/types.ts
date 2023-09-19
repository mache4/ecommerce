export interface ProductType {
    _id: string,
    name: string,
    img1: any,
    img2: any,
    price: number,
    priceId: string,
    category: string,
    type: string,
    createdAt: string
}

export interface CategoryType {
    _id: string,
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
    id: string,
    name: string,
    image: any,
    price: number,
    priceId: string
}

export interface HomeImageType {
    _id: string,
    name: string,
    image: string,
    type: string,
    createdAt: string
}