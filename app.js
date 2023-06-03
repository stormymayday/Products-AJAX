import getElement from "./utils/getElement.js";
import fetchProducts from "./utils/fetchProducts.js";

// Selections
// Element where the states (loading, display, error) are toggled:
const productsCenter = getElement('.products-center');

fetchProducts();