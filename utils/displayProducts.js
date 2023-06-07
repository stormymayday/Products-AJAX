const displayProducts = (list) => {

    const productList = list.map((product) => {

        const { id } = product;
        const { name, price } = product.fields;
        const { url: img } = product.fields.image[0];

        const formatPrice = price / 100;

        return `<a href="product.html" class="single-product">
                    <img src="${img}" class="single-product-img img" alt="${name}">
                    <footer>
                        <h5 class="name">${name}</h5>
                        <span class="price">${formatPrice}</span>
                    </footer>
                </a>`;

    }).join(``);

};

export default displayProducts;