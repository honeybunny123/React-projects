import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router';


const App = ()=> {  
  return (
    <div className="app">
      <Navbar/>
      <Outlet/>
    </div>   
  )   
}

export default App;
