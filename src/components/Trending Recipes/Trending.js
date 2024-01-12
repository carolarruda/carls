import classes from "./Trending.module.css";
import SingleRecipeCard from "./SingleRecipeCard";
import Header from "../Header/Header";

const Trending = ({ recipes, setRecipes }) => {
  return (
    <section className="section-wrapper">
      <Header title={"Trending Recipes"} path={"/recipes"}/>
      <div>
        <SingleRecipeCard recipes={recipes} setRecipes={setRecipes} />
      </div>
    </section>
  );
};

export default Trending;
