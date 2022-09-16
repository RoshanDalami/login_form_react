import React, { useState } from "react";
import './LoginForm.css'
import Image from './Image'

function LoginForm(props) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (event) => {
    event.preventDefault();

    props.Login(details);

    setDetails({
      name: "",
      email: "",
      password: "",
    });
  };
  const nameHandler = (event) => {
    setDetails({
      ...details,
      name: event.target.value,
    });
  };
  const emailHandler = (event) => {
    setDetails({
      ...details,
      email: event.target.value,
    });
  };
  const passwordHandler = (event) => {
    setDetails({
      ...details,
      
      password: event.target.value,
      
    });
  };
  const clearError=()=>{
    props.ErrorMessage('')
  }
  
  return (
    <div className="container">
      <Image/>
      <form onSubmit={submitHandler} className="form_part">
        <div className="welcome">
          <h1 className="welcome_text"> Welcome to Debuginit !</h1>
        </div>
        {props.error !== "" ? (
          <div className={`error ${props.error !== '' ? 'shake': '' }` }onClick={clearError}>
            <p className="error_message">{props.error}</p>
          </div>
        ) : (
          ""
        )}
        <div className="input_box">
          <label htmlFor="name ">Name</label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            onChange={nameHandler}
            value={details.name}
            className="text-input"
          />
        </div>
        <br />
        <div className="input_box">
          <label htmlFor="email">Email</label>
         <br />
          <input
            type="email"
            name="email"
            id="email"
            onChange={emailHandler}
            value={details.email}
            className="text-input"
          />
        </div>
        <br />
        <div className="input_box">
          <label htmlFor="password">Password</label>
         <br />
          <input
            type="password"
            name="password"
            id="password"
            onChange={passwordHandler}
            value={details.password}
            className="text-input"
          />
        </div>
        <input type="submit" value="Login" className="login_btn" />
        <p className="create_account">Create account with</p>
      <div className="social-link">
        <a href="#">
          <i className="bx bxl-facebook-circle"></i>
        </a>
        <a href="#">
          <i className="bx bxl-linkedin-square"></i>
        </a>
        <a href="#">
          <i className="bx bxl-google"></i>
        </a>
      </div>
      </form>
    
    </div>
  );
}

export default LoginForm;
