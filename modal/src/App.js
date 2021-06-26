import React from "react";
import "./App.css";
import LoginModal from "./loginModal";
import SignupModal from "./signupModal";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModal: false,
      signupModal: false
    };
    this.handleLoginModal = this.handleLoginModal.bind(this);
    this.handleSignupModal = this.handleSignupModal.bind(this);
  }

  handleLoginModal() {
    this.setState((state) => ({
      loginModal: !state.loginModal
    }))
  }

  handleSignupModal() {
    this.setState((state) => ({
      signupModal: !state.signupModal
    }))
  }

  render() {
    return (
      <div className="App">
        <div>
          <button className="btn-primary" onClick={this.handleLoginModal}
          >Login</button>
        </div>
        <div>
          <button className="btn-primary" onClick={this.handleSignupModal}>
          Signup</button>
        </div>
         <LoginModal handleLoginModal={this.handleLoginModal} isRender={this.state.loginModal}/>
         <SignupModal handleSignupModal={this.handleSignupModal} isRender={this.state.signupModal}/>
      </div>
    );
  }
}
