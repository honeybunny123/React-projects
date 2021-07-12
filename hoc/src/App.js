import React from "react";
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HoverCounter />
        <ClickCounter />
      </div>
    );
  }
  
}

