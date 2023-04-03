import React,{useState} from 'react'
import UserForm from './UserForm'
import UserList from './UserList'
import datas from './data.json'

function ProductForm() {

  const [users, setUsers] = useState([])

  const handleSubmit = (user) => {
    setUsers([...users, user]);
  };

  


  return (
    <div className='container-fluid'>
        <h1 className='text-center text-primary'>User Manage</h1>

        <div className='card'>
          <div className='card-header bg-dark text-white'> User Form</div>
          <div className='card-body'>
            <UserForm/>
          </div>
        </div>

        <div className='mt-4'>
          <input type="text" placeholder='Search By Name' />
          <button className='btn btn-success mx-2'>Search</button>
        </div>

        <div className='mt-4'>
          <UserList users = {datas} onSubmit={handleSubmit}/>
        </div>
    </div>
  )
}

export default ProductForm