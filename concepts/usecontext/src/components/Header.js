import React, {useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Header() {  
      
  const theme = useContext(ThemeContext);
  return (
    <header style={{background: theme.bg}}>
      <h1 style={{color: theme.color}}>Welcome to the tutorial</h1>
    </header>
  )        
}


