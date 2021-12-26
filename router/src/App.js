import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router';


const App = ()=> {  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/> 
        </Routes>       
      </div>
    </BrowserRouter>
  )  
}


export default App;
