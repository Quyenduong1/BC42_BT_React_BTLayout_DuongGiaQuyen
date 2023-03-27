import React from 'react'
import ProductItem from './ProductItem'

function ProductList({products,onSeclectProduct}) {
  const handleGetProduct = (product) => {
    onSeclectProduct(product);
  }

  return (
    <div className='row'>
      {products.map(product => {
        return <div key={product.id} className='col-sm-4 pb-4'>
          <ProductItem productList = {product} onSelectProduct = {handleGetProduct}/>
        </div>
        
      })}
    </div>
  )
}

export default ProductList