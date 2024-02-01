/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import SortBy from "../SortBy/SortBy";
import { useState } from "react";

const Header = ({ title, path, sort, recipeAdd, header }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
  };
  return (
    <div
      className={classes.headerContainer}
      style={!header ? { display: " none" } : {}}
    >
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
    </div>
  );
};

export default Header;
