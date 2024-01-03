import FooterTwo from "../Footer/FooterTwo";
import classes from "./pages.module.css";
import MyRecipes from "../MyRecipes";

const PersonalRecipesPage = ({ recipesP, handleDelete, setRecipesP, setRecipes }) => {
  return (
    <main className={classes.main}>

        <MyRecipes
              recipesP={recipesP}
              setRecipesP={setRecipesP}
              setRecipes={setRecipes}
              handleDelete={handleDelete}
        />

      <FooterTwo />
    </main>
  );
};

export default PersonalRecipesPage;
