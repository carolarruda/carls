import classes from "./NewRecipe.module.css";
import RecipeForm from "./RecipeForm";

const NewRecipe = ({ setRecipes, setRecipesP, update }) => {
  return (
    <section className="section-wrapper">
      <div className={classes.formContainer}>
        <RecipeForm
          setRecipes={setRecipes}
          setRecipesP={setRecipesP}
          update={update}
        />
      </div>
    </section>
  );
};

export default NewRecipe;
