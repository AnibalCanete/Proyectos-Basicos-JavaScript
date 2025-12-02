
// Global Imports 
import "./toggleSidebar.js";
import "./src/cart/toggleCart.js";
import "./src/cart/setupCart.js";

// Specific Imports
import fetchProducts from "./fetchProducts.js";
import { setupStore, store } from "./store.js";
import display from "./displayProducts.js";
import { getElement } from "./utils.js";

const init = async () => {
    const products = await fetchProducts();
    if (products) {
        // Add Products To The Store
        setupStore(products);
        const featured = store.filter((product) => product.featured === true);
        display(featured, getElement(".featured-center"));
    }
};

window.addEventListener("DOMContentLoaded", init);
