import * as React from "react";

import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Nav from "./NavBar/Nav";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useContext } from "react";
import { SearchContext } from "../App";

const defaultTheme = createTheme();

export default function Album({ search, setSearch, recipes, setRecipes, user }) {
  const [searchRecipe, setSearchRecipe] = useContext(SearchContext);
  const [isLiked, setIsLiked] = useState("");

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

  let filteredRecipes;

  console.log(searchRecipe);

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

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main className="push-dow">
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={3}>
            {filteredRecipes.length > 0 &&
              filteredRecipes.map((card, index) => {
                return (
                  <Grid item key={card.id} xs={15} sm={6} md={4}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      }}
                    >
                      <Link
                        to={`${card.id}`}
                        style={{ textDecoration: "none", color: "#212121" }}
                      >
                        <CardMedia
                          component="div"
                          sx={{
                            // 16:9
                            pt: "60.25%",
                            paddingBottom: "0px",
                          }}
                          image={card.imageUrl}
                        />
                        <CardContent
                          sx={{
                            flexGrow: 1,
                            paddingBottom: "0px",
                          }}
                        >
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            sx={{
                              fontSize: "1.2rem",
                              display: "flex",
                              flexDirection: "column",
                              height: "3.6rem",
                              justifyContent: "space-between",
                              overflow: "hidden",
                            }}
                          >
                            {card.title}
                          </Typography>
                          <CardActions
                            sx={{
                              marginTop: "auto",
                              display: "grid",
                              justifyContent: "space-between",
                              alignContent: "center",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignContent: "center",
                                paddingBottom: "0px",
                              }}
                            >
                              <Avatar
                                sx={{
                                  width: 32,
                                  height: 32,
                                  backgroundColor: "#eeeeee",
                                  color: "#161a21",
                                  fontSize: "14px",
                                  marginBottom: "auto",
                                  marginRight: "8px",
                                }}
                              >
                                {card.user.profile.firstName[0]}
                                {card.user.profile.lastName[0]}
                              </Avatar>
                              <PersonAddIcon
                                sx={{
                                  display: "grid",
                                  width: 22,
                                  height: 22,
                                  backgroundColor: "#eeeeee",
                                  color: "#161a21",
                                  fontSize: "14px",
                                  marginBottom: "auto",
                                  borderRadius: "50%",
                                  marginLeft: "8px",
                                  alignSelf: "center",
                                  marginTop: "5px",
                                }}
                              />
                              <BookmarkIcon
                                sx={{
                                  width: 22,
                                  height: 22,
                                  backgroundColor: "#eeeeee",
                                  color: "#161a21",
                                  fontSize: "14px",
                                  marginBottom: "auto",
                                  marginLeft: "8px",
                                  borderRadius: "50%",
                                  marginTop: "5px",
                                }}
                              />
                            </div>
                          </CardActions>
                        </CardContent>
                      </Link>
                      <CardActions
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr 1fr",
                        }}
                      >
                        <Button size="small" sx={{ color: "#191d3a" }}>
                          Comment
                        </Button>
                        <Button size="small" sx={{ color: "#191d3a" }}>
                          Save
                        </Button>
                        <Button size="small" sx={{ color: "#191d3a" }}>
                          Like
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
