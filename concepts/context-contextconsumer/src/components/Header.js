import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Header() {  
  return (
    <ThemeContext.Consumer>{context => {
      const theme = context;
      return (
        <header style={{background: theme.bg}}>
          <h1 style={{color: theme.color}}>Welcome to the tutorial</h1>
        </header>
      )      
    }}</ThemeContext.Consumer>    
  )
}


