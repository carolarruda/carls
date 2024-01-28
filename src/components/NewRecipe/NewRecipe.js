import classes from "./NewRecipe.module.css";
import Header from "../Header/Header";
import RecipeForm from "./RecipeForm";

const NewRecipe = ({setRecipes, setRecipesP}) => {
  return (
    <section className="section-wrapper">
      {/* <Header title={"Create new recipe"} path={"/recipes"} sort={false} recipeAdd={true} /> */}

      <div className={classes.formContainer}>
        <RecipeForm setRecipes={setRecipes} setRecipesP={setRecipesP}/>
      </div>
    </section>
  );
};

export default NewRecipe;
