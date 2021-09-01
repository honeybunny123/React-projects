import React, {useState, useEffect} from 'react';

const UserData = ()=> {
  
  const [data, setData] = useState(null);
  
  useEffect(()=> fetchData())    

  const fetchData = async()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if(res.OK)
          res.json() //converting to json
      }) 
      .then(data => setData(data))
  }  

  const userData = data ? data.map(user => {
    return (
      <tr>
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