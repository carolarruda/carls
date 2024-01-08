import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TextField } from "@mui/material";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import classes from "./Form.module.css";

const RecipeAdd = ({ setRecipes, setRecipesP, update }) => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [rating, setRating] = useState("");
  const [courseType, setCourseType] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [servings, setServings] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [notes, setNotes] = useState("");
  const token = localStorage.getItem("token");

  const navigate = useNavigate();
  const params = useParams();

  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
  };

  useEffect(() => {
    const fetchInitialValue = () => {
      fetch(`https://node-mysql-api-0zxf.onrender.com/recipes/${params.id}`)
        .then((response) => response.json())
        .then((data) => {
          setTitle(data.data.recipe.title || "");
          setImageUrl(data.data.recipe.imageUrl || "");
          setRating(data.data.recipe.rating || 0);
          setCourseType(data.data.recipe.courseType || "");
          setPrepTime(data.data.recipe.prepTime || 0);
          setCookTime(data.data.recipe.cookTime || 0);
          setServings(data.data.recipe.servings || 0);
          setIngredients(data.data.recipe.ingredients || "");
          setInstructions(data.data.recipe.instructions || "");
          setNotes(data.data.recipe.notes || "");
        })
        .catch((error) => {
          console.error("Error fetching initial value:", error);
        });
    };
    if (update) {
      fetchInitialValue();
    }
  }, [params.id, update]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "rating") {
      setRating(Number(value));
    } else {
      switch (name) {
        case "title":
          setTitle(value);
          break;
        case "imageUrl":
          setImageUrl(value);
          break;
        case "courseType":
          setCourseType(value);
          break;
        case "prepTime":
          setPrepTime(Number(value));
          break;
        case "cookTime":
          setCookTime(Number(value));
          break;
        case "servings":
          setServings(Number(value));
          break;
        case "ingredients":
          setIngredients(value);
          break;
        case "instructions":
          setInstructions(value);
          break;
        case "notes":
          setNotes(value);
          break;
        default:
          break;
      }
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    const newRecipe = {
      title,
      imageUrl,
      rating,
      courseType,
      prepTime,
      cookTime,
      servings,
      ingredients,
      instructions,
      notes,
    };

    const opts = {
      method: update ? "PATCH" : "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newRecipe),
    };

    fetch(
      update
        ? `https://node-mysql-api-0zxf.onrender.com/recipes/${params.id}`
        : `https://node-mysql-api-0zxf.onrender.com/recipes`,
      opts
    )
      .then((res) => res.json())
      .then((data) => {
        fetch(`https://node-mysql-api-0zxf.onrender.com/recipes`)
          .then((res) => res.json())
          .then((data) => {
            setRecipes(data.data.recipes);
            const opts = {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            };
            fetch(
              `https://node-mysql-api-0zxf.onrender.com/recipes/personal`,
              opts
            )
              .then((res) => res.json())
              .then((data) => setRecipesP(data.data.recipes));
            navigate("/myrecipes");
          });
      });
  }

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div>
      <section>
        <div className={classes.bigContainer}>
          <form className={classes.recipeForm} onSubmit={handleSubmit}>
            <div>
              <div className={classes.segment}>
                <TextField
                  margin="normal"
                  width="50px"
                  InputLabelProps={{
                    shrink: true,
                    style: { fontSize: "14px" },
                  }}
                  type="text"
                  label="Recipe Title"
                  name="title"
                  value={title}
                  onChange={handleInputChange}
                />
              </div>
              <div className={classes.segment}>
                <TextField
                  margin="normal"
                  width="50px"
                  InputLabelProps={{
                    shrink: true,
                    style: { fontSize: "15px" },
                  }}
                  type="text"
                  label="Image url"
                  name="imageUrl"
                  value={imageUrl}
                  onChange={handleInputChange}
                />
              </div>

              <div className={classes.inline}>
                <label htmlFor="rating">Star Rating</label>
                <div className={classes.rating}>
                  <input
                    type="radio"
                    id="star5"
                    name="rating"
                    value="5"
                    onChange={handleInputChange}
                    checked={rating === 5}
                  />
                  <label htmlFor="star5"></label>
                  <input
                    type="radio"
                    id="star4"
                    name="rating"
                    value="4"
                    onChange={handleInputChange}
                    checked={rating === 4}
                  />
                  <label htmlFor="star4"></label>
                  <input
                    type="radio"
                    id="star3"
                    name="rating"
                    value="3"
                    onChange={handleInputChange}
                    checked={rating === 3}
                  />
                  <label htmlFor="star3"></label>
                  <input
                    type="radio"
                    id="star2"
                    name="rating"
                    value="2"
                    onChange={handleInputChange}
                    checked={rating === 2}
                  />
                  <label htmlFor="star2"></label>
                  <input
                    type="radio"
                    id="star1"
                    name="rating"
                    value="1"
                    onChange={handleInputChange}
                    checked={rating === 1}
                  />
                  <label htmlFor="star1"></label>
                </div>
              </div>
              <div className={classes.segment}>
                <FormControl>
                  <InputLabel htmlFor="courses" shrink={courseType !== ""}>
                    Course
                  </InputLabel>
                  <Select
                    defaultValue={"DEFAULT"}
                    name="courseType"
                    id="courses"
                    style={{ fontSize: "15px" }}
                    onChange={handleInputChange}
                    value={courseType}
                    MenuProps={{
                      style: { minHeight: "500px" },
                    }}
                  >
                    <MenuItem
                      value="DEFAULT"
                      disabled
                      style={{ fontSize: "10px" }}
                    >
                      Choose course
                    </MenuItem>
                    <MenuItem value="entree" style={{ fontSize: "10px" }}>
                      Entree
                    </MenuItem>
                    <MenuItem value="main" style={{ fontSize: "10px" }}>
                      Main
                    </MenuItem>
                    <MenuItem value="dessert" style={{ fontSize: "10px" }}>
                      Dessert
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className={classes.segment}>
                <TextField
                  label="Prep Time (mins)"
                  type="number"
                  name="prepTime"
                  onChange={handleInputChange}
                  value={prepTime}
                />
              </div>
              <div className={classes.prep}>
                <TextField
                  label="Cook Time (mins)"
                  type="number"
                  name="cookTime"
                  onChange={handleInputChange}
                  value={cookTime}
                />
              </div>
              <div className={classes.prep}>
                <TextField
                  label="Servings"
                  name="servings"
                  type="number"
                  onChange={handleInputChange}
                  value={servings}
                />
              </div>
            </div>

            <div className={classes.addMargin}>
              <TextField
                label="Ingredients"
                type="text"
                name="ingredients"
                multiline
                minRows={22.4}
                onChange={handleInputChange}
                value={ingredients}
              />
            </div>

            <div className={classes.addMargin}>
              <TextField
                label="Instructions"
                type="text"
                name="instructions"
                multiline
                minRows={22.4}
                onChange={handleInputChange}
                value={instructions}
              />
            </div>

            <div className={classes.addMargin}>
              <TextField
                label="Notes"
                type="text"
                name="notes"
                multiline
                minRows={10.4}
                onChange={handleInputChange}
                value={notes}
              />
            </div>
            <div className={`${classes.segment} ${classes.buttons}`}>
              <LoadingButton
                size="small"
                color="primary"
                onSubmit={handleClick}
                loading={loading}
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="contained"
                type="submit"
              >
                <span>Save</span>
              </LoadingButton>
              <Button variant="outlined" onClick={handleCancel}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default RecipeAdd;
