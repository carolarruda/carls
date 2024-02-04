/* eslint-disable no-unused-vars */
import React, { useState, useContext, useRef, useEffect } from "react";
import classes from "./SortBy.module.css";
import { Sorter } from "../../App";

const SortBy = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedSort, setSelectedSort] = useState("A to Z");

  const [sort, setSort] = useContext(Sorter);

  const containerRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleSortChangeAndClose = (value) => {
    setSelectedSort(value);
    setSort(value);
    setShowOptions(false);
  };

  return (
    <section className={classes.display}>
      <h6 className={classes.sortTitle}>Sort by:</h6>
      <section className={classes.mainContainer}>
        <div className={classes.sortByContainer} ref={containerRef}>
          <div className={classes.sortByHeader} onClick={handleToggleOptions}>
            <div className={classes.selector}>{selectedSort} </div>
          </div>

          {showOptions && (
            <div className={classes.optionsContainer}>
              <label className={classes.label}>
                <input
                  className={classes.inputSort}
                  type="radio"
                  value="A to Z"
                  checked={selectedSort === "A to Z"}
                  onChange={() => handleSortChangeAndClose("A to Z")}
                />
                A to Z
              </label>
              <label className={classes.label}>
                {" "}
                <input
                  className={classes.inputSort}
                  type="radio"
                  value="Relevance"
                  checked={selectedSort === "Relevance"}
                  onChange={() => handleSortChangeAndClose("Relevance")}
                />
                Relevance
              </label>

              <label className={classes.label}>
                {" "}
                <input
                  className={classes.inputSort}
                  type="radio"
                  value="Newest"
                  checked={selectedSort === "Newest"}
                  onChange={() => handleSortChangeAndClose("Newest")}
                />
                Newest
              </label>

              <label className={classes.label}>
       
                <input
                  className={classes.inputSort}
                  type="radio"
                  value="TopRated"
                  checked={selectedSort === "TopRated"}
                  onChange={() => handleSortChangeAndClose("Top Rated")}
                />
                Top Rated
              </label>

            </div>
          )}
        </div>
      </section>
    </section>
  );
};

export default SortBy;

   