import classes from "../Trending.module.css";
import Header from "../../Header/Header";
import Loader from "../../Loader/Loader";
import SingleRecipeCardSmall from "./SingleRecipeCardSmall";

const TrendingSmall = ({ recipes, setRecipes, loader, header, small }) => {
  console.log(header);
  return (
    <section className="">
      <Header title={"Trending Recipes"} path={"/recipes"} header={header} />
      <Loader />
      <div className={classes.recipesContainerSmall}>
        <SingleRecipeCardSmall
          recipes={recipes}
          setRecipes={setRecipes}
          small={small}
        />
      </div>
    </section>
  );
};

export default TrendingSmall;
