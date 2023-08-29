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
        <img className="carls-log0" src={pic} alt=" " />
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
            <a href="about.asp">About</a>
          </li>

          <SearchAppBar
            className="remove-border"
            search={search}
            setSearch={setSearch}
          />
        </ul>
      </div>

      <div className="right-nav">
        {loggedIn ? (
          <div className="profile">
            <p>Welcome back, {username}</p>
            <div>
              <AccountMenu username={username} setLoggedIn={setLoggedIn} />
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
