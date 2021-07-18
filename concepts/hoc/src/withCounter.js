import React from "react";

const withCounter = (WrappedComponent, incrementNum) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      }
      this.incrementCount = this.incrementCount.bind(this);
    }

    incrementCount = () => {
      this.setState(prevState => {
        return { count: prevState.count + incrementNum }
      })
    }

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
