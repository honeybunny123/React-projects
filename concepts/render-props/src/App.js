
import React from "react";
import CounterProvider from './CounterProvider';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CounterProvider />
      </div>
    );
  }
  
}

