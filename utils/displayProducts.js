const displayProducts = (list) => {

    const productList = list.map((product) => {

        console.log(product);
        const { id } = product;
        const { name } = product.fields;
        console.log(name);

    });

};

export default displayProducts;