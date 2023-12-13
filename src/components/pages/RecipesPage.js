import Album from "../Album";
import FooterTwo from "../FooterTwo";
import classes from "./pages.module.css";

const RecipesPage = ({ recipes, setSearch, search, setRecipes }) => {
  return (
    <>
      <div className={classes.grid}>
        <Album
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
