/* eslint-disable no-unused-vars */
import Eye from "../icons/Eye";
import loginImage from "../images/LoginImg.png";
import classes from "./LogSign.module.css";
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedInUser, User } from "../../App";
import LogoMobile from "../Logo/LogoMobile";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const SignNew = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loggedIn, setLoggedIn] = useContext(LoggedInUser);
  const [status, setStatus] = useState("");
  const [failed, setFailed] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [red, setRed] = useState("");
  const [redTwo, setRedTwo] = useState("");
  const [shake, setShake] = useState("");
  const [shakeTwo, setShakeTwo] = useState("");
  const [loggedUser, setLoggedUser] = useContext(User);
  const expiresInMinutes = 1440;
  const sk = "shake 0.2s ease-in-out 0s 2";

  const [user, setUser] = useState();
  const [profile, setProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  const googleMessage = (res) => {
    setProfile(res);
    const googleUser = {
      client_id: res.clientId,
      jwtToken: res.credential,
    };
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(googleUser),
    };

    async function loginGoogle() {
      try {
        const loginResponse = await fetch(
          "https://node-mysql-api-0zxf.onrender.com/google",
          opts
        );
        const data = await loginResponse.json();
        console.log(data);

        setStatus(loginResponse.status);
        console.log(loginResponse);
        try {
          if (loginResponse.status === 200) {
            setLoggedIn(true);
            setLoggedUser(data.data.user);
            console.log(user);
            localStorage.setItem("token", data.data.token);
            const now = new Date();
            const expirationDate = new Date(
              now.getTime() + expiresInMinutes * 60000
            );
            localStorage.setItem("expiresIn", expirationDate.toString());
            localStorage.setItem("username", data.data.user.user.firstName);
            localStorage.setItem("userId", data.data.user.user.id);
            setLoggedUser(data.data.user.user);
            navigate(`/`);
          } else if (loginResponse.status === 400) {
            setFailed(true);
            setWrong(true);
            setRed("#b76256");
            setRedTwo("#b76256");
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
    loginGoogle();
  };

  useEffect(() => {
    if (user) {
      console.log("getting here", user);
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
          console.log(profile);
          let googleUser = {
            email: profile.email,
            password: profile.id,
          };

          console.log(googleUser);
        })
        .catch((err) => console.log(err));
    }
  }, [user, login]);
  useEffect(() => {
    if (password !== repeatPass) {
      console.log("wrong");
      setFailed(true);
      setWrong(true);
      setRed("#b76256");
      setRedTwo("#b76256");
      setShake(sk);
      setShakeTwo(sk);
    }
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    setLoggedIn(false);
    localStorage.clear();
  }, [setLoggedIn]);

  const goToLogin = () => {
    navigate("/login");
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  console.log(name);
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };
  const handlePassRepeat = (e) => {
    setRepeatPass(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      firstName: name.split(" ")[0],
      lastName: name.split(" ")[1],
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
    <div className={`${classes.loginContainer} section-wrapper`}>
      <div className={classes.imgContainer}>
        <img src={loginImage} alt="" className={classes.loginImg} />
      </div>
      <div className={classes.formContainer}>
        <h2 className={classes.loginPrompt}>Want to join the cooking?</h2>
        <form onSubmit={handleSubmit} className={classes.loginForm}>
          <input
            required
            id="name"
            className={classes.nameInput}
            placeholder="full name"
            type="text"
            value={name}
            onChange={handleName}
          />
          <input
            id="phone"
            className={classes.phoneInput}
            placeholder="phone number (optional)"
            type="text"
            value={phone}
            onChange={handlePhone}
          />
          <input
            required
            id="email"
            className={classes.emailInput}
            placeholder="email"
            type="text"
            value={email}
            onChange={handleEmail}
          />

          <div className={classes.passContainer}>
            <input
              style={{
                color: `${redTwo}`,
                animation: `${shakeTwo}`,
              }}
              type={showPassword ? "text" : "password"}
              id="password"
              className={classes.passwordInput}
              placeholder="password"
              required
              value={password}
              onChange={handlePass}
            />

            <div
              onClick={toggleShowPassword}
              className={classes.passVisibleButton}
            >
              <Eye fill={showPassword ? "#b76256" : "#878787"} />
            </div>
          </div>

          <input
            style={{
              color: `${redTwo}`,
              animation: `${shakeTwo}`,
            }}
            type={"password"}
            id="repeat password"
            className={classes.passwordInput}
            placeholder="repeat password"
            required
            value={repeatPass}
            onChange={handlePassRepeat}
          />

          <div
            className={classes.error}
            style={{ visibility: failed && wrong ? "visible" : "hidden" }}
          >
            Password did not match{" "}
          </div>

          <button type="submit" className={classes.signButtonHome}>
            Sign up
          </button>
        </form>
        <p className={classes.joinTag}>Or you can join with</p>
        <div className={classes.socials}>
          <GoogleLogin
            onSuccess={googleMessage}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
        <p className={classes.loginTag}>
          Already have an account? <span onClick={goToLogin}>Log in</span>
        </p>
        <div className={classes.logoContainer}>
          <LogoMobile />
        </div>
      </div>
    </div>
  );
};

export default SignNew;
