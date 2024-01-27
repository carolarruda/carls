import { Link } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";

import classes from "./Header.module.css";
import SortBy from "../SortBy/SortBy";
import { useState, useEffect } from "react";
import SaveIcon from "@mui/icons-material/Save";

const Header = ({ title, path, sort, recipeAdd }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
  };
  return (
    <div className={classes.headerContainer}>
      <h3 className={!recipeAdd ? `${classes.header}` : `${classes.recipeAdd}`}>
        {title}
      </h3>
      {!sort && !recipeAdd && (
        <Link
          className={classes.viewMore}
          to={{ pathname: `${path}` }}
          reloadDocument
        >
          View more
        </Link>
      )}
      {sort && <SortBy />}
      {/* {recipeAdd && (
        <>

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
        </>
      )} */}
    </div>
  );
};

export default Header;
