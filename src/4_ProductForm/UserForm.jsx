import React,{useState} from 'react'

function UserForm({onSubmit}) {
  const handleSubmit = (evt) => {
    evt.preventDefault()
    const user = {...values, id: Math.floor(Math.random() * 100)};

    onSubmit(user);

    handleResetForm();
  }

  const [values,setValues] = useState({
    Name:'',
    Type:'',
    Description:'',
    Image: '',
    Price:'',
  })

  const handleChange = (evt) => { 
    const {value,name} = evt.target
    setValues({...values,
    [name]: value,});
  }

  const handleResetForm = () => {
    setValues({
    Name:'',
    Type:'',
    Description:'',
    Image: '',
    Price:'',
    });
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label className='form-label'>Name</label>
        <input name='Name' type="text" className='form-control' value={values.Name} onChange={handleChange} />
      </div>

      <div className='mb-3'>
        <label className='form-label'>Type</label>
        <input name='Type' type="text" className='form-control' value={values.Type} onChange={handleChange} />
      </div>

      <div className='mb-3'>
        <label className='form-label'>Description</label>
        <input name='Description' type="text" className='form-control' value={values.Description} onChange={handleChange} />
      </div>

      <div className='mb-3'>
        <label className='form-label'>Image</label>
        <input name='Image' type="text" className='form-control' value={values.Image} onChange={handleChange} />
      </div>

      <div className='mb-3'>
        <label className='form-label'>Price</label>
        <input  name='Price' type="text" className='form-control' value={values.Price} onChange={handleChange} />
      </div>

      <button type='submit' className='btn btn-success me-2' >Submit</button>
      <button className='btn btn-secondary' onClick={handleResetForm}>Reset</button>
      
    </form>
  )
}

export default UserForm