const displayProducts = (list) => {

    const productList = list.map((product) => {

        console.log(product);
        const { id } = product;
        const { name, price } = product.fields;
        console.log(price);

    });

};

export default displayProducts;