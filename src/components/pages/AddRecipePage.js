import RecipeAdd from "../RecipeAddUpdate/RecipeAdd";
import FooterTwo from "../Footer/FooterTwo";
import classes from "./pages.module.css";

const AddRecipePage = ({setRecipes, setRecipesP, update}) => {
  return (
    <main className={classes.main}>
      <div className={classes.grid}>
        <RecipeAdd setRecipes={setRecipes} setRecipesP={setRecipesP} 
        update={update}/>
      </div>
      <FooterTwo />
    </main>
  );
};

export default AddRecipePage;