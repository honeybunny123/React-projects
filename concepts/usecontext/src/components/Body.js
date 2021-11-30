import React, {useContext} from 'react'
import { ThemeContext, themes } from '../contexts/ThemeContext';
import Header from './Header';

export default function Body() {
           
  const theme = useContext(ThemeContext);
  return (
    <main style={{background: theme.bg}}>
      <p style={{color: theme.color}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, facilis blanditiis a eaque corporis ea vitae adipisci quos nulla rem sed fugiat necessitatibus ipsam. Quia aut mollitia quasi provident dolores?
      </p>  
      <ThemeContext.Provider value={themes.light}>
        <Header/>
      </ThemeContext.Provider> 
    </main>
  )  
}

