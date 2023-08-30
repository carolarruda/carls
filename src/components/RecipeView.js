import Nav from "./Nav";
import StickyFooter from "./FooterTwo";
import { useParams } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailIcon from "@mui/icons-material/Mail";
import { useEffect, useState } from "react";

const RecipeView = ({ search, setSearch, recipes, setRecipes }) => {
  const [decoration, setDecoration] = useState("");
  const [recipe, setRecipe] = useState([]);

  const params = useParams();

  const handleDecor = (index) => {
    setDecoration((prevDecorations) => ({
      ...prevDecorations,
      [index]: !prevDecorations[index],
    }));
  };

  const [servings, setServings] = useState("");

  useEffect(() => {
    fetch(`http://localhost:4000/recipes/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data.data.recipe);
        setServings(data.data.recipe.servings);
      })
      .catch((error) => console.error("Error fetching recipe:", error));
  }, []);

  const handleServingsChange = (increment) => {
    const newServings = servings + increment;
    if (newServings > 0) {
      setServings(newServings);
    }
  };

  const calcTime = () => {
    const recipe = recipes.find((recipe) => recipe.id.toString() === params.id);

    if (!recipe) {
      return "";
    }

    if (recipe.prepTime === "" && recipe.cookTime === "") {
      return "";
    }

    let total = 0;

    total = recipe.prepTime + recipe.cookTime;

    return total;
  };

  return (
    <div>
      <Nav search={search} setSearch={setSearch} />
      {recipes.length !== 0 &&
        recipes.map((recipe, index) => {
          if (recipe.id.toString() === `${params.id}`) {
            return (
              <section className="recipe-view-main" key={`${recipe.id}`}>
                <div className="recipe-left">
                  <div>
                    <img
                      src={recipe.imageUrl}
                      alt={recipe.title}
                      className="recipe-img-rv"
                    />
                    <div className="ingredients-rc">
                      <h2>Ingredients</h2>
                      <div className="servings-rv">
                        <button
                          className="servings-button"
                          onClick={() => handleServingsChange(-1)}
                        >
                          -
                        </button>
                        <p className="number-servings-rc">{servings}</p>
                        <button
                          className="servings-button"
                          onClick={() => handleServingsChange(1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="ingredients-list-rc">
                      {recipe.ingredients.split("\n").map((line, index) => {
                        if (line.length > 0) {
                          const parts = line.match(
                            /(\d+(?:[\s/_.\d]+)?)\s*(.+)/
                          );
                          if (parts) {
                            let numericPart = parts[1];
                            if (isNaN(numericPart)) {
                              const [numerator, denominator] = numericPart
                                .split("/")
                                .map(Number);

                              if (denominator !== 0) {
                                numericPart = numerator / denominator;
                              }
                            }

                            const textPart = parts[2];
                            return (
                              <div key={index} className="p-tag-ingredient">
                                <span className="numeric-part">
                                  {!isNaN(numericPart)
                                    ? (
                                        (numericPart * servings) /
                                        recipe.servings
                                      ).toFixed(
                                        ((numericPart * servings) /
                                          recipe.servings) %
                                          1 ===
                                          0
                                          ? 0
                                          : 2
                                      )
                                    : numericPart}
                                </span>{" "}
                                <p>{textPart}</p>
                              </div>
                            );
                          } else {
                            return (
                              <div key={index} className="p-tag-ingredient">
                                <span className="numeric-part"></span>
                                <p key={index} className="p-tag-ingredient">
                                  {line}
                                </p>
                              </div>
                            );
                          }
                        }
                        return null;
                      })}
                    </div>
                  </div>
                </div>
                <div className="recipe-right">
                  <div>
                    <h1 className="recipe-title-rv">{recipe.title}</h1>
                  </div>
                  <div className="tags-rc">
                    <button className="course-type">{recipe.courseType}</button>
                    <div className="course-type icons">
                      <FacebookIcon />
                    </div>
                    <div className="course-type icons">
                      <PinterestIcon />
                    </div>
                    <div className="course-type icons">
                      <TwitterIcon />
                    </div>
                    <div className="course-type icons">
                      <MailIcon />
                    </div>
                  </div>
                  <div className="time-rc">
                    <div>
                      Total <span>{calcTime()}</span>
                    </div>
                    <div>
                      Prep <span>{recipe.prepTime}</span>
                    </div>
                    <div>
                      Cook <span>{recipe.cookTime}</span>
                    </div>
                  </div>
                  <div className="ingredients-rc">
                    <h2>Instructions</h2>
                  </div>
                  <div>
                    {recipe.instructions.split("\n").map(
                      (line, index) =>
                        line.length > 0 && (
                          <p className="p-tag-instructions" key={index}>
                            <button className="servings-button">
                              {index + 1}
                            </button>
                            <span
                              className={decoration[index] ? "decor" : ""}
                              onClick={() => handleDecor(index)}
                            >
                              {line}
                            </span>
                          </p>
                        )
                    )}
                  </div>
                  <div></div>
                </div>
              </section>
            );
          } else {
            return null;
          }
        })}

      <StickyFooter />
    </div>
  );
};

export default RecipeView;
