import React, {useState} from 'react'

import data from './data.json'
import ProductDetail from './ProductDetail';

import ProductList from './ProductList'

function Shoeshop() {
    const [selectedProduct, setselectedProduct] = useState(null)

    const handleGetProduct = (product) => {
        setselectedProduct(product);
    }

  return (
    <div className='container'>
        <h1 className='text-center'>Shoe Shop</h1>

        <ProductList products = {data} onSeclectProduct={handleGetProduct}/>
        <ProductDetail onSeclectProduct={selectedProduct}/>
    </div>
  )
}

export default Shoeshop