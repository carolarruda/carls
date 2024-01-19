import classes from "./PublicRecipes.module.css";
import SingleRecipeCard from "./SingleRecipeCard";
import Header from "../Header/Header";

const PublicRecipes = ({ recipes, setRecipes }) => {
  return (
    <section className="section-wrapper">
      <Header title={"Recipes"} path={"/recipes"} />
      <div className={classes.recipesContainer}>
        <SingleRecipeCard recipes={recipes} setRecipes={setRecipes} />
      </div>
    </section>
  );
};

export default PublicRecipes;
