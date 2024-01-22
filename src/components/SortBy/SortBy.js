import React, { useState } from "react";
import classes from "./SortBy.module.css";

const SortBy = ({ handleSortChange }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedSort, setSelectedSort] = useState("A to Z");

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleSortChangeAndClose = (value) => {
    setSelectedSort(value);
    // handleSortChange(value);
    setShowOptions(false);
  };

  return (
    <section className={classes.display}>
      <h6 className={classes.sortTitle}>Sort by:</h6>
      <section className={classes.mainContainer}>
        <div className={classes.sortByContainer}>
          <div className={classes.sortByHeader} onClick={handleToggleOptions}>
            <div className={classes.selector}>{selectedSort} </div>
          </div>

          {showOptions && (
            <div className={classes.optionsContainer}>
              <label>
                <input
                  className={classes.inputSort}
                  type="radio"
                  value="A to Z"
                  checked={selectedSort === "A to Z"}
                  onChange={() => handleSortChangeAndClose("A to Z")}
                />
                A to Z
              </label>

              <label>
                <input
                  className={classes.inputSort}
                  type="radio"
                  value="Relevance"
                  checked={selectedSort === "Relevance"}
                  onChange={() => handleSortChangeAndClose("Relevance")}
                />
                Relevance
              </label>

              <label>
                <input
                  className={classes.inputSort}
                  type="radio"
                  value="Newest"
                  checked={selectedSort === "Newest"}
                  onChange={() => handleSortChangeAndClose("Newest")}
                />
                Newest
              </label>

              <label>
                <input
                  className={classes.inputSort}
                  type="radio"
                  value="TopRated"
                  checked={selectedSort === "TopRated"}
                  onChange={() => handleSortChangeAndClose("TopRated")}
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
