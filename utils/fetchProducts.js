const url = 'https://course-api.com/javascript-store-products';

const fetchProducts = async () => {

    try {

        // Fetching the data:
        const response = await fetch(url);

        // Turning response into JSON:
        const data = response.json();

        console.log(data);

    } catch (error) {

        console.error(error);

    }

};

export default fetchProducts;