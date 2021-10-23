import React, {useState} from 'react';
import './App.css';
import UserTable from './components/UserTable';
import Dropdown from './components/Dropdown';

function App() {

  const [data, setData] = useState(null);

  return (
    <div className="App">
      <Dropdown data={data} setData={setData}/>
      <UserTable data={data} setData={setData}/>
    </div>
  );
}

export default App;
