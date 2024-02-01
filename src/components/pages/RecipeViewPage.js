import classes from "./pages.module.css";
import Footer from "../Footer/Footer";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import RecipeDetails from "../RecipeDetails/RecipeDetails";

const RecipeViewPage = ({ recipes, setSearch, search, setRecipes, path }) => {
  return (
    <main className={classes}>
      <Breadcrumbs path={path} />

      <div className={classes.section}>

        <RecipeDetails
          recipes={recipes}
          setSearch={setSearch}
          search={search}
          setRecipes={setRecipes}
        />
      </div>

      <Footer />
    </main>
  );
};

export default RecipeViewPage;
