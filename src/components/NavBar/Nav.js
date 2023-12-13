/* eslint-disable no-unused-vars */
import { useNavigate, Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../App";
import pic from "../images/roundLogoDark.png";
import AccountMenu from "../AccountMenu";
import SearchAppBar from "../Search";
import classes from "./Nav.module.css";
import { Outlet } from "react-router-dom";

const Nav = ({ users, search, setSearch }) => {
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

  if (loading) {
    return null;
  }

  return (
    <>
      <nav className={classes.nav}>
        <div>
          <img className={classes.carlsLogo} src={pic} alt=" " />
        </div>
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
          <SearchAppBar search={search} setSearch={setSearch} />
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
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
