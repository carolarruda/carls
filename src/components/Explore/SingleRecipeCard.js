import classes from "./Explore.module.css";
import Avatar from "../Avatar/Avatar";
import { useMediaQuery } from "@mui/material";

const SingleRecipeCard = ({ recipes, setRecipes }) => {
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
    console.error("Invalid recipes array");
    return null;
  }

  const sortedRecipes = recipes.sort((a, b) => a.rating - b.rating).slice(0, 6);

  return sortedRecipes.map((recipe) => (
    <div className={classes.recipeCard}>
      <img src={recipe.imageUrl} alt="food1" className={classes.recipeImg} />
      <div className={classes.recipeInfo}>
        {renderStars(recipe)}
        <h4 className={classes.recipeName}>{recipe.title}</h4>
        {!isPhone && (
          <Avatar
            photo={recipe.user.avatar ? recipe.user.avatar : ""}
            name={`${recipe.user.profile.firstName} ${recipe.user.profile.lastName}`}
          />
        )}
      </div>
    </div>
  ));
};

export default SingleRecipeCard;
