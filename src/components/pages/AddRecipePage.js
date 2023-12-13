import Blog from "../Blog/Blog";
import FooterTwo from "../Footer/FooterTwo";

import classes from "./pages.module.css";

const AddRecipePage = () => {
  return (
    <>
      <div className={classes.grid}>
        <Blog />
      </div>
      <FooterTwo />
    </>
  );
};

export default AddRecipePage;