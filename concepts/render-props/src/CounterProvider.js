import React from 'react';
import Counter from './Counter';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';


class CounterProvider extends React.Component {
  render() {
    return (
      <>
      <Counter incrementNum={2} render={(count, incrementCount) => (
        <HoverCounter count = {count} incrementCount = {incrementCount}/>
      )}/>

      <Counter incrementNum={4} render={(count, incrementCount) => (
          <ClickCounter count = {count} incrementCount = {incrementCount}/>      
      )}/>
    </>
    )
  }
}

export default CounterProvider;
