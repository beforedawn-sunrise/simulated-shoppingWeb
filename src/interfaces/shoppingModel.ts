export interface allProductsModel{
    category: string,
    content: string,
    description: string,
    id: string,
    imageUrl: string,
    is_enabled: number,
    num: number,
    origin_price: number,
    price: number,
    title: string,
    unit: string
}

export interface singleProductModel{
    category: string,
    content: string,
    description: string,
    id: string,
    imageUrl: string,
    is_enabled: number,
    num: number,
    origin_price: number,
    price: number,
    title: string,
    unit: string
}


export interface orderProductModel{
    final_total: number,
    id:string,
    product_id: string,
    qty: number,
    total:number,
    product:productDetailsModel,
}

export interface productDetailsModel{
    category:string,
    description:string,
    id:string,
    imageUrl:string,
    origin_price:string
    price:string,
    title:string,
    unit:string,
}



export interface orderUserModel{
    address: string,
    email: string,
    name: string,
    tel: string
}

export interface cartModel{
    product_id: string,
    qty:number,
    id: string,
    total: number,
    final_total:number,
    product:cartProductModel
    coupon:couponModel
}

export interface cartProductModel {

    category: string,
    content: string,
    description: string,
    id: string,
    imageUrl: string,
    is_enabled: number,
    num: number,
    origin_price: number,
    price: number,
    title: string,
    unit: string
}

export interface couponModel{

    code: string,
    due_date: number,
    id: string,
    is_enabled: number,
    percent: number,
    title: string
}