import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../App";
import pic from "./images/roundLogoDark.png";
import AccountMenu from "./AccountMenu";

const Nav = ({ users }) => {
  const [loggedIn, setLoggedIn] = useContext(Context);
  const username = localStorage.getItem("username");

  const navigate = useNavigate();

  const handleSign = () => {
    navigate("/login");
  };
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
        </ul>
      </div>

      <div className="right-nav">
        {!loggedIn && (
          <button className="log-but home" onClick={handleSign}>
            Sign In
          </button>
        )}
        {loggedIn && (
          <div className="profile">
            <p>Welcome back, {username}</p>
            <div>
              <AccountMenu username={username} setLoggedIn={setLoggedIn} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
