import getElement from "../utils/getElement.js";

const productDOM = getElement('.product');
const url = `https://course-api.com/javascript-store-single-product`;

const fetchProduct = async () => {

    try {

        productDOM.innerHTML = `<h4 class='product-loading'>Loading...</h4>
        <div class="loading"></div`;

        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');

        const response = await fetch(`${url}?id=${id}`);
        const data = await response.json();
        return data;

    } catch (error) {

        productDOM.innerHTML = `<p class="error">Failed to load the product</p>`;

    }

};

const displayProduct = (product) => {

    console.log(product);

};

const start = async () => {

    const product = await fetchProduct();

    displayProduct(product);

};

start();