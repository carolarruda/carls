import React, { useState, useContext } from "react";
import { LoggedInUser } from "../App";
import { useNavigate } from "react-router-dom";
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
      <Link color="inherit" href="http://localhost:3000/">
        Carl's
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState("");
  
  // eslint-disable-next-line no-unused-vars
  const [loggedIn, setLoggedIn] = useContext(LoggedInUser);

  // eslint-disable-next-line no-unused-vars
  const [status, setStatus] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [users, setUsers] = useState("");

  const navigate = useNavigate();

  const handleGoToLogin = (e) => {
    navigate("/login");
  };

  const handleFirst = (e) => {
    setFirstName(e.target.value);
  };

  const handleLast = (e) => {
    setLastName(e.target.value);
  };
  const hanldePhone = (e) => {
    setPhone(e.target.value);
  };
  const hanldeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };
  const handleTerms = (e) => {
    setTerms(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      firstName,
      lastName,
      password,
      phone,
      email,
    };

    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    };

    async function registerUser() {
      try {
        const registerResponse = await fetch(
          "https://node-mysql-api-0zxf.onrender.com/users",
          opts
        );

        const data = await registerResponse.json();
        setStatus(registerResponse.status);
        if (registerResponse.status === 201) {
          setUsers(data);
          async function loginUser() {
            try {
              const loginResponse = await fetch(
                "https://node-mysql-api-0zxf.onrender.com/login",
                opts
              );
              const data = await loginResponse.json();
              setStatus(loginResponse.status);
              if (loginResponse.status === 200) {
                setLoggedIn(true);

                localStorage.setItem("token", data.data.token);
                localStorage.setItem("username", data.data.user.firstName);
                localStorage.setItem("userId", data.data.user.id);
                setUsers(data.data.user);
                navigate(`/home`);
              }
            } catch (error) {
              console.error("Error occurred during login", error);
            }
          }
          loginUser()
        }
      } catch (error) {
        console.error("Error occurred during register: ", error);
      }
    }
    registerUser();
  };

  return (
    <div className="background">
      <div className="lefty side">
        <h1 className="lefth1">Sign up</h1>
        <div className="register">
          <p className="undertext">Already have an account?</p>
          <button className="sign" onClick={handleGoToLogin}>
            Login
          </button>
        </div>

        <form className="formy" onSubmit={handleSubmit}>
          <label htmlFor="username">First Name</label>
          <input
            type="text"
            id="first"
            placeholder="First Name"
            required
            value={firstName}
            onChange={handleFirst}
          />
          <label htmlFor="username">Last Name</label>
          <input
            type="text"
            id="last"
            placeholder="Last Name"
            required
            value={lastName}
            onChange={handleLast}
          />
          <label htmlFor="username">Phone Number</label>
          <input
            type="text"
            id="phone"
            placeholder="Phone Number"
            value={phone}
            onChange={hanldePhone}
          />
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

          <div className="terms">
            <input
              type="checkbox"
              required
              checked={terms}
              onChange={handleTerms}
            />
            <p>I agree to All Statements in Terms of Service</p>
          </div>

          {<div className="error"></div>}
          <button className="log-but" type="submit">
            Sign Up
          </button>
          <Grid container></Grid>
          <Copyright sx={{ mt: 5 }} />
        </form>
      </div>
      <div className="righty side"></div>
    </div>
  );
};

export default SignUp;
