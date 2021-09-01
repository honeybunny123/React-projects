import React from 'react';

const UserData = (props)=> {

  const userData = props.data ? props.data.map(user => {
    return (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{user.website}</td>
      </tr>
    ) 
  }) : null
  
  return (
    <tbody>
      {userData}
    </tbody>
  )
  
}

export default UserData;