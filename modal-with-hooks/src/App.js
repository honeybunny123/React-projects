import React, {useState} from "react";
import "./App.css";
import LoginModal from "./loginModal";
import SignupModal from "./signupModal";

export default function App() {

  const [loginModalShow, loginModalSetShow] = useState(false);
  const [signupModalShow, signupModalSetShow] = useState(false);

  return (
    <div className="App">
      <div>
        <button className="btn-primary" onClick={()=> loginModalSetShow(true)}
        >Login</button>
      </div>
      <div>
        <button className="btn-primary" onClick={()=> signupModalSetShow(true)}>
        Signup</button>
      </div>
        <LoginModal show={loginModalShow} close={()=> loginModalSetShow(false)}/>
        <SignupModal show={signupModalShow} close={()=> signupModalSetShow(false)}/>
    </div>
  );
}
