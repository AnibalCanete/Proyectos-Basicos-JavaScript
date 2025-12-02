
// Global Imports 
import "../../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";

// Filter Imports
import setupSearch from "../filters/search.js";
import setupCompanies from "../filters/companies.js";
import setupPrice from "../filters/price.js";

// Specific Imports
import { store, setupStore } from "../../store.js";
import display from "../../displayProducts.js";
import { getElement } from "../../utils.js";

// Import Fetch Products
import fetchProducts from "../../fetchProducts.js";

const init = async () => {
    const loading = getElement(".page-loading");
    if (store.length < 1) {
        const products = await fetchProducts();
        setupStore(products);
    }
    display(store, getElement(".products-container"));

    setupSearch(store);
    setupCompanies(store);
    setupPrice(store);
    loading.style.display = "none";
};

init();
