import React,{useState} from 'react'

function UserForm({onSubmit}) {

  const handleSubmit = (evt) => {
    evt.preventDefault()
    
    const user = {...values, id: Math.floor(Math.random() * 100)};

    onSubmit(user);

    handleResetForm();
  }

  const [values,setValues] = useState({
    name:'',
    type:'',
    description:'',
    image: '',
    price:'',
  })

  const handleChange = (evt) => { 
    const {value,name} = evt.target;
    setValues({...values,
    [name]: value,});
  }

  const handleResetForm = () => {
    setValues({
    name:'',
    type:'',
    description:'',
    image: '',
    price:'',
    });
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label className='form-label'>Name</label>
        <input name='name' type="text" className='form-control' value={values.name} onChange={handleChange} />
      </div>

      <div className='mb-3'>
        <label className='form-label'>Type</label>
        <input name='type' type="text" className='form-control' value={values.type} onChange={handleChange} />
      </div>

      <div className='mb-3'>
        <label className='form-label'>Description</label>
        <input name='description' type="text" className='form-control' value={values.description} onChange={handleChange} />
      </div>

      <div className='mb-3'>
        <label className='form-label'>Image</label>
        <input name='image' type="text" className='form-control' value={values.image} onChange={handleChange} />
      </div>

      <div className='mb-3'>
        <label className='form-label'>Price</label>
        <input  name='price' type="text" className='form-control' value={values.price} onChange={handleChange} />
      </div>

      <button type='submit' className='btn btn-success me-2' >Submit</button>
      <button className='btn btn-secondary' onClick={handleResetForm}>Reset</button>
      
    </form>
  )
}

export default UserForm