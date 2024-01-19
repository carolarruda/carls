import Footer from "../Footer/Footer";
import classes from "../Hero/HeroAndInfo.module.css";
import PublicRecipes from "../PublicRecipes/PublicRecipes";

const RecipesPage = ({ recipes, setRecipes, loader }) => {
  return (
    <main className={classes.main}>
      <div className={classes.section}>
         <PublicRecipes recipes={recipes}/>
      </div>
      <Footer />
    </main>
  );
};

export default RecipesPage;
