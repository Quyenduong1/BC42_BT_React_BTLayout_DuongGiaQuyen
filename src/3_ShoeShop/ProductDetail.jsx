import React from 'react'

function ProductDetail({onSeclectProduct}) {
  if(!onSeclectProduct) {
    return null;
  }
  return (
    <div className='mt-4 row'>
              <div className="col-sm-4">
                <h3 className='text-center'>{onSeclectProduct.name}</h3>
                <img width='100%' height='414px' src={onSeclectProduct.image} alt={onSeclectProduct.name} />
              </div>
              <div className='col-sm-8'>
                <h3>Thông tin Sản Phẩm</h3>
                <table className='table'>
                  <tbody>
                      <tr>
                        <td>Sản phẩm thứ {onSeclectProduct.id}</td>
                      </tr>
                      <tr>
                        <td>{onSeclectProduct.name}</td>
                      </tr>
                      <tr>              
                        <td>{onSeclectProduct.price}$</td>     
                      </tr>
                      <tr>
                        <td>{onSeclectProduct.description}</td>
                      </tr>
                      <tr>
                        <td>{onSeclectProduct.shortDescription} </td>        
                      </tr>
                      <tr>
                        <td>{onSeclectProduct.quantity}</td>
                      </tr>
                    </tbody>
                </table>
              </div>
            </div>
  )
}

export default ProductDetail

