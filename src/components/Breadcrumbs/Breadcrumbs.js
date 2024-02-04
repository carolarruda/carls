import React from "react";
import { Link } from "react-router-dom";
import classes from "./Breadcrumbs.module.css";
import { useParams } from "react-router-dom";

const Breadcrumbs = ({ path }) => {
  const params = useParams();
  const renderBreadcrumbs = () => {
    const pathElements = path.split(" > ");
    const totalCrumbCount = pathElements.length;

    if (pathElements[2] === "Recipe Name") {
      pathElements[2] = params.title
        .replace(/-/g, " ")
        .replace(/\b\w/g, (match) => match.toUpperCase());
    }
    return pathElements.map((crumb, index) => {
      let crumbPath = "";
      if (crumb === "Home") {
        crumbPath = "/";
      } else if (crumb === "Recipes") {
        crumbPath = `/${crumb.toLowerCase()}`;
      } else {
      }

      return (
        <section
          className={`${classes.breadcrumbs} ${
            index === 0 ? classes.firstCrumb : ""
          } ${index === totalCrumbCount - 1 ? classes.lastCrumb : ""}`}
          key={index}
        >
          {index > 0 && <span style={{ color: "#878787" }}> > </span>}
          <Link
            className={`${classes.breadcrumbs} ${
              index === 0 ? classes.firstCrumb : ""
            } ${index === totalCrumbCount - 1 ? classes.lastCrumb : ""}`}
            style={{ color: "inherit", textDecoration: "inherit"  }}
            to={crumbPath}
          >
            <span
              style={
                index === totalCrumbCount - 1
                  ? { color: "black" }
                  : { color: "#878787" }
              }
            >
              {crumb}
            </span>
          </Link>
        </section>
      );
    });
  };

  return <section className="section-wrapper">{renderBreadcrumbs()}</section>;
};

export default Breadcrumbs;
