import React from 'react';
import UserData from './UserData';
import '../table.css';

const UserTable = ()=> {
  return (
    <table class="user-table" border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>PHONE</th>
          <th>WEBSITE</th>
        </tr>
      </thead>
      <UserData/>
    </table>
  )
}

export default UserTable;