import getElement from "./getElement.js";
import displayProducts from "./displayProducts.js";

const url = 'https://course-api.com/javascript-store-products';

// Element selections
const productsCenter = getElement('.products-center');

const fetchProducts = async () => {

    // Adding Loading Spinner
    productsCenter.innerHTML = `<div class="loading"></div>`;

    try {

        // Fetching the data:
        const response = await fetch(url);

        // Turning response into JSON:
        const data = await response.json();
        displayProducts(data);

    } catch (error) {

        productsCenter.innerHTML = `<p class="error"> there was an error</>`;

    }

};

export default fetchProducts;