import classes from "./NewRecipe.module.css";
import RecipeForm from "./RecipeForm";

const NewRecipe = ({setRecipes, setRecipesP}) => {
  return (
    <section className="section-wrapper">

      <div className={classes.formContainer}>
        <RecipeForm setRecipes={setRecipes} setRecipesP={setRecipesP}/>
      </div>
    </section>
  );
};

export default NewRecipe;
