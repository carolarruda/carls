import RecipeAdd from "../RecipeAddUpdate/RecipeAdd";
import Footer from "../Footer/Footer";
import classes from "./pages.module.css";
import Header from "../Header/Header";
import NewRecipe from "../NewRecipe/NewRecipe";

const AddRecipePage = ({ setRecipes, setRecipesP, update }) => {
  return (
    <main className={classes}>
      <div className={classes.section}>

        <NewRecipe />

      </div>
      <Footer />
    </main>
  );
};

export default AddRecipePage;
