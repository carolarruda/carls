import Loader from "../Loader/Loader";
import classes from "./RecipeDetails.module.css";
import LoadingButton from "@mui/lab/LoadingButton";
import EditIcon from "@mui/icons-material/Edit";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Bookmark from "../icons/Bookmark";
import Comment from "../icons/Comment";
import Calendar from "../icons/Calendar";
import RecipeAuthor from "../icons/RecipeAutor";
import BookmarkBig from "../icons/BookmarkBig";
import Share from "../icons/Share";
import Print from "../icons/Print";
import Box from "../icons/Box";

const RecipeDetails = () => {
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState({});
  const [servings, setServings] = useState("");

  const handleClick = () => {
    setLoading(true);
  };

  const params = useParams();

  const handleServingsChange = (increment) => {
    const newServings = servings + increment;
    if (newServings > 0) {
      setServings(newServings);
    }
  };

  useEffect(() => {
    console.log("entering fetch");
    fetch(`https://node-mysql-api-0zxf.onrender.com/recipes/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data.data.recipe);

        setServings(data.data.recipe.servings);
      })
      .catch((error) => console.error("Error fetching recipe:", error));
  }, [params.id]);

  console.log(recipe);

  const inputTimestamp = recipe.createdAt;
  const date = new Date(inputTimestamp);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = date.getDate();
  const monthAbbreviation = months[date.getMonth()];
  const year = date.getFullYear();

  const formattedDate = `${day} ${monthAbbreviation} ${year}`;

  return (
    <section className="section-wrapper">
      <div className={classes.headerContainer}>
        <h3 className={classes.header}>{recipe.title}</h3>
        <LoadingButton
          size="small"
          style={{
            backgroundColor: "rgba(181, 93, 81, 0.97)",
            width: "100px",
            height: "44px",
            borderRadius: "8px",
          }}
          onSubmit={handleClick}
          loading={loading}
          loadingPosition="start"
          startIcon={<EditIcon />}
          variant="contained"
          type="submit"
        >
          <span>Edit</span>
        </LoadingButton>
      </div>

      <div className={classes.recipeContainer}>
        <div className={classes.infoContainer}>
          <div className={classes.infoContainerBox}>
            <RecipeAuthor />
            <p>
              {recipe.user?.profile?.firstName} {recipe.user?.profile?.lastName}
            </p>
          </div>
          <div className={classes.infoContainerBox}>
            <Calendar />
            <p>{formattedDate}</p>
          </div>
          <div className={classes.infoContainerBox}>
            <Comment />
            <p>22 Comments</p>
          </div>
          <div className={classes.infoContainerBox}>
            <Bookmark />

            <p>9 Saves</p>
          </div>
        </div>
        <div className={classes.rightContainerBox}>
          <BookmarkBig />
          <Share />
        </div>
      </div>
      <hr className={classes.hr} />
      <div className={classes.recipeContainer}>
        <div>
          <img
            src={recipe.imageUrl}
            className={classes.recipeImg}
            alt={recipe.title}
          />
          <div className={classes.timesServingsContainer}>
            <div className={classes.timeBoxes}>
              <h6>Prep time:</h6>
              <span>{recipe.prepTime} mins</span>
            </div>
            <div className={classes.timeBoxes}>
              <h6>Cook time:</h6>
              <span>{recipe.cookTime} mins</span>
            </div>
            <div className={classes.timeBoxes}>
              <h6>Serving:</h6>
              <span>{recipe.servings} Servings</span>
            </div>
            <button className={classes.printButton}>
              <Print />
              <label>Print Recipe</label>
            </button>
          </div>
          <div style={{ marginRight: "70px" }}>
            {recipe.notes ? (
              <p className={classes.description}>{recipe.notes}</p>
            ) : (
              ""
            )}
            <div className={classes.ingredientsTitleContainer}>
              <h3 className={classes.ingredientsTitle}>Ingredients:</h3>
              <div className={classes.servingsRv}>
                <button
                  className={classes.servingsButton}
                  onClick={() => handleServingsChange(-1)}
                >
                  -
                </button>
                <p className={classes.numberServingsRc}>{servings} servings</p>
                <button
                  className={classes.servingsButton}
                  onClick={() => handleServingsChange(1)}
                >
                  +
                </button>
              </div>
            </div>
            <ul className={classes.ingredientList}>
              <li className={classes.SingleIngredient}>
                <Box />

                <p>1 x 15 oz can black beans</p>
              </li>
              <li>
                <Box />

                <p>1 x 15 oz can black beans</p>
              </li>
            </ul>
          </div>
        </div>

        <div></div>
      </div>

      <Loader />
    </section>
  );
};

export default RecipeDetails;
