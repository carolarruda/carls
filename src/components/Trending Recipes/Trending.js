import classes from "./Trending.module.css";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import SingleRecipeCard from "./SingleRecipeCard";

const Trending = ({ recipes, setRecipes, loader, header, small }) => {
  console.log(header);
  return (
    <section className="section-wrapper">
      <Header title={"Trending Recipes"} path={"/recipes"} header={header} />
      <Loader />
      <div className={classes.recipesContainer}>
        <SingleRecipeCard
          recipes={recipes}
          setRecipes={setRecipes}
          small={small}
        />
      </div>
    </section>
  );
};

export default Trending;
