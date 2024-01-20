import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Footer from "../Footer/Footer";
import classes from "../Hero/HeroAndInfo.module.css";
import PublicRecipes from "../PublicRecipes/PublicRecipes";

const RecipesPage = ({ recipes, setRecipes, loader, path }) => {
  return (
    <main className={classes.main}>
      <Breadcrumbs path={path} />

      <div className={classes.section}>
        <PublicRecipes recipes={recipes} />
      </div>
      <Footer />
    </main>
  );
};

export default RecipesPage;
