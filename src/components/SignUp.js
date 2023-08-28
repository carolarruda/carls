import React, { useState } from "react";
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
      <Link color="inherit" href="https://mui.com/">
        Carls
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

  const [status, setStatus] = useState("");
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
          "http://localhost:4000/users",
          opts
        );

        const data = await registerResponse.json();
        setStatus(registerResponse.status);
        console.log(status);
        if (registerResponse.status === 201) {
          setUsers(data);
          console.log("user was created");
          console.log("user", users);
          console.log("registered user", registerUser);
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
        <h1>Sign up</h1>
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
