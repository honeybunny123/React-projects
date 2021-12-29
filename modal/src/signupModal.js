import React from "react";
import { func, boolean } from 'prop-types';

const SignupModal = (props) => {
  return (  
    <section className="modal-wrapper">
      <div className="modal">
        <h2>Signup</h2>
        <button className="close" onClick={() => props.handleSignupModal()}>X</button>
      </div>
    </section>      
  )
}
    

SignupModal.propTypes = {
  handleSignupModal: func,
  isRender: boolean
};

export default SignupModal;
