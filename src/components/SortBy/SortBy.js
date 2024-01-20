import React, { useState } from "react";
import classes from './SortBy.module.css'

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
    <div className={classes.sortByContainer}>
      <div className={classes.sortByHeader} onClick={handleToggleOptions}>
        <h6>Sort by:</h6>
        <div className={classes.selector}>{selectedSort} </div>
      </div>

      {showOptions && (
        <div className={classes.optionsContainer}>
          <label>
            <input
              type="radio"
              value="A to Z"
              checked={selectedSort === "A to Z"}
              onChange={() => handleSortChangeAndClose("A to Z")}
            />
            A to Z
          </label>

          <label>
            <input
              type="radio"
              value="Relevance"
              checked={selectedSort === "Relevance"}
              onChange={() => handleSortChangeAndClose("Relevance")}
            />
            Relevance
          </label>

          <label>
            <input
              type="radio"
              value="Newest"
              checked={selectedSort === "Newest"}
              onChange={() => handleSortChangeAndClose("Newest")}
            />
            Newest
          </label>

          <label>
            <input
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
  );
};

export default SortBy;
