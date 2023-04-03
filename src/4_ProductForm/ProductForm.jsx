import React,{useState} from 'react'
import UserForm from './UserForm'
import UserList from './UserList'
import datas from './data.json'

function ProductForm() {
  // state quann ly danh sach nguoi dung
  const [users, setUsers] = useState([])


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
          <UserList users = {datas}/>
        </div>
    </div>
  )
}

export default ProductForm