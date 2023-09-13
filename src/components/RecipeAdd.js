import Nav from "./Nav";
import FooterTwo from "./FooterTwo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/old.css";
import { TextField } from "@mui/material";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";

const RecipeAdd = ({
  recipes,
  recipesP,
  setRecipes,
  setRecipesP,
  search,
  setSearch,
}) => {
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

  const handleClick = () => {
    setLoading(true);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handlePhoto = (e) => {
    setImageUrl(e.target.value);
  };

  const handleRating = (e) => {
    setRating(Number(e.target.value));
  };

  const handleCourse = (e) => {
    setCourseType(e.target.value);
  };

  const handlePrep = (e) => {
    if (e.target.value > 0) {
      setPrepTime(Number(e.target.value));
    }
  };

  const handleCook = (e) => {
    setCookTime(Number(e.target.value));
  };

  const handleServings = (e) => {
    setServings(Number(e.target.value));
  };

  const handleIngredients = (e) => {
    setIngredients(e.target.value);
  };

  const handleInstructions = (e) => {
    setInstructions(e.target.value);
  };

  const handleNotes = (e) => {
    setNotes(e.target.value);
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
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newRecipe),
    };

    fetch(`http://localhost:4000/recipes`, opts)
      .then((res) => res.json())
      .then((data) => {
        fetch(`http://localhost:4000/recipes`)
          .then((res) => res.json())
          .then((data) => {
            setRecipes(data.data.recipes);
            const opts = {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            };
            fetch(`http://localhost:4000/recipes/personal`, opts)
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
      <Nav search={search} setSearch={setSearch} />

      <section className="form-container">
        <div className="big-container" id="set-height">
          <form className="form-stack recipe-form" onSubmit={handleSubmit}>
            <div className="first-column">
              <div className="segment">
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
                  onChange={handleTitle}
                />
              </div>
              <div className="segment">
                <TextField
                  margin="normal"
                  width="50px"
                  InputLabelProps={{
                    shrink: true,
                    style: { fontSize: "15px" },
                  }}
                  type="text"
                  label="Image url"
                  name="title"
                  value={imageUrl}
                  onChange={handlePhoto}
                />
              </div>

              <div className="inline">
                <label htmlFor="rating">Star Rating</label>
                <div className="rating">
                  <input
                    type="radio"
                    id="star5"
                    name="rating"
                    value="5"
                    onChange={handleRating}
                    checked={rating === 5}
                  />
                  <label htmlFor="star5"></label>
                  <input
                    type="radio"
                    id="star4"
                    name="rating"
                    value="4"
                    onChange={handleRating}
                    checked={rating === 4}
                  />
                  <label htmlFor="star4"></label>
                  <input
                    type="radio"
                    id="star3"
                    name="rating"
                    value="3"
                    onChange={handleRating}
                    checked={rating === 3}
                  />
                  <label htmlFor="star3"></label>
                  <input
                    type="radio"
                    id="star2"
                    name="rating"
                    value="2"
                    onChange={handleRating}
                    checked={rating === 2}
                  />
                  <label htmlFor="star2"></label>
                  <input
                    type="radio"
                    id="star1"
                    name="rating"
                    value="1"
                    onChange={handleRating}
                    checked={rating === 1}
                  />
                  <label htmlFor="star1"></label>
                </div>
              </div>
              <div className="segment">
                <FormControl>
                  <InputLabel htmlFor="courses" shrink={courseType !== ""}>
                    Course
                  </InputLabel>
                  <Select
                    defaultValue={"DEFAULT"}
                    name="course"
                    id="courses"
                    style={{ fontSize: "15px" }}
                    onChange={handleCourse}
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
              <div className="segment prep">
                <TextField
                  label="Prep Time (mins)"
                  type="number"
                  onChange={handlePrep}
                  value={prepTime}
                />
              </div>
              <div className="segment prep">
                <TextField
                  label="Cook Time (mins)"
                  type="number"
                  onChange={handleCook}
                  value={cookTime}
                />
              </div>
              <div className="segment prep">
                <TextField
                  label="Servings"
                  type="number"
                  onChange={handleServings}
                  value={servings}
                />
              </div>
            </div>

            <div className="second-column segment add-margin">
              <TextField
                label="Ingredients"
                type="text"
                multiline
                minRows={22.4}
                onChange={handleIngredients}
                value={ingredients}
              />
            </div>

            <div className="third-column segment add-margin">
              <TextField
                label="Instructions"
                type="text"
                multiline
                minRows={22.4}
                onChange={handleInstructions}
                value={instructions}
              />
            </div>

            <div className="fourth-column segment add-margin">
              <TextField
                label="Notes"
                type="text"
                multiline
                minRows={10.4}
                onChange={handleNotes}
                value={notes}
              />
            </div>
            <div className="fifth-column segment">
              <LoadingButton
                size="small"
                color="primary"
                onClick={handleClick}
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
