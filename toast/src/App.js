import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toast from './toast';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isBtn: true
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isBtn: !state.isBtn
    }))    
  }

  componentDidUpdate() {
     if(!this.state.isBtn) 
      setTimeout( () => this.handleClick(), 3000)
  } 

  
  render() {
    return (
      <main>
        <button className={"btn " + (this.state.isBtn ? '' : 'disabled')} onClick={this.handleClick}>Click me!</button>
        <Toast type="info" msg="Info message here" isBtn={this.state.isBtn}/>
      </main>
    );
  }
}


export default App;
