import React from 'react'

function UserList({users}) {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
          <th>Image</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {users.map(user => {
          return (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.type}</td>
              <td>{user.Description}</td>
              <td><img width={'60px'} height={'60px'} src={user.image} alt={user.name} /></td>
              <td>{user.price}</td>
              <td>
                <button className='btn btn-warning'>Edit</button>
                <button className='btn btn-danger'>Delete</button>
              </td>
              
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default UserList