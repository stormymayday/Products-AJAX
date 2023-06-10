import getElement from "../utils/getElement";
import fetchProduct from "./fetchProduct.js";
import displayProduct from "./displayProduct.js";

const productDOM = getElement('.product');
const url = 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog';

const start = async () => {

    displayProduct(productDOM);

};

export default start;