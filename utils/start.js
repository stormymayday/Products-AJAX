import fetchProducts from "./fetchProducts.js";
import displayProducts from "./displayProducts.js";

const start = async () => {

    const data = await fetchProducts();

    displayProducts(data);

};

export default start;