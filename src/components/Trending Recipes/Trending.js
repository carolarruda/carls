import classes from "./Trending.module.css";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import SingleRecipeCard from "./SingleRecipeCard";

const Trending = ({ recipes, setRecipes, loader }) => {
  return (
    <section className="section-wrapper">
      <Header title={"Trending Recipes"} path={"/recipes"} />
      <Loader />
      <div className={classes.recipesContainer}>
        <SingleRecipeCard recipes={recipes} setRecipes={setRecipes} />
      </div>
    </section>
  );
};

export default Trending;
