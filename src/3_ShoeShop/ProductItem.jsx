import React from 'react'

function ProductItem({productList, onSelectProduct}) {
  return (
    <div className='card'>
      <img className='card-img' src={productList.image} alt="logo" />
      <div className='background'></div>
      <div className='card-body'>
          <h3 className='card-title'>{productList.name}</h3>
          <p className='card-text'>{productList.price}$</p>
          <button onClick={() => onSelectProduct(productList)} className='btn btn-primary'>Xem Thông tin</button> 
      </div>
    </div>
  )
}

export default ProductItem