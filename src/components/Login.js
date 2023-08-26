import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import "./style.css";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [status, setStatus] = useState("");
  const [users, setUsers] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleGoToRegister = (e)=> {
    navigate('/')
  }


  const hanldeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password
    };

    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };

    async function loginUser() {
      try {
        const loginResponse = await fetch(
          "http://localhost:4000/login",
          opts
        );

        const data = await loginResponse.json();
        setStatus(loginResponse.status);
        console.log(status);
        try{
            if (loginResponse.status === 200) {
                setLoggedIn(true);
              console.log("login was successfull");
              localStorage.setItem("token", data.data.token);
              console.log(data.data.token);
            }
        }
        catch(error){
            console.error("Error occurred : ", error);
        }
       
      } catch (error) {
        console.error("Error occurred during login: ", error);
      }
    }
    loginUser();
  };

  return (
    <div className="background">
      <div className="left box">
        <h1>Sign in</h1>
        <div className="register">
          <p className="undertext">Don't have an account?</p>
          <button className="sign" onClick={handleGoToRegister}>Sign up</button>
        </div>

        <form className="formy log" onSubmit={handleSubmit}>
      
          <label htmlFor="username">Email</label>
          <input
            type="text"
            id="username"
            placeholder="email"
            required
            value={email}
            onChange={hanldeEmail}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            required
            value={password}
            onChange={handlePass}
          />


          {<div className="error"></div>}
          <button className="log-but" type="submit">
            Sign In
          </button>
        </form>
      </div>
      <div className="right box log"></div>
    </div>
  );
};

export default Login;
