import React,{useState, useEffect} from 'react'
import UserForm from './UserForm'
import UserList from './UserList'
import axios from 'axios'
import Search from './Search';

function ProductForm() {

  const [users, setUsers] = useState([]);

  const [searchValues, setSearchValues] = useState("")

  const handleSubmit = async (user) => {
    const {id, ...payload} = user;
    try {
      if(id) {
        await axios.put(`https://63f716f9e8a73b486af07468.mockapi.io/api/users/${id}`,payload)
     
      } else {
        await axios.post('https://63f716f9e8a73b486af07468.mockapi.io/api/users',payload)
      }

      fetchForm();
      
    } catch (error) {
      console.log(error);
    }
   
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`https://63f716f9e8a73b486af07468.mockapi.io/api/users/${userId}`)
      fetchForm();
      
    } catch (error) {
      console.log('error');
    }
  }

  const [selectUser, setSelectUser] = useState({})

  const handleSelectUser = (user) => {
    setSelectUser(user);
  }

  const fetchForm = async () => {
    try {
     const reponse = await axios.get('https://63f716f9e8a73b486af07468.mockapi.io/api/users',{
     params: {
        name: searchValues || undefined
     }
     })
 
     setUsers(reponse.data);
    } catch (error) {
     console.log('error');
    }
   }

   const handleSearch = (evt) => {
    console.log(evt);
    setSearchValues(evt);
   }
 
   useEffect(() => {
     fetchForm();
   },[searchValues])

  return (
    <div className='container-fluid'>
        <h1 className='text-center text-primary'>User Manage</h1>

        <div className='card'>
          <div className='card-header bg-dark text-white'> User Form</div>
          <div className='card-body'>
            <UserForm onSubmit={handleSubmit} editUser={selectUser} onReset={()=>setSelectUser({})}/>
          </div>
        </div>

        <Search onSearch={handleSearch}/>

        <div className='mt-4'>
          <UserList users = {users} onDelete={handleDelete} onSelectUser={handleSelectUser} />
        </div>
    </div>
  )
}

export default ProductForm