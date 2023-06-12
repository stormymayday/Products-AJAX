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
    productDOM.innerHTML = `
    <!-- '.product-wrapper' - start -->
        <div class="product-wrapper">

            <!-- column-1 - start -->
            <img class="img" src="../couch.jpeg" alt="couch">
            <!-- column-1 - end -->

            <!-- column-2 - start -->
            <div class="product-info">

                <h3>title</h3>
                <h5>company</h5>
                <span>$9.99</span>
                <span>$9.99</span>

                <!-- '.colors' - start -->
                <div class="color">
                    <span class="product-color"></span>
                    <span class="product-color" style="background-color: red;"></span>
                </div>
                <!-- '.colors' - end -->

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat distinctio dolor earum accusantium
                    doloremque nam delectus deleniti ex reiciendis explicabo?</p>

                <button class="btn">add to cart</button>

            </div>
            <!-- column-2 - end -->

        </div>
    <!-- '.product-wrapper' - end -->
    `;

};

const start = async () => {

    const product = await fetchProduct();

    displayProduct(product);

};

start();