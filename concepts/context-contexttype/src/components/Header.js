import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default class Header extends Component {   
  render() {        
    const theme = this.context;
    return (
      <header style={{background: theme.bg}}>
        <h1 style={{color: theme.color}}>Welcome to the tutorial</h1>
      </header>
    )
  }
}

Header.contextType = ThemeContext;
