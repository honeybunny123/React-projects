import React from "react";
import { func, boolean } from 'prop-types';

const LoginModal = (props) => {

  return(
    props.isRender 
    ? (
        <section className="modal-wrapper">
          <div className="modal">
            <h2>Login</h2>
            <button className="close" onClick={() => props.handleLoginModal()}>X</button>
          </div>
        </section>
      ) 
    : ''
  )
}
    

LoginModal.propTypes = {
  handleLoginModal: func,
  isRender: boolean
};

export default LoginModal;
