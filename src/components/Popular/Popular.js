import classes from "./Popular.module.css";
import Header from "../Header/Header";
import Categories from "./Categories";

const Popular = ({ recipes, setRecipes }) => {
  return (
    <section className={`section-wrapper ${classes.popularSection}`}>
      <Header title={"Popular Categories"} path={"/recipes"} />
      <div className={classes.recipesContainer}>
        <Categories />
      </div>
    </section>
  );
};

export default Popular;
