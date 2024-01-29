import Loader from "../Loader/Loader";
import classes from "./RecipeDetails.module.css";
import LoadingButton from "@mui/lab/LoadingButton";
import EditIcon from '@mui/icons-material/Edit';import { useState } from "react";


const RecipeDetails = () => {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
      setLoading(true);
    };

  return (
    <section className="section-wrapper">
      <div className={classes.headerContainer}>
        <h3 className={classes.header}>Black Bean & Corn Quesadillas</h3>
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
      <Loader />
      <div className={classes.recipesContainer}></div>
    </section>
  );
};

export default RecipeDetails;
