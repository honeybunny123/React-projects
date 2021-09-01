import React, {useState, useEffect} from 'react';
import UserData from './UserData';
import '../table.css';

const UserTable = ()=> {

  const [data, setData] = useState(null);
  
  useEffect(()=> fetchData())   

  const fetchData = ()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if(res.ok) 
          return res.json() //converting to json  
      })         
      .then(data => setData(data))      
  }

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
      <UserData data={data}/>
    </table>
  )
}

export default UserTable;