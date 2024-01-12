import classes from "./HeroAndInfo.module.css";
import { useContext } from "react";
import { LoggedInUser } from "../../App";
import { useNavigate } from "react-router-dom";
import HeroBlob from "../Blob/HeroBlob";
import food from "../images/Group.png";

const Hero = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [loggedIn, setLoggedIn] = useContext(LoggedInUser);

  const handleBrowse = () => {
    navigate("/recipes");
  };
  const handleSign = () => {
    navigate("/sign");
  };
  const handleLog = () => {
    navigate("/login");
  };

  return (
    <>
      <div className={classes.blob}>
        <HeroBlob />
      </div>
      <section className={`${classes.hero} section-wrapper`}>
        <div className={classes.leftHero}>
          <div className="">
            <h1 className={classes.header}>
              A Food Journey
              <br />
              One <span className={classes.span}>Dish</span> At A Time
              <p className={classes.smallerText}>
                Connecting with other foodies has never been easier. Find others
                that share the same passion, connect or simply browse and find
                your next creation!
              </p>
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
                <>
                  <button
                    className={classes.signButtonHome}
                    onClick={handleSign}
                  >
                    Sign up
                  </button>
                  <p className={classes.undertext}>
                    Do you have an account?{" "}
                    <span onClick={handleLog}>Log in</span>
                  </p>
                </>
              )}
            </h1>
          </div>
        </div>
        <div className={classes.rightHero}>
          <img src={food} alt="food" />
        </div>
      </section>
    </>
  );
};

export default Hero;
