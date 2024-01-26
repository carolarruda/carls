import { useState } from "react";
import classes from "./NewRecipe.module.css";

const RecipeForm = () => {
  const [ingredientLine, setIngredientLine] = useState(2);
  const [instructionLine, setInstructionLine] = useState(2);
  const submit = (e) => {
    e.preventDefault();
  };

  const addIngredient = (e) => {
    setIngredientLine(ingredientLine + 1);
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
        />
      );
    }
    return lines;
  }
  const addInstruction = (e) => {
    setInstructionLine(instructionLine + 1);
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
        />
      );
    }
    return lines;
  }

  return (
    <form className={classes.form} onSubmit={submit}>
      <div className={classes.inputSection}>
        <label className={classes.formLabel}>Recipe Title:</label>
        <input
          type="text"
          className={classes.titleInput}
          placeholder="Enter Your Recipe name"
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
        />
        <p className={classes.maxCharacteres}>0/100</p>
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
    </form>
  );
};

export default RecipeForm;
