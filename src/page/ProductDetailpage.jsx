import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailpage = () => {
    const { params } = useParams();
    console.log(params);

    return (
        <div>
            <h2>Show product page{params}</h2>
        </div>
    )
}

export default ProductDetailpage