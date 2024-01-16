import classes from "./Trending.module.css";
import Avatar from "../Avatar/Avatar";

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

  if (!Array.isArray(recipes) || !recipes.sort) {
    console.error("Invalid recipes array");
    return null;
  }

  const sortedRecipes = recipes.sort((a, b) => b.rating - a.rating).slice(0, 6);

  return sortedRecipes.map((recipe) => (
    <div>
      <img src={recipe.imageUrl} alt="food1" className={classes.recipeImg} />
      <div className={classes.recipeInfo}>
        {renderStars(recipe)}
        <h4 className={classes.recipeName}>{recipe.title}</h4>
        <Avatar photo={recipe.user.avatar} name={"Carolina Arruda"} />
      </div>
    </div>
  ));
};

export default SingleRecipeCard;
