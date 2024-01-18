import classes from "./HeroAndInfo.module.css";
import { useContext, useEffect, useState } from "react";
import { LoggedInUser } from "../../App";
import { useNavigate } from "react-router-dom";
import HeroBlob from "../Blob/HeroBlob";
import food from "../images/Group.png";
import { useMediaQuery } from "@mui/material";
import HeroBlobMobile from "../Blob/HeroBlobMobile";
import Herotablet from "../Blob/Herotablet";

const Hero = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [loggedIn, setLoggedIn] = useContext(LoggedInUser);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const handleBrowse = () => {
    navigate("/recipes");
  };
  const handleSign = () => {
    navigate("/sign");
  };
  const handleLog = () => {
    navigate("/login");
  };
  const isPhone = useMediaQuery("(max-width:450px)");
  const isTablet = useMediaQuery("(max-width:800px)");

  return (
    <>
      <div className={classes.blob}>
        {isPhone && <HeroBlobMobile />}
        {isTablet && !isPhone && <Herotablet />}
        {!isTablet && !isPhone && <HeroBlob />}
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
                <button
                  className={classes.signButtonHome}
                  onClick={handleBrowse}
                >
                  Recipes
                </button>
              ) : (
                <div className={classes.buttons}>
                  {isPhone && (
                    <button
                      className={classes.logButtonHome}
                      onClick={handleLog}
                    >
                      Log in
                    </button>
                  )}
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
                </div>
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
