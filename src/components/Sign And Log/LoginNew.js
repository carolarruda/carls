import Eye from "../icons/Eye";
import Google from "../icons/Google";
import loginImage from "../images/LoginImg.png";
import classes from "./LogSign.module.css";
import facebook from "../images/facebook 1.png";
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedInUser, User } from "../../App";
import LogoMobile from "../Logo/LogoMobile";
import { GoogleLogin } from "@react-oauth/google";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";


const LoginNew = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // eslint-disable-next-line no-unused-vars
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

  const responseGoogle = (response) => {
    const { profileObj } = response;
    console.log(`Welcome, ${profileObj.name}
  !`);
    // Perform actions using user data
  };

  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
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
          let googleUser = {
            email: profile.email,
            password: profile.id,
          };

          console.log(googleUser);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  const navigate = useNavigate();

  useEffect(() => {
    setLoggedIn(false);
    localStorage.clear();
  }, [setLoggedIn]);

  const handleGoToRegister = (e) => {
    navigate("/sign");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    let googleUser;
    if (user && profile) {
      googleUser = {
        email: profile.email,
        password: profile.id,
      };

      console.log(googleUser);
    }

    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user || googleUser),
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
            setLoggedUser(data.data.user);
            localStorage.setItem("token", data.data.token);
            const now = new Date();
            const expirationDate = new Date(
              now.getTime() + expiresInMinutes * 60000
            );
            localStorage.setItem("expiresIn", expirationDate.toString());
            localStorage.setItem("username", data.data.user.firstName);
            localStorage.setItem("userId", data.data.user.id);
            setLoggedUser(data.data.user);
            console.log(loggedUser);
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
    <div className={`${classes.loginContainer} section-wrapper`}>
      <div>
        <img src={loginImage} alt="" className={classes.loginImg} />
      </div>
      <div className={classes.formContainer}>
        <h2 className={classes.loginPrompt}>Welcome Back!</h2>
        <p className={classes.loginTag}>Enter your email & passpord to login</p>
        <form onSubmit={handleSubmit} className={classes.loginForm}>
          <input
            required
            id="email"
            className={classes.emailInput}
            placeholder="email"
            type="text"
            value={email}
            onChange={handleEmail}
          />

          <div>
            <input
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
          {!failed && !wrong && <div></div>}
          {failed && wrong && (
            <div className={classes.error}>
              Invalid email and/or password provided
            </div>
          )}
          <button type="submit" className={classes.signButtonHome}>
            Login
          </button>
        </form>
        <p className={classes.joinTag}>Or you can join with</p>
        <div className={classes.socials}>
          <div className={classes.alternativeLogin}>
            {/* <button onClick={login}>Sign in with Google 🚀 </button>{" "} */}
            <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
          </div>
          {/* <div className={classes.alternativeLogin}>
            <img
              src={facebook}
              alt="facebook"
              style={{ width: "24px", height: "24px" }}
            />
            <p>Sign in with Facebook</p>
          </div> */}
        </div>
        <p className={classes.loginTag}>Don't have an account yet? Sign up</p>
        <div className={classes.logoContainer}>
          <LogoMobile />
        </div>
      </div>
    </div>
  );
};

export default LoginNew;
