import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import classes from "./NewRecipe.module.css";
import CheckedBox from "../icons/CheckedBox";
import Box from "../icons/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";

const RecipeForm = ({ setRecipes, update }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
  };

  const [ingredientLine, setIngredientLine] = useState(2);
  const [instructionLine, setInstructionLine] = useState(2);

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [rating, setRating] = useState("");
  const [courseType, setCourseType] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [servings, setServings] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [notes, setNotes] = useState("");
  const token = localStorage.getItem("token");
  const [length, setLength] = useState(0);

  const [showOptions, setShowOptions] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Cuisine");

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
    console.log(showOptions);
  };

  const handleSortChangeAndClose = (value) => {
    setSelectedSort(value);
    setShowOptions(false);
  };

  const navigate = useNavigate();
  const params = useParams();

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
          setIngredients(data.data.recipe.ingredients || []);
          setInstructions(data.data.recipe.instructions || []);
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

  const addIngredient = (e) => {
    setIngredientLine(ingredientLine + 1);
    setIngredients([...ingredients, ""]);
  };

  function ingredientTotalLines(ingredientLine) {
    let lines = [];
    for (let i = 0; i < ingredientLine; i++) {
      lines.push(
        <input
          key={i}
          type="text"
          className={`${classes.titleInput} ${classes.marginMultipleInputs}`}
          placeholder="Add ingredients"
          name="ingredients"
          value={ingredients[i]}
          onChange={(e) => handleIngredientChange(e, i)}
        />
      );
    }
    return lines;
  }

  const addInstruction = (e) => {
    setInstructionLine(instructionLine + 1);
    setInstructions([...instructions, ""]);
  };

  function instrunctionTotalLines(instructionLine) {
    let lines = [];
    for (let i = 0; i < instructionLine; i++) {
      lines.push(
        <input
          key={i}
          type="text"
          className={`${classes.titleInput} ${classes.marginMultipleInputs}`}
          placeholder="Write Instruction"
          name="instructions"
          value={instructions[i]}
          onChange={(e) => handleInstructionChange(e, i)}
        />
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
        case "description":
          const truncatedValue = value.slice(0, 100);
          setNotes(truncatedValue);
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
      rating,
      courseType,
      prepTime,
      cookTime,
      servings,
      ingredients: ingredients.join(";"),
      instructions: instructions.join(";"),
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
            onSubmit={handleClick}
            loading={loading}
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
            value={title}
            onChange={handleInputChange}
          />
        </div>
        <div className={classes.inputSection}>
          <label className={classes.formLabel}>Recipe Image:</label>
          <div className={classes.imageUpload}>
            <h6 className={classes.formLabel}>Upload Your Recipe Image</h6>
            <label htmlFor="filePicker" className={classes.imageUploadButton}>
              + Upload
            </label>
            <input id="filePicker" style={{ display: "none" }} type={"file"} />

            <p className={classes.infoUpload}>
              Max file size 20 MB I Supports: JPG, PNG, webp
            </p>
          </div>
        </div>
        <div className={classes.inputSection}>
          <label className={classes.formLabel}>Description:</label>
          <input
            type="text"
            className={`${classes.titleInput} ${classes.marginFix}`}
            placeholder="Introduce your recipe"
            name="notes"
            value={notes}
            onChange={handleInputChange}
          />
          <p className={classes.maxCharacteres}>{length}/100</p>
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
          <label className={classes.formLabel}>Instructions::</label>

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
            name="servings"
            value={servings}
            onChange={handleInputChange}
          />
          <p className={classes.portions}>
            How many portions does this recipe make ?
          </p>
        </div>
        <div className={`${classes.inputSection}`}>
          <label className={classes.formLabel}>Cooking Time:</label>
          <div className={classes.times}>
            <input
              type="text"
              className={`${classes.parts} ${classes} `}
              placeholder="Hours"
            />
            <input
              type="text"
              className={`${classes.parts} ${classes}`}
              placeholder="Minutes"
            />
          </div>
        </div>
        <p className={classes.portions}>
          How long does it take to cook this recipe?{" "}
        </p>
        <div className={`${classes.inputSection} ${classes.addMargin}`}>
          <label className={classes.formLabel}>Prep Time:</label>
          <div className={classes.times}>
            <input
              type="text"
              className={`${classes.parts} ${classes} `}
              placeholder="Hours"
            />
            <input
              type="text"
              className={`${classes.parts} ${classes}`}
              placeholder="Minutes"
            />
          </div>
        </div>
        <p className={classes.portions}>
          How long does it take to prepare this recipe?{" "}
        </p>

        <div className={`${classes.inputSection} ${classes.addMargin}`}>
          <label className={`${classes.formLabel} ${classes.correctMargin}`}>
            Cuisine:
          </label>
          <div className={classes.times}>
            <section className={classes.mainContainer}>
              <div className={classes.sortByContainer}>
                <div
                  className={classes.sortByHeader}
                  onClick={handleToggleOptions}
                >
                  <div className={classes.selector}>{selectedSort} </div>
                </div>

                {showOptions && (
                  <div className={classes.optionsContainer}>
                    <label className={classes.label}>
                      <input
                        className={classes.inputSort}
                        type="radio"
                        value="Chinese"
                        checked={selectedSort === "Chinese"}
                        onChange={() => handleSortChangeAndClose("Chinese")}
                      />
                      Chinese{" "}
                      {selectedSort === "Chinese" ? <CheckedBox /> : <Box />}{" "}
                    </label>
                    <label className={classes.label}>
                      {" "}
                      <input
                        className={classes.inputSort}
                        type="radio"
                        value="Italian"
                        checked={selectedSort === "Italian"}
                        onChange={() => handleSortChangeAndClose("Italian")}
                      />
                      Italian{" "}
                      {selectedSort === "Italian" ? <CheckedBox /> : <Box />}{" "}
                    </label>

                    <label className={classes.label}>
                      {" "}
                      <input
                        className={classes.inputSort}
                        type="radio"
                        value="Thai"
                        checked={selectedSort === "Thai"}
                        onChange={() => handleSortChangeAndClose("Thai")}
                      />
                      Thai {selectedSort === "Thai" ? <CheckedBox /> : <Box />}{" "}
                    </label>

                    <label className={classes.label}>
                      <input
                        className={classes.inputSort}
                        type="radio"
                        value="Portuguese"
                        checked={selectedSort === "Portuguese"}
                        onChange={() => handleSortChangeAndClose("Portuguese")}
                      />
                      Portuguese{" "}
                      {selectedSort === "Portuguese" ? <CheckedBox /> : <Box />}{" "}
                    </label>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </form>
    </>
  );
};

export default RecipeForm;
