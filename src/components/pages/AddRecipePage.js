import RecipeAdd from "../RecipeForm/RecipeAdd";
import FooterTwo from "../Footer/FooterTwo";
import classes from "./pages.module.css";

const AddRecipePage = ({setRecipes, setRecipesP}) => {
  return (
    <main className={classes.main}>
      <div className={classes.grid}>
        <RecipeAdd setRecipes={setRecipes} setRecipesP={setRecipesP} />
      </div>
      <FooterTwo />
    </main>
  );
};

export default AddRecipePage;