import React, { useState } from "react";

import "./style.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState("");



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

    // async function createUser() {
    //   try {
    //     const registerResponse = await fetch(
    //       "http://localhost:4000/users",
    //       opts
    //     );
    //     const data = await registerResponse.json();
    //     setStatus(registerResponse.status);
    //     if (registerResponse.status === 201) {
    //       setUsers(data);
    //       async function loginUser() {
    //         try {
    //           const loginResponse = await fetch(
    //             "http://localhost:4000/login",
    //             opts
    //           );
    //           const data = await loginResponse.json();
    //           setStatus(loginResponse.status);

    //           if (loginResponse.status === 200) {
    //             setLoggedIn(true);
    //             localStorage.setItem("token", data.data.token);
    //             localStorage.setItem("username", data.data.username);
    //             localStorage.setItem("userId", data.data.userId);

    //             navigate(`/main/${userId}`);
    //           } else if (loginResponse.status === 404) {
    //             setFailed(true);
    //             setRed("red");
    //             setRedTwo("");
    //             setShake(sk);
    //             setShakeTwo("");
    //             console.log("Please use register to create a new user");
    //           } else if (loginResponse.status === 401) {
    //             setWrong(true);
    //             setFailed(false);
    //             setRedTwo("red");
    //             setRed("");
    //             setShakeTwo(sk);
    //             setShake("");
    //           }
    //         } catch (error) {
    //           console.error("Error occurred during login: ", error);
    //         }
    //       }

    //       loginUser();
    //     }
    //   } catch (error) {
    //     console.error("Error occurred during register: ", error);
    //   }
    // }
  };

  return (
    <div className="background">
      <div className="left box">
        <h1>Create your Account</h1>
        <div className="register">
          <p className="undertext">Already have an account?</p>
          <button className="sign">Login</button>
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
            CREATE ACCOUNT
          </button>
        </form>
      </div>
      <div className="right box"></div>
    </div>
  );
};

export default SignUp;
