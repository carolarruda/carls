import React from "react";
import { Link } from "react-router-dom";
import classes from "./Breadcrumbs.module.css";

const Breadcrumbs = ({ path }) => {
  const renderBreadcrumbs = () => {
    const pathElements = path.split(" > ");
    const totalCrumbCount = pathElements.length;

    return pathElements.map((crumb, index) => (
      <section
        className={`${classes.breadcrumbs} ${
          index === 0 ? classes.firstCrumb : ""
        } ${index === totalCrumbCount - 1 ? classes.lastCrumb : ""}`}
        key={index}
      >
        {index > 0 && <span style={{color: "#878787"}}> > </span>}
        <Link
          style={{ color: "inherit", textDecoration: "inherit" }}
          to={crumb === "Home" ? "/" : `/${crumb.toLowerCase()}`}
        >
          <span
            style={index === totalCrumbCount - 1 ? { color: "black" } : {color: "#878787"}}
          >
            {crumb}
          </span>
        </Link>
      </section>
    ));
  };

  return <section className="section-wrapper">{renderBreadcrumbs()}</section>;
};

export default Breadcrumbs;
