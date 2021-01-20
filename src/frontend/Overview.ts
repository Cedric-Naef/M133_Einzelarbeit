/// <reference lib="dom" />

import { Product } from "../common/types";

export async function loadOverview() {
    const response = await fetch("/products");
    const product: Product[] = await response.json();

    const list = document.querySelector("ul");

    for (const prod of product) {
        list.innerHTML += `
            <li>
                <a href="../products.json?id=${prod.id}">${prod.imageName} ${prod.productName} ${prod.specialOffer} ${prod.normalPrice}</a>
            </li>
        `;
    }
}