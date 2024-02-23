import classes from "../Trending.module.css";
import Header from "../../Header/Header";
import Loader from "../../Loader/Loader";
import SingleCardLateral from "./SingleCardLateral";

const TrendingLateral = ({ recipes, setRecipes, loader, header, small }) => {
  console.log(header);
  return (
    <section style={{ marginTop: "1.5rem" }}>
      <Header title={"Trending Recipes"} path={"/recipes"} header={header} />
      <Loader />
      <div className={classes.recipesContainerLateral}>
        <SingleCardLateral
          recipes={recipes}
          setRecipes={setRecipes}
          small={small}
        />
      </div>
    </section>
  );
};

export default TrendingLateral;
