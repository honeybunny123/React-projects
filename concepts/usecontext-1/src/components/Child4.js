import {useContext} from 'react';
import {CountContext} from '../App'


 const Child4 = ()=> {

  const count = useContext(CountContext);
  
  return (
    <div className="child4">
      <h2>{count}</h2>
    </div>
  )
}

export default Child4;