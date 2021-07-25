import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    
     this.setInputVal = this.setInputVal.bind(this);
     this.calculate = this.calculate.bind(this);
     
  }

   setInputVal = (e)=> {
     const input = this.inputRef.current;

    if(input.value == 0) {
      input.value = null
    }
    input.value += e.target.innerHTML;
  }

  calculate = ()=> {
    try {
      this.inputRef.current.value = eval(this.inputRef.current.value)
    } 

    catch {
      console.log('Invalid input!')
      this.inputRef.current.value = 0;
    }
    
  }

  render() {
    return (
      <div className="App">
        <div className="calculator">
  
          <div className="input-wrapper">
            <input defaultValue="0" ref={this.inputRef}/>
          </div>
        
          <div className="wrapper">
            <div className="num-wrapper">
              <button className="btn-square" onClick={this.setInputVal}>7</button>
              <button className="btn-square" onClick={this.setInputVal}>8</button>
              <button className="btn-square" onClick={this.setInputVal}>9</button>
              <button className="btn-square" onClick={this.setInputVal}>4</button>
              <button className="btn-square" onClick={this.setInputVal}>5</button>
              <button className="btn-square" onClick={this.setInputVal}>6</button>
              <button className="btn-square" onClick={this.setInputVal}>1</button>
              <button className="btn-square" onClick={this.setInputVal}>2</button>
              <button className="btn-square" onClick={this.setInputVal}>3</button>
            </div>
            <div className="btn-wrapper">          
              <button className="btn-square" onClick={this.setInputVal}>+</button>
              <button className="btn-square" onClick={this.setInputVal}>-</button>
              <button className="btn-square" onClick={this.setInputVal}>*</button>
              <button className="btn-square" onClick={this.setInputVal}>/</button>
              <button className="btn-rect" onClick={this.calculate}>=</button>
            </div>
          </div>
  
        </div>
      </div>
    );
  }
  
}

export default App;
