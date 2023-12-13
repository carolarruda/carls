import FooterTwo from "../Footer/FooterTwo";
import classes from "./pages.module.css";
import PublicRecipes from "../PublicRecipes/PublicRecipes";

const RecipesPage = ({ recipes, setSearch, search, setRecipes }) => {
  return (
    <>
      <div className={classes.grid}>
        <PublicRecipes
          recipes={recipes}
          setSearch={setSearch}
          search={search}
          setRecipes={setRecipes}
        />
      </div>
      <FooterTwo />
    </>
  );
};

export default RecipesPage;
