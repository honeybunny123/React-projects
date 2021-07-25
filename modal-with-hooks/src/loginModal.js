import React, { useEffect } from "react";

const LoginModal = props => {

  const closeOnEsc = (e) => {
    if(e.keyCode == 27) {
      props.close();
    }
  }

  useEffect(()=>{
    document.body.addEventListener('keydown', closeOnEsc)

    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEsc);
    }
  }, [])

  return(
    props.show 
    ? (
        <section className="modal-wrapper" onClick={props.close}>
          <div className="modal" onClick={(e)=> e.stopPropagation()}>
            <h2>Login</h2>
            <button className="close" onClick={props.close}>X</button>
          </div>
        </section>
      ) 
    : null
  )
}

export default LoginModal;
