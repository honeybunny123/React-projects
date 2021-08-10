import React from "react";
import withCounter from "./withCounter";

const HoverCounter = (props)=> {
  const { count, incrementCount } = props;
  return (<h2 onMouseOver={incrementCount}>Hovered {count} times </h2>);
}

export default withCounter(HoverCounter, 10);
