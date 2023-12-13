import RecipeAdd from "../RecipeForm/RecipeAdd";
import FooterTwo from "../Footer/FooterTwo";
import classes from "./pages.module.css";

const AddRecipePage = () => {
  return (
    <>
      <div className={classes.grid}>
        <RecipeAdd />
      </div>
      <FooterTwo />
    </>
  );
};

export default AddRecipePage;