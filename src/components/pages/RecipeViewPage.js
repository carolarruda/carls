import classes from "./pages.module.css";
import Footer from "../Footer/Footer";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import RecipeView from '../RecipeView/RecipeView'
import RecipeDetails from "../RecipeDetails/RecipeDetails";

const RecipeViewPage = ({ recipes, setSearch, search, setRecipes, path }) => {
  return (
    <main className={classes}>
      <Breadcrumbs path={path} />

      <div className={classes.section}>
        {/* <RecipeView
          recipes={recipes}
          setSearch={setSearch}
          search={search}
          setRecipes={setRecipes}
        /> */}
        <RecipeDetails/>
      </div>

      <Footer />
    </main>
  );
};

export default RecipeViewPage;
