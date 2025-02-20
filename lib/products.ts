import { Products } from "@/types/product";
import { Product } from "@/types/product";

const getProducts = async () => {
    const response : Products = await fetch('https://dummyjson.com/products').then((res) => res.json());

    return response;
}

const getProduct = async (id: number) => {
    const response : Product = await fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json());

    return response;
}

export { getProducts , getProduct };