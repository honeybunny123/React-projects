import React from 'react';
import {string, boolean} from 'prop-types';

function Toast(props) {
  
  return(
   (!props.isBtn)
    ? (
        <div className={`toast ${props.type}`}>
        <svg height="15" width="15">
          <use href={`#ic-${props.type}`}></use>
        </svg>
        <span>{props.msg}</span>
      </div>
    )
    : ''    
  )  
}

Toast.propTypes = {
  type: string.isRequired,
  msg: string.isRequired,
  isBtn: boolean
}

export default Toast;