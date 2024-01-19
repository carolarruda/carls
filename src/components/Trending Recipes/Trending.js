import classes from "./Trending.module.css";
import SingleRecipeCard from "./SingleRecipeCard";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";

const Trending = ({ recipes, setRecipes, loader }) => {
  return (
    <section className="section-wrapper">
      <Header title={"Trending Recipes"} path={"/recipes"} />
      <div className={classes.loader}> {loader && <Loader />}</div>
      <div className={classes.recipesContainer}>
        <SingleRecipeCard recipes={recipes} setRecipes={setRecipes} />
      </div>
    </section>
  );
};

export default Trending;
