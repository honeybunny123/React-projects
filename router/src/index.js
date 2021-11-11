import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Industries from './components/industries/industries';
import Legal from './components/industries/legal';
import Finance from './components/industries/finance';
import Healthcare from './components/industries/healthcare';

ReactDOM.render(
  <BrowserRouter>    
    <Routes>
      <Route path="/" element={<App/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/> 
        <Route path="/industries" element={<Industries/>}/>
        <Route path="/industries/legal" element={<Legal/>}/>
        <Route path="/industries/finance" element={<Finance/>}/> 
        <Route path="/industries/healthcare" element={<Healthcare/>}/> 
      </Route>      
    </Routes>    
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
