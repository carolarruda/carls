/* eslint-disable no-unused-vars */
import * as React from "react";

import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../../App";
import classes from "./PublicRecipes.module.css";
import { useMediaQuery } from "@mui/material";
import Avatar from "../Avatar/Avatar";
import { Sorter } from "../../App";

const SingleRecipeCard = ({ recipes, setRecipes }) => {
  const [searchRecipe, setSearchRecipe] = useContext(SearchContext);
  const [isLiked, setIsLiked] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState("");

  const [sort, setSort] = useContext(Sorter);

  const renderStars = (recipe) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`${classes.ProductRatingStar} ${
            i <= recipe.rating
              ? classes.ProductRatingStarFilled
              : classes.ProductRatingStarFilledTwo
          }`}
        >
          {i <= recipe.rating ? "★" : "★"}
        </span>
      );
    }
    return stars;
  };

  const likeRecipe = (id) => {
    const likedRecipe = recipes.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          liked: !item.liked,
        };
      } else {
        return item;
      }
    });

    setRecipes(likedRecipe);

    const isRecipeLiked =
      likedRecipe.find((item) => item.id === id)?.liked || false;
    setIsLiked(isRecipeLiked);

    const url = `https://node-mysql-api-0zxf.onrender.com/recipes/${id}`;

    if (isLiked) {
      const dislike = {
        liked: false,
      };

      const optLike = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dislike),
      };

      fetch(url, optLike).then((response) => response.json());
    } else {
      const LikedRecipe = {
        liked: true,
      };

      const optLike = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(LikedRecipe),
      };
      fetch(url, optLike).then((response) => response.json());
    }
  };

  const isPhone = useMediaQuery("(max-width:1200px)");

  if (!Array.isArray(recipes) || !recipes.sort) {
    return null;
  }

  let sortedRecipes;

  switch (sort) {
    case "A to Z":
      sortedRecipes = recipes.sort((a, b) =>
        a.title.trim().charAt(0).localeCompare(b.title.trim().charAt(0))
      );
      break;
    case "Top Rated":
      sortedRecipes = recipes.sort((a, b) => b.rating - a.rating);
      break;
    case "Newest":
      sortedRecipes = recipes.sort((a, b) => b.id - a.id);
      break;
    case "Relevance":
      sortedRecipes = recipes.sort((a, b) => b.id - a.id);
      break;
    default:
      sortedRecipes = recipes.sort((a, b) => b.rating - a.rating);
  }

  let filteredRecipes;

  if (searchRecipe !== "") {
    filteredRecipes = recipes.filter((recipe) => {
      const titleMatch = recipe.title
        .toLowerCase()
        .includes(searchRecipe.toLowerCase());

      const ingredientsMatch = recipe.ingredients
        .toLowerCase()
        .split(";")
        .some((ingredient) => ingredient.includes(searchRecipe.toLowerCase()));

      const courseTypeMatch = recipe.courseType
        .toLowerCase()
        .includes(searchRecipe.toLowerCase());

      const creatorFirstLastMatch =
        recipe.user.profile.firstName
          .toLowerCase()
          .includes(searchRecipe.toLowerCase()) ||
        recipe.user.profile.lastName
          .toLowerCase()
          .includes(searchRecipe.toLowerCase());

      return (
        titleMatch ||
        ingredientsMatch ||
        courseTypeMatch ||
        creatorFirstLastMatch
      );
    });
  } else {
    filteredRecipes = recipes;
  }

  return sortedRecipes.map((recipe, index) => {
    let title;

    if (recipe.title.trim().length > 30) {
      title = `${recipe.title.trim().slice(0, 30)}...`;
    } else if (recipe.title.trim().length === 30) {
      title = recipe.title.trim().slice(0, 30);
    } else {
      title = recipe.title.trim();
    }

    return (
      <Link
        to={`${recipe.id}/${recipe.title.toLowerCase().replace(/\s/g, "-")}`}
        key={index}
        selectedRecipe={selectedRecipe}
        style={{ textDecoration: "none", color: "#212121" }}
      >
        <div className={classes.recipeCard}>
          <img
            src={recipe.imageUrl}
            alt="food1"
            className={classes.recipeImg}
          />
          <div className={classes.recipeInfo}>
            {renderStars(recipe)}
            <h4 className={classes.recipeName}>
              {!isPhone ? recipe.title.trim() : title}
            </h4>
            {!isPhone && (
              <Avatar
                photo={recipe.user.avatar ? recipe.user.avatar : ""}
                name={`${recipe.user.profile.firstName} ${recipe.user.profile.lastName}`}
              />
            )}
          </div>
        </div>
      </Link>
    );
  });
};

export default SingleRecipeCard;
