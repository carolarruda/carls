import FooterTwo from "../Footer/FooterTwo";
import classes from "./pages.module.css";
import PublicRecipes from "../PublicRecipes/PublicRecipes";

const RecipesPage = ({ recipes, setSearch, search, setRecipes }) => {
  return (
    <main className={classes.main}>

        <PublicRecipes
          recipes={recipes}
          setSearch={setSearch}
          search={search}
          setRecipes={setRecipes}
        />

      <FooterTwo />
    </main>
  );
};

export default RecipesPage;
