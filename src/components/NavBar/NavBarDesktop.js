import classes from "./Nav.module.css";
/* eslint-disable no-unused-vars */
import { useNavigate, Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { LoggedInUser } from "../../App";
import AccountMenu from "./AccountMenu";
import { useMediaQuery } from "@mui/material";
import Logo from "../Logo/Logo";

const NavBarDesktop = ({}) => {
  const [loggedIn, setLoggedIn] = useContext(LoggedInUser);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleSign = () => {
    navigate("/sign");
  };
  const handleLog = () => {
    navigate("/login");
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
    setLoading(false);
  }, []);
  const isPhone = useMediaQuery("(max-width:1200px)");
  if (isPhone) {
    return null;
  }

  if (loading) {
    return null;
  }

  return (
    <section className={classes.navMain}>
      <Logo />
      <ul className={classes.options}>
        <li>
          <Link to={{ pathname: "/" }} reloadDocument>
            Home
          </Link>
        </li>
        <li>
          <Link to={{ pathname: "/recipes" }} reloadDocument>
            Recipe
          </Link>
        </li>
        <li>
          <Link to={{ pathname: "/add" }} reloadDocument>
            Add Recipe
          </Link>
        </li>
        <li>
          <Link to={{ pathname: "/blog", hash: "" }} reloadDocument>
            Blog
          </Link>
        </li>
        <li>
          <Link to={{ pathname: "/", hash: "#about" }} reloadDocument>
            About Us
          </Link>
        </li>
      </ul>

      <div className="profile">
        {loggedIn ? (
          <>
            <p className={classes.welcome}>Welcome back, {username}</p>
            <div className={classes.maxWidth}>
              <AccountMenu username={username}  />
            </div>
          </>
        ) : (
          <>
            <button className={classes.logButtonHome} onClick={handleLog}>
              Log in
            </button>
            <button className={classes.signButtonHome} onClick={handleSign}>
              Sign up
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default NavBarDesktop;
