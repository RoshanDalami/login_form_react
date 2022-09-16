import React from "react";
import './WelcomePage.css'
function WelcomePage(props) {
    const Logout = (event) =>{
        props.onLogout(event);
    }
  return (
    <div className="welcome">
      <button onClick={Logout} className="btn">
        Logout
      </button>
      <h2 className="main_head">
        Welcome, <span>{props.detail.name}</span>{" "}
      </h2>
    </div>
  );
}

export default WelcomePage;
