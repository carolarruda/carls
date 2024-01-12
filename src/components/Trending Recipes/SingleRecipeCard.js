import recipe1 from "../images/36700_erin_m_e1384569-a93f-4fde-a6ce-3e21b69b04fa 1.png";
import classes from "./Trending.module.css";

const SingleRecipeCard = ({ recipes, setRecipes }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`${classes.ProductRatingStar} ${
            i <= recipes.rating ? classes.ProductRatingStarFilled : ""
          }`}
        >
          {i <= recipes.rating ? "★" : "☆"}
        </span>
      );
    }
    return stars;
  };

  return (
    <div>
      <img src={recipe1} alt="food1" />
      <div className={classes.WeeklyFeaturedStarsContainer}>
        {renderStars()}
      </div>
      <h4>onion rings</h4>
      <div>
        
      </div>
    </div>
  );
};

export default SingleRecipeCard;
