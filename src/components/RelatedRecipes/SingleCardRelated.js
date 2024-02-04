import classes from "./RelatedRecipe.module.css";
import Avatar from "../Avatar/Avatar";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

const SingleCardRelated = ({ recipes, setRecipes, small }) => {


  const isPhone = useMediaQuery("(max-width:1200px)");

  if (!Array.isArray(recipes) || !recipes.sort) {
    return null;
  }

  const trendingRecipes = recipes.sort((a, b) => b.id - a.id).slice(0, 6);

  return trendingRecipes.map((recipe, index) => {
    let title;

    if (recipe.title.trim().length > 30) {
      title = `${recipe.title.trim().slice(0, 30)}...`;
    } else if (recipe.title.trim().length === 30) {
      title = recipe.title.trim().slice(0, 30);
    } else {
      title = recipe.title.trim();
    }

    return (
      <Link
        to={`/recipes/${recipe.id}/${recipe.title.replace(/\s+/g, "-")}`}
        key={index}
        style={{ textDecoration: "none", color: "#212121" }}
      >
        <div className={classes.recipeCardLateralRelated}>
          <img
            src={recipe.imageUrl}
            alt="food1"
            className={`${classes.recipeImgLateral}`}
          />
          <div className={classes.recipeInfo}>
            <h4
              className={
                !small
                  ? `${classes.recipeName}`
                  : `${classes.smallTitleLateral}`
              }
            >
              {title}{" "}
            </h4>

            {!isPhone && !small && (
              <Avatar
                photo={recipe.user.avatar ? recipe.user.avatar : ""}
                name={`${recipe.user.profile.firstName} ${recipe.user.profile.lastName}`}
              />
            )}
          </div>
        </div>
      </Link>
    );
  });
};

export default SingleCardRelated;
