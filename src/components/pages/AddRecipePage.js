import RecipeAdd from "../RecipeForm/RecipeAdd";
import FooterTwo from "../Footer/FooterTwo";
import classes from "./pages.module.css";

const AddRecipePage = () => {
  return (
    <main className={classes.main}>
      <div className={classes.grid}>
        <RecipeAdd />
      </div>
      <FooterTwo />
    </main>
  );
};

export default AddRecipePage;