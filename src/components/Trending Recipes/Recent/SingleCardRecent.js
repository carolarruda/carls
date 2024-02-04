import classes from "../Trending.module.css";
import Avatar from "../../Avatar/Avatar";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

const SingleCardRecent = ({ recipes, setRecipes, small }) => {
  const renderStars = (recipe) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`${classes.ProductRatingStar} ${
            i <= recipe.rating
              ? classes.ProductRatingStarFilled
              : classes.ProductRatingStarFilledTwo
          }`}
        >
          {i <= recipe.rating ? "★" : "★"}
        </span>
      );
    }
    return stars;
  };

  const isPhone = useMediaQuery("(max-width:1200px)");

  if (!Array.isArray(recipes) || !recipes.sort) {
    return null;
  }

  const trendingRecipes = recipes.sort((a, b) => b.id - a.id).slice(0, 3);

  return trendingRecipes.map((recipe, index) => (
    <Link
      to={`/recipes/${recipe.id}/${recipe.title.replace(/\s+/g, "-")}`}
      key={index}
      style={{ textDecoration: "none", color: "#212121" }}
    >
      <div className={classes.recipeCardLateral}>
        <img
          src={recipe.imageUrl}
          alt="food1"
          className={`${classes.recipeImgLateral}`}
        />
        <div className={classes.recipeInfo}>
          <h4
            className={
              !small ? `${classes.recipeName}` : `${classes.smallTitleLateral}`
            }
          >
            {recipe.title}
          </h4>
          {renderStars(recipe)}

          {!isPhone && !small && (
            <Avatar
              photo={recipe.user.avatar ? recipe.user.avatar : ""}
              name={`${recipe.user.profile.firstName} ${recipe.user.profile.lastName}`}
            />
          )}
        </div>
      </div>
    </Link>
  ));
};

export default SingleCardRecent;
