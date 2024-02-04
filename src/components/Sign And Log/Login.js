/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedInUser, User } from "../../App";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import "../style.css";
import classes from "./Sign.module.css";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="http://localhost:3000/">
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
  const [loggedIn, setLoggedIn] = useContext(LoggedInUser);
  const [status, setStatus] = useState("");
  const [failed, setFailed] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [red, setRed] = useState("");
  const [redTwo, setRedTwo] = useState("");
  const [shake, setShake] = useState("");
  const [shakeTwo, setShakeTwo] = useState("");
  const [user, setUser] = useContext(User);
  const expiresInMinutes = 1440;
  const sk = "shake 0.2s ease-in-out 0s 2";

  const navigate = useNavigate();

  useEffect(() => {
    setLoggedIn(false);
    localStorage.clear();
  }, [setLoggedIn]);

  const handleGoToRegister = (e) => {
    navigate("/sign");
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
        const loginResponse = await fetch(
          "https://node-mysql-api-0zxf.onrender.com/login",
          opts
        );

        const data = await loginResponse.json();
        setStatus(loginResponse.status);
        console.log(loginResponse);
        try {
          if (loginResponse.status === 200) {
            setLoggedIn(true);
            setUser(data.data.user);
            localStorage.setItem("token", data.data.token);
            const now = new Date();
            const expirationDate = new Date(
              now.getTime() + expiresInMinutes * 60000
            ); // Convert minutes to milliseconds
            localStorage.setItem("expiresIn", expirationDate.toString());
            localStorage.setItem("username", data.data.user.firstName);
            localStorage.setItem("userId", data.data.user.id);
            setUsers(data.data.user);
            navigate(`/`);
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
    <div className={classes.background}>
      <div className={classes.formContainer}>
        <h1>Sign in</h1>
        <div className={classes.register}>
          <p className={classes.undertext}>Don't have an account?</p>
          <button className={classes.sign} onClick={handleGoToRegister}>
            Sign up
          </button>
        </div>

        <form
          className={`${classes.formy} ${classes.log}`}
          onSubmit={handleSubmit}
        >
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
            <div className={classes.error}>
              Invalid email and/or password provided
            </div>
          )}
          <button className={classes.logBut} type="submit">
            Sign In
          </button>
          <Copyright sx={{ mt: 5 }} />
        </form>
      </div>
    </div>
  );
};

export default Login;
