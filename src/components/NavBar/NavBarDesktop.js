import classes from "./Nav.module.css";
/* eslint-disable no-unused-vars */
import { useNavigate, Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { LoggedInUser } from "../../App";
import AccountMenu from "./AccountMenu";
import SearchAppBar from "../Search";
import { useMediaQuery } from "@mui/material";

const NavBarDesktop = () => {
  const [loggedIn, setLoggedIn] = useContext(LoggedInUser);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleSign = () => {
    navigate("/login");
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
    setLoading(false);
  }, []);
  const isPhone = useMediaQuery("(max-width:860px)");
  if (isPhone) {
    return null;
  }

  if (loading) {
    return null;
  }

  return (
    <>
      <ul className={classes.options}>
        <li>
          <Link to={{ pathname: "/" }} reloadDocument>
            Home
          </Link>
        </li>
        <li>
          <Link to={{ pathname: "/recipes" }} reloadDocument>
            Recipes
          </Link>
        </li>

        <li>
          <Link to={{ pathname: "/", hash: "#about" }} reloadDocument>
            About
          </Link>
        </li>
        <li>
          <Link to={{ pathname: "/blog", hash: "" }} reloadDocument>
            Blog
          </Link>
        </li>
      </ul>

      <SearchAppBar />

      <div className="profile">
        {loggedIn ? (
          <>
            <p>Welcome back, {username}</p>
            <div className={classes.maxWidth}>
              <AccountMenu username={username} />
            </div>
          </>
        ) : (
          <button className={classes.logButtonHome} onClick={handleSign}>
            Sign In
          </button>
        )}
      </div>
    </>
  );
};

export default NavBarDesktop;
