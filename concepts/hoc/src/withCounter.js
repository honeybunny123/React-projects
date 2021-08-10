import React,{useState} from "react";

 const withCounter = (WrappedComponent, incrementNum) => {

  const WithCounter = ()=> {
    
    const [count, incrementCount] = useState(0);
    
    return (
      <WrappedComponent
        count={count}
        incrementCount={()=> incrementCount(count + incrementNum)}
      />
    );
  
  }

  return WithCounter;
};

export default withCounter;
