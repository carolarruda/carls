import Loader from "../Loader/Loader";
import classes from "./RecipeDetails.module.css";
import LoadingButton from "@mui/lab/LoadingButton";
import EditIcon from "@mui/icons-material/Edit";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Bookmark from "../icons/Bookmark";
import Comment from "../icons/Comment";
import Calendar from "../icons/Calendar";
import RecipeAuthor from "../icons/RecipeAutor";
import BookmarkBig from "../icons/BookmarkBig";
import Share from "../icons/Share";
import Print from "../icons/Print";
import Box from "../icons/Box";
import Trending from "../Trending Recipes/Trending";

const RecipeDetails = ({ recipes, setRecipes }) => {
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState({});
  const [servings, setServings] = useState("");
  const nav = useNavigate();
  const handleEdit = (card) => {
    nav(`/edit/${params.id}/${params.title.toLowerCase().replace(/\s/g, "-")}`);
  };

  const params = useParams();

  const handleServingsChange = (increment) => {
    const newServings = servings + increment;
    if (newServings > 0) {
      setServings(newServings);
    }
  };

  useEffect(() => {
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
          onClick={() => handleEdit(params.id)}
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
          <div
            style={{ paddingRight: "70px", borderRight: "solid 1px #EBEBEB" }}
          >
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
              {recipe.ingredients?.split(";").map((ingredient) => (
                <li className={classes.SingleIngredient}>
                  <Box />

                  <p>{ingredient}</p>
                </li>
              ))}
            </ul>
            <div className={classes.ingredientsTitleContainer}>
              <h3 className={classes.ingredientsTitle}>Instructions:</h3>
            </div>
            <ul className={classes.instructionList}>
              {recipe.instructions?.split(";").map((ingredient, index) => (
                <li className={classes.SingleInstruction}>
                  <div className={classes.boxWithNumber}>
                    <p>{index + 1}</p>
                  </div>

                  <p>{ingredient}</p>
                </li>
              ))}
            </ul>
            <hr className={classes.commentHr} />
            <h3 className={classes.rateRecipeTitle}>
              Rate this recipe and share your opinion
            </h3>
            <textarea
              className={classes.commentInput}
              placeholder="Type here..."
            ></textarea>{" "}
            <div className={classes.postButtonContainer}>
              <LoadingButton
                size="small"
                style={{
                  backgroundColor: "rgba(181, 93, 81, 0.97)",
                  width: "100px",
                  height: "44px",
                  borderRadius: "8px",
                  marginTop: "16px",
                }}
                // onClick={handleEdit}
                loading={loading}
                loadingPosition="start"
                variant="contained"
                type="submit"
              >
                <span style={{ fontSize: "12px" }}>Post</span>
              </LoadingButton>
            </div>
            <h3 className={classes.headerForOtherRecipes}>
              You might like this
            </h3>
            <div className={classes.otherContainer}>
              <Trending
                small={true}
                recipes={recipes}
                setRecipes={setRecipes}
                header={false}
              />
            </div>
          </div>
        </div>

        <div></div>
      </div>

      <Loader />
    </section>
  );
};

export default RecipeDetails;
