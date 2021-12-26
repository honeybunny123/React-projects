import {useEffect, useState} from 'react';
import '../App.css';

const UserList = ()=> {

  const [data, setData] = useState(null);
  
  useEffect(()=> fetchData(), []);   

  const fetchData = ()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if(res.ok) 
          return res.json() //converting to json  
      })         
      .then(data => setData(data))      
  }

  const userData = data ? data.map(user => {
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

export default UserList;