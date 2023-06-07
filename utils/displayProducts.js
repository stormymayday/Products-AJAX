const displayProducts = (list) => {

    const productList = list.map((product) => {

        console.log(product);
        const { id } = product;
        const { name, price } = product.fields;
        const { url: img } = product.fields.image[0];
        console.log(img);

    });

};

export default displayProducts;