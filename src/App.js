import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import RecipeAdd from "./components/RecipeAdd";
import React, { useEffect, useState } from "react";
import MenuPopupState from "./components/AccountMenu";
import RecipesList from "./components/RecipesList";
import PersonalList from "./components/PersonalList";
import RecipeView from "./components/RecipeView";
import AccountSettings from "./components/AccountSettings";
import Album from "./components/Album";
import MyRecipes from "./components/MyRecipes";

export const Context = React.createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState();
  const [recipes, setRecipes] = useState("");
  const [recipesP, setRecipesP] = useState("");

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredCardTwo, setHoveredCardTwo] = useState(null);

  useEffect(() => {
    if (token) {
      setLoggedIn(true);
      const opts = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      fetch(`http://localhost:4000/recipes/personal`, opts)
        .then((res) => res.json())
        .then((data) => {
          setRecipesP(data.data.recipes);
        })
        .catch((error) =>
          console.error("Error fetching personal recipes:", error)
        );
    }

    fetch(`http://localhost:4000/recipes`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.data);
      })
      .catch((error) => console.error("Error fetching recipes:", error));
  }, [token]);

  const handleHoverIn = (index, isSecondCard) => {
    if (isSecondCard) {
      setHoveredCardTwo(index);
    } else {
      setHoveredCard(index);
    }
  };

  const handleHoverOut = (isSecondCard) => {
    if (isSecondCard) {
      setHoveredCardTwo(null);
    } else {
      setHoveredCard(null);
    }
  };

  const handleDelete = (id) => {
    // const filteredRecipes = recipes.filter((recipe) => {
    //   if (recipe.id !== id) {
    //     return recipe;
    //   }
    //   else {
    //     return null}
    // });
    // setRecipes(filteredRecipes);
    // const opts = {
    //   method: "DELETE",
    // };
    // return(
    //   fetch(`http://localhost:4000/recipes/${id}`, opts)
    //   .then((response) => response.json())
    //   .then(() => {
    //     fetch("http://localhost:4000/recipes")
    //       .then((res) => res.json())
    //       .then((data) => {
    //         setRecipes(data);
    //       });
    //   })
    // )
  };

  const [search, setSearch] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    if (searchTerm.length === 0) {
      setFilteredRecipes(recipes);
    } else {
      const filteredRecipes = recipes.filter((recipe) => {
        return recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilteredRecipes(filteredRecipes);
    }
    return null;
  };

  return (
    <Context.Provider value={[loggedIn, setLoggedIn]}>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignUp />} />

          <Route
            path="/login"
            element={
              <Login
                setUsers={setUsers}
                users={users}
                setLoggedIn={setLoggedIn}
              />
            }
          />
          <Route
            path="/home"
            element={
              <Home
                users={users}
                setLoggedIn={setLoggedIn}
                search={search}
                setSearch={setSearch}
              />
            }
          />
          <Route path="/add" element={<RecipeAdd />} />
          <Route
            path="/recipes/:id"
            element={<RecipeView recipes={recipes} setRecipes={setRecipes} />}
          />
          <Route path="/settings" element={<AccountSettings />} />
          <Route
            path="/recipes"
            element={
              <Album
                setSearch={setSearch}
                search={search}
                className="main-container"
                recipes={recipes}
                setRecipes={setRecipes}
                hoveredCard={hoveredCard}
                handleHoverIn={handleHoverIn}
                handleHoverOut={handleHoverOut}
                handleDelete={handleDelete}
              />
            }
          />
          <Route
            path="/myrecipes"
            element={
              <MyRecipes
                setSearch={setSearch}
                search={search}
                recipesP={recipesP}
                setRecipesP={setRecipesP}
              />
            }
          />
                    <Route
            path="/myrecipes/:id"
            element={<RecipeView recipes={recipes} setRecipes={setRecipes} />}
          />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
