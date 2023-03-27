import React from 'react'

function ProductDetail({onSeclectProduct,onClose}) {
  if(!onSeclectProduct) {
    return null;
  }
  return (
    <>
      <div>
          <div style={{display:'block'}} className="modal show fade"  tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div  className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                  <button onClick={onClose} className="btn-close"/>
                </div>
                <div className="modal-body">
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
                </div>
                <div className="modal-footer">
                  <button onClick={onClose} className="btn btn-secondary" >Close</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show" />
      </div>


    </>
    
  )
}

export default ProductDetail

