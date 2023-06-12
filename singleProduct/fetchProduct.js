import getElement from "../utils/getElement.js";

const productDOM = getElement('.product');
const url = 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog';

const fetchProduct = async () => {

    try {

        productDOM.innerHTML = `<h4 class="product-loading">Loading...</h4>`;

        const response = await fetch(url);
        const date = await response.json();

        return data;

    } catch (error) {

        productDOM.innerHTML = `<p class="class-error">There was a problem loading the product</p>`;

    }

    // return productDOM;

};

export default fetchProduct;