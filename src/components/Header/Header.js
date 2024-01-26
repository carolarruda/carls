import { Link } from "react-router-dom";

import classes from "./Header.module.css";
import SortBy from "../SortBy/SortBy";

const Header = ({ title, path, sort, recipeAdd }) => {
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
      {recipeAdd && <button className={classes.signButtonHome}>Save </button>}
    </div>
  );
};

export default Header;
