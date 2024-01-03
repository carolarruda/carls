import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import classes from "./Form.module.css";

const RecipeAdd = ({ setRecipes, setRecipesP }) => {
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

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    imageUrl: "",
    rating: "",
    courseType: "",
    prepTime: "",
    cookTime: "",
    servings: "",
    ingredients: "",
    instructions: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = e.target.type === 'number' || e.target.type === 'radio' ? Number(value) : value;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: updatedValue,
    }));
  };

  const handleClick = () => {
    setLoading(true);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const newRecipe = { ...form };
    console.log(newRecipe);
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newRecipe),
    };

    fetch(`https://node-mysql-api-0zxf.onrender.com/recipes`, opts)
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
                required
                  margin="normal"
                  width="50px"
                  InputLabelProps={{
                    shrink: true,
                    style: { fontSize: "14px" },
                  }}
                  type="text"
                  label="Recipe Title"
                  name="title"
                  value={form.name}
                  onChange={handleChange}
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
                  value={form.name}
                  onChange={handleChange}
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
                    onChange={handleChange}
                    checked={rating === 5}
                  />
                  <label htmlFor="star5"></label>
                  <input
                    type="radio"
                    id="star4"
                    name="rating"
                    value="4"
                    onChange={handleChange}
                    checked={rating === 4}
                  />
                  <label htmlFor="star4"></label>
                  <input
                    type="radio"
                    id="star3"
                    name="rating"
                    value="3"
                    onChange={handleChange}
                    checked={rating === 3}
                  />
                  <label htmlFor="star3"></label>
                  <input
                    type="radio"
                    id="star2"
                    name="rating"
                    value="2"
                    onChange={handleChange}
                    checked={rating === 2}
                  />
                  <label htmlFor="star2"></label>
                  <input
                    type="radio"
                    id="star1"
                    name="rating"
                    value="1"
                    onChange={handleChange}
                    checked={rating === 1}
                  />
                  <label htmlFor="star1"></label>
                </div>
              </div>
              <div className={classes.segment}>
                <FormControl>
                  <InputLabel htmlFor="course">Course</InputLabel>
                  <Select
                    defaultValue={"DEFAULT"}
                    name="courseType"
                    id="course"
                    style={{ fontSize: "15px" }}
                    onChange={handleChange}
                    value={form.name}
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
                  onChange={handleChange}
                  value={form.name}
                />
              </div>
              <div className={classes.segment}>
                <TextField
                  label="Cook Time (mins)"
                  type="number"
                  name="cookTime"
                  onChange={handleChange}
                  value={form.name}
                />
              </div>
              <div className={classes.segment}>
                <TextField
                  label="Servings"
                  type="number"
                  name="servings"
                  onChange={handleChange}
                  value={form.name}
                />
              </div>
            </div>

            <div>
              <TextField
                label="Ingredients"
                type="text"
                multiline
                name="ingredients"
                minRows={22.4}
                onChange={handleChange}
                value={form.name}
              />
            </div>

            <div>
              <TextField
                label="Instructions"
                type="text"
                multiline
                minRows={22.4}
                name="instructions"
                onChange={handleChange}
                value={form.name}
              />
            </div>

            <div>
              <TextField
                label="Notes"
                type="text"
                multiline
                minRows={10.4}
                onChange={handleChange}
                name="notes"
                value={form.name}
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
