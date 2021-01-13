/// <reference lib="dom" />

import { Product } from "../common/types";

export async function loadDetail() {
    const productId = new URLSearchParams(window.location.search).get("productId"); 
    const response = await fetch(`/api/persons/${productId}`);
    const person: Product = await response.json();

    document.querySelector("h1").innerText = `${person.firstName} ${person.lastName}`;
    document.querySelector("span").innerText = person.id;
}