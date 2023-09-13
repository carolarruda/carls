import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { Context } from "../App";
import pic from "./images/roundLogoDark.png";
import AccountMenu from "./AccountMenu";
import SearchAppBar from "./Search";

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
    <nav className="nav">
      <div className="logo">
        {/* <img className="carls-log0" src={pic} alt=" " /> */}
        <h1 className="brand">Carl's </h1>
        <h2 className="brand p3">the food plaza</h2>
      </div>
      <div>
        <ul className="options">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/recipes">Recipes</a>
          </li>
          <li>
            <a href="contact.asp">Blog</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
      <div className="remove-border">
        <SearchAppBar search={search} setSearch={setSearch} />
      </div>

      <div className="right-nav">
        {loggedIn ? (
          <div className="profile">
            <p>Welcome back, {username}</p>
            <div>
              <AccountMenu username={username}  />
            </div>
          </div>
        ) : (
          <button className="log-but home" onClick={handleSign}>
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Nav;
