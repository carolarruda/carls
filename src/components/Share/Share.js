import shareImg from "../images/close-up-food-lover-taking-pictures-meal 1.png";
import classes from "./Share.module.css";
import { useNavigate } from "react-router-dom";

const Share = () => {
  const nav = useNavigate();
  const token = localStorage.getItem("token");

  const handleCreate = () => {
    if (token) {
      nav("/add");
    } else {
      nav("/login");
    }
  };

  return (
    <section className={`section-wrapper ${classes.share}`}>
      <img src={shareImg} alt="share" />
      <div>
        <h2 className={classes.header}>
          Share Your <span className={classes.accent}>Recipes</span>
        </h2>
        <p className={classes.addtionalInfo}>
          Whether it's your grandma's secret cookie recipe or a modern twist on
          a classic dish. This is your space to showcase your culinary
          creativity.
        </p>
        <button className={classes.createRecipeButton} onClick={handleCreate}>
          Create New Recipe
        </button>
      </div>
    </section>
  );
};

export default Share;
