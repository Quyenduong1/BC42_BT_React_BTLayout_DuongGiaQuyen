import React,{useState} from 'react'
import UserForm from './UserForm'
import UserList from './UserList'

function ProductForm() {

  const [users, setUsers] = useState([
    {id:1, name: 'Iphone', type:'Phone', description:'Iphone...',Image:'./img/sp_iphoneX.png',price:'999',}
  ]);

  const handleSubmit = (user, type) => {
    if(type === 'create') {
      user.id = Math.floor(Math.random() * 100);
      setUsers([...users, user]);
    } else if(type === 'update') {
      const newUsers = users.map((item) => {
        if(item.id === user.id) {
          return user = {...user, ...user};
        }
        return item;
      })
      setUsers(newUsers);

    }
  };

  const handleDelete = (userId) => {
    const newUsers = users.filter((user) => user.id !== userId)
    setUsers(newUsers);
  }

  const [selectUser, setSelectUser] = useState({})

  const handleSelectUser = (user) => {
    console.log(user);
    setSelectUser(user);
  }

  return (
    <div className='container-fluid'>
        <h1 className='text-center text-primary'>User Manage</h1>

        <div className='card'>
          <div className='card-header bg-dark text-white'> User Form</div>
          <div className='card-body'>
            <UserForm key={selectUser.id} onSubmit={handleSubmit} editUser={selectUser}/>
          </div>
        </div>

        <div className='mt-4'>
          <input type="text" placeholder='Search By Name' />
          <button className='btn btn-success mx-2'>Search</button>
        </div>

        <div className='mt-4'>
          <UserList users = {users} onDelete={handleDelete} onSelectUser={handleSelectUser} />
        </div>
    </div>
  )
}

export default ProductForm