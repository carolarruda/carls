import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../App";
import Typography from "@mui/material/Typography";


import Link from "@mui/material/Link";

import Grid from "@mui/material/Grid";

import "./style.css";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Carls
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const Login = ({ setUsers, users }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [loggedIn, setLoggedIn] = useContext(Context);
  const [status, setStatus] = useState("");
  const [failed, setFailed] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [red, setRed] = useState("");
  const [redTwo, setRedTwo] = useState("");
  const [shake, setShake] = useState("");
  const [shakeTwo, setShakeTwo] = useState("");

  const sk = "shake 0.2s ease-in-out 0s 2";

  const navigate = useNavigate();

  useEffect(() => {
    setLoggedIn(false);
    localStorage.clear();
  }, [setLoggedIn]);

  const handleGoToRegister = (e) => {
    navigate("/");
  };

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
      password,
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
        const loginResponse = await fetch("https://node-mysql-api-0zxf.onrender.com/login", opts);

        const data = await loginResponse.json();
        setStatus(loginResponse.status);
        console.log(status);
        try {
          if (loginResponse.status === 200) {
            setLoggedIn(true);

            localStorage.setItem("token", data.data.token);
            localStorage.setItem("username", data.data.user.firstName);
            localStorage.setItem("userId", data.data.user.id);
            setUsers(data.data.user);
            navigate(`/home`);
          } else if (loginResponse.status === 400) {
            setFailed(true);
            setWrong(true);
            setRed("red");
            setRedTwo("red");
            setShake(sk);
            setShakeTwo(sk);
          }
        } catch (error) {
          console.error("Error occurred during login", error);
        }
      } catch (error) {
        console.error("Error occurred during login: ", error);
      }
    }
    loginUser();
  };

  return (
    <div className="background">
      <div className="lefty side">
        <h1 className="lefth1">Sign in</h1>
        <div className="register">
          <p className="undertext">Don't have an account?</p>
          <button className="sign" onClick={handleGoToRegister}>
            Sign up
          </button>
        </div>

        <form className="formy log" onSubmit={handleSubmit}>
          <label htmlFor="username">Email</label>
          <input
            style={{
              color: `${red}`,
              animation: `${shake}`,
            }}
            type="text"
            id="username"
            placeholder="email"
            required
            value={email}
            onChange={hanldeEmail}
          />
          <label htmlFor="password">Password</label>
          <input
            style={{
              color: `${redTwo}`,
              animation: `${shakeTwo}`,
            }}
            type="password"
            id="password"
            placeholder="password"
            required
            value={password}
            onChange={handlePass}
          />
          {!failed && !wrong && <div></div>}
          {failed && wrong && (
            <div className="error">Invalid email and/or password provided</div>
          )}
          <button className="log-but" type="submit">
            Sign In
          </button>
          <Grid container></Grid>
          <Copyright sx={{ mt: 5 }} />
        </form>
      </div>
      <div className="righty side log"></div>
    </div>
  );
};

export default Login;
