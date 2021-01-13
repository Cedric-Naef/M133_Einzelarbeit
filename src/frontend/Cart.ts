/// <reference lib="dom" />

import { Product } from "../common/types";

export async function loadDetail() {
    const productId = new URLSearchParams(window.location.search).get("productId"); 
    const response = await fetch(`/api/product/${productId}`);
    const product: Product = await response.json();

    document.querySelector("h1").innerText = `${product.productName} ${product.specialOffer}`;
    document.querySelector("span").innerText = product.id;
}