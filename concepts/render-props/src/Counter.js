import React from "react";

  class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      }
      this.incrementCount = this.incrementCount.bind(this);
    }

    

    incrementCount = () => {
      const incrementNum = this.props.incrementNum;
      this.setState(prevState => {
        return { count: prevState.count + incrementNum }
      })
    }

    render() {
      return (
        this.props.render(this.state.count, this.incrementCount)
      );
    }
  }


export default Counter;
