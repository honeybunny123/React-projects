import React, {useEffect} from 'react';
import '../css/table.css';

const UserTable = (props)=> {
  
  useEffect(()=> fetchData(), []);   

  const fetchData = ()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if(res.ok) 
          return res.json() //converting to json  
      })         
      .then(data => props.setData(data))      
  }

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
    <table className="user-table" border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>PHONE</th>
          <th>WEBSITE</th>
        </tr>
      </thead>
      <tbody>
        {userData}
      </tbody>
    </table>
  )
}

export default UserTable;