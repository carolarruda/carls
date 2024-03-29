import classes from "../Trending.module.css";
import Header from "../../Header/Header";
import Loader from "../../Loader/Loader";
import SingleCardRecent from "./SingleCardRecent";

const Recent = ({ recipes, setRecipes, loader, header, small }) => {
  console.log(header);
  return (
    <section style={{marginTop: "1.5rem"}}>
      <Header title={"Trending Recipes"} path={"/recipes"} header={header} />
      <Loader />
      <div className={classes.recipesContainerLateralRecent}>
        <SingleCardRecent
          recipes={recipes}
          setRecipes={setRecipes}
          small={small}
        />
      </div>
    </section>
  );
};

export default Recent;
