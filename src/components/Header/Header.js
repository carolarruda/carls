import { Link } from "react-router-dom";

import classes from "./Header.module.css";

const Header = ({ title, path, sort }) => {
  return (
    <div className={classes.headerContainer}>
      <h3 className={classes.header}>{title}</h3>
      {!sort && (
        <Link
          className={classes.viewMore}
          to={{ pathname: `${path}` }}
          reloadDocument
        >
          View more
        </Link>
      )}
    </div>
  );
};

export default Header;
