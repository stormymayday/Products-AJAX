import fetchProducts from "./fetchProducts.js";

const start = async () => {

    const data = await fetchProducts();

};

export default start;