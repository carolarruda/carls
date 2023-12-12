import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/NavBar/Nav";
import LandingPage from "./components/pages/LandingPage";
import RecipesPage from "./components/pages/RecipesPage";
import RecipeAdd from "./components/RecipeAdd";
import Blog from "./components/Blog";
import React, { useEffect, useState, lazy, Suspense } from "react";
import RecipeView from "./components/RecipeView";
import AccountSettings from "./components/AccountSettings";
import RecipeUpdate from "./components/RecipeUpdate";
import BlogPage from "./components/pages/BlogPage";
import { useNavigate } from "react-router-dom";

export const Context = React.createContext();

const LazyMyRecipes = lazy(() => import("./components/MyRecipes"));
const LazySignUp = lazy(() => import("./components/SignUp"));
const LazyLogin = lazy(() => import("./components/Login"));

function App() {
  const [searchRecipe, setSearchRecipe] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState();
  const [recipes, setRecipes] = useState("");
  const [recipesP, setRecipesP] = useState("");
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      setLoggedIn(true);
      const opts = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      fetch(`https://node-mysql-api-0zxf.onrender.com/recipes/personal`, opts)
        .then((res) => res.json())
        .then((data) => {
          setRecipesP(data.data.recipes);
        })
        .catch((error) =>
          console.error("Error fetching personal recipes:", error)
        );
      fetch(`https://node-mysql-api-0zxf.onrender.com/users/${userId}`, opts)
        .then((res) => res.json())
        .then((data) => {
          setUser(data.data.user);
        })
        .catch((error) => console.error("Error fetching user:", error));
    } else {
      setLoggedIn(false);
    }

    fetch(`https://node-mysql-api-0zxf.onrender.com/recipes`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.data);
      })
      .catch((error) => console.error("Error fetching recipes:", error));
    const opts = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }, [token, userId]);

  useEffect(() => {}, [token]);

  const handleDelete = (id) => {
    setRecipes(filteredRecipes);

    const opts = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "DELETE",
    };
    return fetch(
      `https://node-mysql-api-0zxf.onrender.com/recipes/${id}`,
      opts
    ).then((response) => {
      response.json();
      navigate(0);
    });
    // .then(() => {
    //   const opts = {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   };
    //   fetch(`https://node-mysql-api-0zxf.onrender.com/recipes/personal`, opts)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setRecipesP(data.data.recipes);
    //     });
    // });
  };

  const [search, setSearch] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  return (
    <Context.Provider value={[loggedIn, setLoggedIn]}>
      <SearchContext.Provider value={[searchRecipe, setSearchRecipe]}>
        <div className="App">
          <Routes>
            <Route
              path="/sign"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <LazySignUp />
                </Suspense>
              }
            />

            <Route
              path="/login"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyLogin
                    setUsers={setUsers}
                    users={users}
                    setLoggedIn={setLoggedIn}
                  />
                </Suspense>
              }
            />

            <Route path="/" element={<Nav />}>
              <Route
                index
                users={users}
                setLoggedIn={setLoggedIn}
                search={search}
                setSearch={setSearch}
                element={<LandingPage />}
              />
            </Route>
            <Route
              path="/add"
              element={
                <RecipeAdd
                  recipes={recipes}
                  setRecipes={setRecipes}
                  recipesP={recipesP}
                  setRecipesP={setRecipesP}
                  search={search}
                  setSearch={setSearch}
                />
              }
            />
            <Route
              path="/edit/:id"
              element={
                <RecipeUpdate
                  recipes={recipes}
                  setRecipes={setRecipes}
                  recipesP={recipesP}
                  setRecipesP={setRecipesP}
                  search={search}
                  setSearch={setSearch}
                />
              }
            />
            <Route
              path="/recipes/:id"
              element={<RecipeView recipes={recipes} setRecipes={setRecipes} />}
            />
            <Route
              path="/settings"
              element={
                <AccountSettings
                  user={user}
                  search={search}
                  setSearch={setSearch}
                />
              }
            />

            <Route path="/recipes" element={<Nav />}>
              <Route
                index
                element={
                  <RecipesPage
                    setSearch={setSearch}
                    search={search}
                    recipes={recipes}
                    setRecipes={setRecipes}
                    handleDelete={handleDelete}
                    user={user}
                  />
                }
              />
            </Route>
            <Route path="/blog" element={<Nav />}>
              <Route index element={<BlogPage />} />
            </Route>

            <Route
              path="/myrecipes"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyMyRecipes
                    setSearch={setSearch}
                    search={search}
                    recipesP={recipesP}
                    setRecipesP={setRecipesP}
                    setRecipes={setRecipes}
                    handleDelete={handleDelete}
                  />
                </Suspense>
              }
            />
            <Route
              path="/myrecipes/:id"
              element={<RecipeView recipes={recipes} setRecipes={setRecipes} />}
            />
          </Routes>
        </div>
      </SearchContext.Provider>
    </Context.Provider>
  );
}

export default App;

export const SearchContext = React.createContext();
