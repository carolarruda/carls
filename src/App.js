import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RecipeAdd from "./components/RecipeAdd";
import React, { useEffect, useState, lazy, Suspense } from "react";
import RecipeView from "./components/RecipeView";
import AccountSettings from "./components/AccountSettings";
import RecipeUpdate from "./components/RecipeUpdate";
import { useNavigate } from "react-router-dom";

export const Context = React.createContext();
const LazyAlbum = lazy(() => import("./components/Album"));
const LazyMyRecipes = lazy(() => import("./components/MyRecipes"));
const LazySignUp = lazy(() => import("./components/SignUp"));
const LazyLogin = lazy(() => import("./components/Login"));

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState();
  const [recipes, setRecipes] = useState("");
  const [recipesP, setRecipesP] = useState("");
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const [user, setuser] = useState("");
  const navigate = useNavigate()

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
    const opts = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(`http://localhost:4000/users/${userId}`, opts)
      .then((res) => res.json())
      .then((data) => {
        setuser(data.data.user);
      })
      .catch((error) => console.error("Error fetching user:", error));
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
    return fetch(`http://localhost:4000/recipes/${id}`, opts).then(
      (response) => {
        response.json();
        navigate(0);
      }
    );
    // .then(() => {
    //   const opts = {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   };
    //   fetch(`http://localhost:4000/recipes/personal`, opts)
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
      <div className="App">
        <Routes>
          <Route
            path="/"
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
          <Route
            path="/recipes"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LazyAlbum
                  setSearch={setSearch}
                  search={search}
                  className="main-container"
                  recipes={recipes}
                  setRecipes={setRecipes}
                  handleDelete={handleDelete}
                  user={user}
                />
              </Suspense>
            }
          />
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
    </Context.Provider>
  );
}

export default App;
