import classes from "./PublicRecipes.module.css";
import SingleRecipeCard from "./SingleRecipeCard";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";

const PublicRecipes = ({ recipes, setRecipes }) => {
  return (
    <section className="section-wrapper">
      <Header title={"Recipes"} path={"/recipes"} sort={true}
       small={false} header={true} 
      />
      <Loader/>
      <div className={classes.recipesContainer}>
        <SingleRecipeCard recipes={recipes} setRecipes={setRecipes} />
      </div>
    </section>
  );
};

export default PublicRecipes;
