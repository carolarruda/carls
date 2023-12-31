import classes from "./HeroAndInfo.module.css";
import { useContext } from "react";
import { LoggedInUser } from "../../App";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [loggedIn, setLoggedIn] = useContext(LoggedInUser);
  
    const handleBrowse = () => {
      navigate("/recipes");
    };
    const handleSign = () => {
      navigate("/login");
    };

    return (
    <div className={classes.backImage}>
      <div className="section-wrapper">
        <h1 className={classes.header}>
          Welcome to Carl's - where food stories come to life!{" "}
          <span className={classes.smallerText}>
            {" "}
            Connecting with other foodies has never been easier. Find others
            that share the same passion, connect or simply browse and find your
            next creation!
          </span>
          {loggedIn ? (
            <button className={classes.signupBtn} onClick={handleBrowse}>
              RECIPES
              <span className={classes.arrow}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 320 512"
                  fill="rgb(183, 128, 255)"
                >
                  <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                </svg>
              </span>
            </button>
          ) : (
            <button className={classes.signupBtn} onClick={handleSign}>
              SIGN UP
              <span className={classes.arrow}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 320 512"
                  fill="rgb(183, 128, 255)"
                >
                  <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                </svg>
              </span>
            </button>
          )}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
