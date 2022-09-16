import React, { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import WelcomePage from "./components/WelcomePage";
function App() {
  const user = {
    email: "debuginit@gmail.com",
    password: "123",
  };
  const [userDetail, setUser] = useState({ name: "", email: "" });
  const [error, setErrorMessage] = useState("");

  const Login = (details) => {
    console.log(details);

    if (details.email === user.email && details.password == user.password) {
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      setErrorMessage("Opps ,Email or Password dosen't match ");
    }
  };

  const Logout = () => {
    console.log("Logout");
    setUser({
      name: "",
      email: "",
    });
    setErrorMessage("");
  };

  return (
    <div className="App">
      {userDetail.email != "" ? (
        <WelcomePage onLogout={Logout} detail={userDetail} />
      ) : (
        <LoginForm Login={Login} error={error} setError={setErrorMessage} ErrorMessage={setErrorMessage} />
      )}
    </div>
  );
}

export default App;
