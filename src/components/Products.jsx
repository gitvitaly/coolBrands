import axios from "axios";
import {useEffect, useState} from "react";

const url = 'https://fakestoreapi.com/products'


async function Products() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        async function storeData() {
            const response = await axios.get(url)
            setProduct(response.data.title)
            
        }

        storeData()

    }, [])


    return (
        <div>
            <h2>
                {product}
            </h2>
        </div>
    );
}


export default Products;
