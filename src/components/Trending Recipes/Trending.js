import classes from "./Trending.module.css";
import SingleRecipeCard from "./SingleRecipeCard";
import Header from "../Header/Header";

const Trending = ({ recipes, setRecipes }) => {
  console.log("trending", recipes);

  return (
    <section className="section-wrapper">
      <Header title={"Trending Recipes"} path={"/recipes"} />
      <div className={classes.recipesContainer}>
        <SingleRecipeCard recipes={recipes} setRecipes={setRecipes} />
      </div>
    </section>
  );
};

export default Trending;
