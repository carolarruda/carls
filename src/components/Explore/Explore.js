import classes from "./Explore.module.css";
import SingleRecipeCard from "./SingleRecipeCard";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";

const Explore = ({ recipes, setRecipes }) => {
  return (
    <section className="section-wrapper">
      <Header title={"Explore Recipes"} path={"/recipes"} />
      <Loader />
      <div className={classes.recipesContainer}>
        <SingleRecipeCard recipes={recipes} setRecipes={setRecipes} />
      </div>
    </section>
  );
};

export default Explore;
