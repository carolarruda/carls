import classes from './Nav.module.css'
/* eslint-disable no-unused-vars */
import { useNavigate, Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../App";
import AccountMenu from "../AccountMenu";
import SearchAppBar from "../Search";
import { useMediaQuery } from "@mui/material";



const NavBarDesktop = () => {
    
    const [loggedIn, setLoggedIn] = useContext(Context);
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
    const isPhone = useMediaQuery("(max-width:600px)"); 
    if (isPhone) {
      return null;
    }
  
    if (loading) {
      return null;
    }


  return (
    <>
    
      <div>
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
      </div>
      <div>
        <SearchAppBar />
      </div>

      <div className={classes.rightNav}>
        {loggedIn ? (
          <div className="profile">
            <p>Welcome back, {username}</p>
            <div className={classes.maxWidth}>
              <AccountMenu username={username} />
            </div>
          </div>
        ) : (
          <button className={classes.logButtonHome} onClick={handleSign}>
            Sign In
          </button>
        )}
      </div>
    </>
  );
};

export default NavBarDesktop