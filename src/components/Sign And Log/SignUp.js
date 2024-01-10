import React, { useState, useContext } from "react";
import { LoggedInUser } from "../../App";
import { useNavigate } from "react-router-dom";
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

        setStatus(registerResponse.status);
        if (registerResponse.status === 201) {
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
      
                localStorage.setItem("username", data.data.user.firstName);
                localStorage.setItem("userId", data.data.user.id);
                localStorage.setItem("token", data.data.token);
                navigate(`/`);
              }
            } catch (error) {
              console.error("Error occurred during login", error);
            }
          }
          loginUser();
        }
      } catch (error) {
        console.error("Error occurred during register: ", error);
      }
    }
    registerUser();
  };

  return (
    <div className={classes.background}>
      <div className={classes.formContainer}>
        <h1>Sign up</h1>
        <div className={classes.register}>
          <p className={classes.undertext}>Already have an account?</p>
          <button className={classes.sign} onClick={handleGoToLogin}>
            Login
          </button>
        </div>

        <form className={classes.formy} onSubmit={handleSubmit}>
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

          {<div className={classes.error}></div>}
          <button className={classes.logBut} type="submit">
            Sign Up
          </button>
          <Copyright sx={{ mt: 5 }} />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
