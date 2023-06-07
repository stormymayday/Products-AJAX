const displayProducts = (list) => {

    const productList = list.map((product) => {

        console.log(product);
        const { id } = product;
        console.log(id);

    });

};

export default displayProducts;