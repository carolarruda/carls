/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./NewRecipe.module.css";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import Trash from "../icons/Trash";
import { useMediaQuery } from "@mui/material";

const RecipeForm = ({ setRecipes, update, setRecipesP }) => {
  const [ingredientLine, setIngredientLine] = useState(2);
  const [instructionLine, setInstructionLine] = useState(2);
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [rating, setRating] = useState("");
  const [courseType, setCourseType] = useState([]);
  const [cookTimeHours, setCookTimeHours] = useState("");
  const [cookTimeMinutes, setCookTimeMinutes] = useState("");
  const [prepTimeHours, setPrepTimeHours] = useState("");
  const [prepTimeMinutes, setPrepTimeMinutes] = useState("");
  const [servings, setServings] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [description, setDescription] = useState("");
  const token = localStorage.getItem("token");
  const [length, setLength] = useState(0);

  const tagButtons = [
    "Desserts",
    "CheesecakeRecipe",
    "FoodBlog",
    "Baking",
    "Main",
    "Appetizers",
    "Fryed",
    "Healthy",
    "Chocolate",
    "Asian",
    "Thai",
    "Chinese",
    "Portuguese",
    "American",
    "Caramel",
    "FoodPorn",
    "foodinspiration",
    "instafood",
    "delicious",
    "foodie",
  ];

  const isPhone = useMediaQuery("(max-width:450px)");

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    let isMounted = true;

    const fetchInitialValue = () => {
      fetch(`https://node-mysql-api-0zxf.onrender.com/recipes/${params.id}`)
        .then((response) => response.json())
        .then((data) => {
          if (isMounted) {
            setTitle(data.data.recipe.title || "");
            setImageUrl(data.data.recipe.imageUrl || "");
            setRating(data.data.recipe.rating || 0);

            const prepTimeInHours = Math.floor(data.data.recipe.prepTime / 60);
            const prepTimeInMinutes = data.data.recipe.prepTime % 60;
            const cookTimeInHours = Math.floor(data.data.recipe.cookTime / 60);
            const cookTimeInMinutes = data.data.recipe.cookTime % 60;
            setPrepTimeHours(prepTimeInHours || 0);
            setPrepTimeMinutes(prepTimeInMinutes || 0);
            setCookTimeHours(cookTimeInHours || 0);
            setCookTimeMinutes(cookTimeInMinutes || 0);
            setServings(data.data.recipe.servings || 0);
            setLength(data.data.recipe.description.length);
            setCourseType(data.data.recipe.courseType || []);
            setIngredients(
              modifyIngredientStringToArray(data.data.recipe.ingredients) || []
            );
            setInstructions(
              modifyInstructionStringToArray(data.data.recipe.instructions) ||
                []
            );
            setDescription(data.data.recipe.description);
          }
        })
        .catch((error) => {
          console.error("Error fetching initial value:", error);
        });
    };
    if (update) {
      fetchInitialValue();

      return () => {
        isMounted = false;
      };
    }
  }, [params, update]);

  const modifyIngredientStringToArray = (ingredientString) => {
    const ingredientsArray = ingredientString.map((ingredient) =>
      ingredient.trim()
    );
    setIngredientLine(ingredientsArray.length);
    return ingredientsArray;
  };

  const modifyInstructionStringToArray = (instructionString) => {
    const InstructionArray = instructionString.map((instruction) =>
      instruction.trim()
    );
    setInstructionLine(InstructionArray.length);
    return InstructionArray;
  };

  const addIngredient = (e) => {
    e.preventDefault();
    setIngredientLine(ingredientLine + 1);
    setIngredients([...ingredients, ""]);
  };

  const deleteLine = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
    setIngredientLine(newIngredients.length);
  };
  const deleteLineInstructionButton = (index) => {
    const newInstructions = [...instructions];
    newInstructions.splice(index, 1);
    setInstructions(newInstructions);
    setInstructionLine(newInstructions.length);
  };

  const handleTagClick = (tag) => {
    const index = courseType.indexOf(tag);
    if (index === -1) {
      setCourseType([...courseType, tag]);
    } else {
      const newActiveTags = [...courseType];
      newActiveTags.splice(index, 1);
      setCourseType(newActiveTags);
    }
  };

  function ingredientTotalLines(ingredientLine) {
    let lines = [];
    for (let i = 0; i < ingredientLine; i++) {
      lines.push(
        <React.Fragment key={`ingredient-${i}`}>
          <textarea
            rows={
              !isPhone
                ? `${Math.max(
                    1,
                    Math.ceil((ingredients[i]?.length || 0) / 117)
                  )}`
                : `${Math.max(
                    1,
                    Math.ceil((ingredients[i]?.length || 0) / 33)
                  )}`
            }
            type="text"
            className={`${classes.titleInput} ${classes.marginMultipleInputs} ${classes.textarea}`}
            placeholder="Add ingredients"
            name="ingredients"
            value={ingredients[i] || ""}
            onChange={(e) => handleIngredientChange(e, i)}
          />
          <div
            className={classes.trashIcon}
            key={i}
            onClick={() => deleteLine(i)}
          >
            <Trash className={classes.deleteLineButton} />
          </div>
        </React.Fragment>
      );
    }
    return lines;
  }

  const addInstruction = (e) => {
    e.preventDefault();
    setInstructionLine(instructionLine + 1);
    setInstructions([...instructions, ""]);
  };

  function instrunctionTotalLines(instructionLine) {
    let lines = [];
    for (let i = 0; i < instructionLine; i++) {
      lines.push(
        <React.Fragment key={`instruction-${i}`}>
          {" "}
          <textarea
            rows={
              !isPhone
                ? `${Math.max(
                    1,
                    Math.ceil((instructions[i]?.length || 0) / 117)
                  )}`
                : `${Math.max(
                    1,
                    Math.ceil((instructions[i]?.length || 0) / 33)
                  )}`
            }
            className={`${classes.titleInput} ${classes.marginMultipleInputs} ${classes.textarea}`}
            placeholder="Write Instruction"
            name="instructions"
            value={instructions[i] || ""}
            onChange={(e) => handleInstructionChange(e, i)}
          />
          <div
            className={classes.trashIcon}
            onClick={() => deleteLineInstructionButton(i)}
          >
            <Trash className={classes.deleteLineInstructionButton} />
          </div>
        </React.Fragment>
      );
    }
    return lines;
  }

  const handleIngredientChange = (e, index) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = e.target.value;
    setIngredients(newIngredients);
  };
  const handleInstructionChange = (e, index) => {
    const newInstructions = [...instructions];
    newInstructions[index] = e.target.value;
    setInstructions(newInstructions);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "rating") {
      setRating(value || 0);
    } else {
      switch (name) {
        case "title":
          setTitle(value);
          break;
        case "imageUrl":
          setImageUrl(value);
          break;

        case "cookTimeHours":
          setCookTimeHours(value || 0);
          break;
        case "cookTimeMinutes":
          setCookTimeMinutes(value || 0);
          break;
        case "prepTimeHours":
          setPrepTimeHours(value || 0);
          break;
        case "prepTimeMinutes":
          setPrepTimeMinutes(value || 0);
          break;
        case "servings":
          setServings(Number(value) || 0);
          break;
        case "description":
          const truncatedValue = value.slice(0, 200);
          setDescription(truncatedValue);
          setLength(truncatedValue.length);
          break;

        default:
          break;
      }
    }
  };

  const submit = (e) => {
    e.preventDefault();

    const newRecipe = {
      title,
      imageUrl,
      rating: 0,
      prepTime: Number(prepTimeHours) * 60 + Number(prepTimeMinutes),
      cookTime: Number(cookTimeHours) * 60 + Number(cookTimeMinutes),
      servings,
      courseType,
      ingredients: ingredients,
      instructions: instructions,
      description: description,
    };

    console.log("new Recipe", newRecipe);

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
  };

  return (
    <>
      <form className={classes.form} onSubmit={submit}>
        <div className={classes.title}>
          <h3 className={classes.recipeAdd}>Create new recipe</h3>
          <LoadingButton
            size="small"
            style={{
              backgroundColor: "rgba(181, 93, 81, 0.97)",
              width: "100px",
              height: "44px",
              borderRadius: "8px",
            }}
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="contained"
            type="submit"
          >
            <span>Save</span>
          </LoadingButton>
        </div>
        <div className={classes.inputSection}>
          <label className={classes.formLabel}>Recipe Title:</label>
          <input
            type="text"
            className={classes.titleInput}
            placeholder="Enter Your Recipe name"
            name="title"
            required
            value={title}
            onChange={handleInputChange}
          />
        </div>
        <div className={classes.inputSection}>
          <label className={classes.formLabel}>Recipe Image:</label>
          {/* <div className={classes.imageUpload}>
            <h6 className={classes.formLabel}>Upload Your Recipe Image</h6>
            <label htmlFor="filePicker" className={classes.imageUploadButton}>
              + Upload
            </label>
            <input id="filePicker" style={{ display: "none" }} type={"file"} />

            <p className={classes.infoUpload}>
              Max file size 20 MB I Supports: JPG, PNG, webp
            </p>
          </div> */}
          <input
            type="text"
            className={classes.titleInput}
            placeholder="Enter Your Recipe Image url"
            name="imageUrl"
            value={imageUrl}
            onChange={handleInputChange}
          />
        </div>
        <div className={classes.inputSection}>
          <label className={classes.formLabel}>Description:</label>
          <textarea
            rows={
              !isPhone
                ? `${Math.max(1, Math.ceil((description?.length || 0) / 117))}`
                : `${Math.max(1, Math.ceil((description?.length || 0) / 33))}`
            }
            type="text"
            className={`${classes.titleInput} ${classes.marginMultipleInputs} ${classes.textarea}`}
            placeholder="Introduce your recipe"
            name="description"
            value={description}
            onChange={handleInputChange}
          />
          <p className={classes.maxCharacteres}>{length}/200</p>
        </div>
        <div className={classes.inputSection}>
          <label className={classes.formLabel}>Ingredients:</label>

          {ingredientTotalLines(ingredientLine)}
          <div>
            <button onClick={addIngredient} className={classes.addIngredient}>
              + Header
            </button>
          </div>
        </div>
        <div className={classes.inputSection}>
          <label className={classes.formLabel}>Instructions:</label>

          {instrunctionTotalLines(instructionLine)}
          <div>
            <button onClick={addInstruction} className={classes.addIngredient}>
              + Header
            </button>
          </div>
        </div>

        <div className={classes.inputSection}>
          <label className={classes.formLabel}>Servings:</label>
          <input
            type="text"
            className={`${classes.titleInput} ${classes.marginFix}`}
            placeholder="#"
            required
            name="servings"
            value={servings}
            onChange={handleInputChange}
          />
          <p className={classes.portions}>
            How many portions does this recipe make ?
          </p>
        </div>

        <div className={classes.inputSection}>
          <label className={`${classes.formLabel} ${classes.correctMargin}`}>
            Tags:
          </label>
          <div className={classes.tagsContainer}>
            {tagButtons.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`${classes.tagButton} ${
                  courseType.includes(tag) ? classes.activeTag : ""
                }`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className={`${classes.inputSection}`}>
          <label className={classes.formLabel}>Prep Time:</label>
          <div className={classes.times}>
            <input
              type="text"
              className={`${classes.parts} ${classes} `}
              placeholder="Hours"
              name="prepTimeHours"
              value={prepTimeHours}
              onChange={handleInputChange}
            />
            <input
              type="text"
              className={`${classes.parts} ${classes}`}
              placeholder="Minutes"
              name="prepTimeMinutes"
              value={prepTimeMinutes}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <p className={classes.portions}>
          How long does it take to prepare this recipe?{" "}
        </p>
        <div className={`${classes.inputSection} ${classes.addMargin}`}>
          <label className={classes.formLabel}>Cooking Time:</label>
          <div className={classes.times}>
            <input
              type="text"
              className={`${classes.parts} ${classes} `}
              placeholder="Hours"
              name="cookTimeHours"
              value={cookTimeHours}
              onChange={handleInputChange}
            />
            <input
              type="text"
              className={`${classes.parts} ${classes}`}
              placeholder="Minutes"
              name="cookTimeMinutes"
              value={cookTimeMinutes}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <p className={classes.portions}>
          How long does it take to cook this recipe?{" "}
        </p>
      </form>
    </>
  );
};

export default RecipeForm;
