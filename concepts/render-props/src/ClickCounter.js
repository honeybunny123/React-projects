import React from "react";

class ClickCounter extends React.Component {
  render() {
     const {count, incrementCount } = this.props;
    return <button onClick={incrementCount}>Clicked {count} times </button>;
  }
  
};

export default ClickCounter;
