import classes from "./Trending.module.css";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import { Suspense, lazy } from "react";



const Lazyrecipes = lazy(() => (import("./SingleRecipeCard")));

const Trending = ({ recipes, setRecipes, loader }) => {
  return (
    <section className="section-wrapper">
      <Header title={"Trending Recipes"} path={"/recipes"} />

      <Suspense fallback={<Loader />}>
        <div className={classes.recipesContainer}>
          <Lazyrecipes recipes={recipes} setRecipes={setRecipes} />
        </div>
      </Suspense>
    </section>
  );
};

export default Trending;
