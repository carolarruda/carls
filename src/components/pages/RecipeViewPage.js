import FooterTwo from "../Footer/FooterTwo";
import classes from "./pages.module.css";
import RecipeView from "../RecipeView/RecipeView";

const RecipeViewPage = ({ recipes, setSearch, search, setRecipes }) => {
  return (
    <main className={classes.main}>
      <RecipeView
        recipes={recipes}
        setSearch={setSearch}
        search={search}
        setRecipes={setRecipes}
      />

      <FooterTwo />
    </main>
  );
};

export default RecipeViewPage;
