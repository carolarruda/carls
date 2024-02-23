import classes from "./RelatedRecipe.module.css";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import SingleCardRelated from "./SingleCardRelated";

const RelatedRecipes = ({ recipes, setRecipes, loader, header, small }) => {
  console.log(header);
  return (
    <section style={{marginTop: "20px"}}>
      <Header title={"Trending Recipes"} path={"/recipes"} header={header} />
      <Loader />
      <div className={classes.recipesContainerLateralRecent}>
        <SingleCardRelated
          recipes={recipes}
          setRecipes={setRecipes}
          small={small}
        />
      </div>
    </section>
  );
};

export default RelatedRecipes;
