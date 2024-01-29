import Footer from "../Footer/Footer";
import classes from "./pages.module.css";
import NewRecipe from "../NewRecipe/NewRecipe";

const AddRecipePage = ({ setRecipes, setRecipesP, update }) => {
  return (
    <main className={classes}>
      <div className={classes.section}>
        <NewRecipe setRecipes={setRecipes} setRecipesP={setRecipesP}/>
      </div>
      <Footer />
    </main>
  );
};

export default AddRecipePage;
