export interface paginationModel {
    total_pages: number,
    current_page: number,
    has_pre: boolean,
    has_next: boolean,
    category: null
}


export interface productsModel{
    category: string,
    content: string,
    description: string,
    id: string,
    image: string,
    is_enabled: number,
    origin_price: number,
    price: number,
    title:string,
    unit: string,
    num: number,
    imageUrl: string
}

export interface tempProductModel{
    title: string,
    category: string,
    origin_price: number,
    price: number,
    unit: string,
    image: string,
    description: string,
    content: string,
    is_enabled: number,
    imageUrl: string,
    id:string,
    num:number,
}