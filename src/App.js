import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/NavBar/Nav";
import LandingPage from "./components/pages/LandingPage";
import RecipesPage from "./components/pages/RecipesPage";
import React, { useEffect, useState } from "react";
import BlogPage from "./components/pages/BlogPage";
import { useNavigate } from "react-router-dom";
import AddRecipePage from "./components/pages/AddRecipePage";
import RecipeViewPage from "./components/pages/RecipeViewPage";
import PersonalRecipesPage from "./components/pages/PersonalRecipesPage";
import SignUp from "./components/Sign And Log/SignUp";
import Login from "./components/Sign And Log/Login";
import SeetingsPage from "./components/pages/SeetingsPage";
import { trackPromise } from "react-promise-tracker";

export const LoggedInUser = React.createContext();
export const User = React.createContext();
export const Sorter = React.createContext();

function App() {
  const [searchRecipe, setSearchRecipe] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState();
  const [recipes, setRecipes] = useState("");
  const [recipesP, setRecipesP] = useState("");
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const expireToken = localStorage.getItem("expiresIn");
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const [loader, setLoader] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    const timeNow = new Date();
    if (timeNow.toString() > expireToken) {
      localStorage.clear();
    }
    if (token) {
      setLoggedIn(true);
      const opts = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      setLoader(true);
      trackPromise(
        fetch(`https://node-mysql-api-0zxf.onrender.com/recipes/personal`, opts)
          .then((res) => res.json())
          .then((data) => {
            setRecipesP(data.data.recipes);
          })
          .catch((error) =>
            console.error("Error fetching personal recipes:", error)
          )
          .finally(() => {
            setLoader(false);
          })
      );

      trackPromise(
        fetch(`https://node-mysql-api-0zxf.onrender.com/users/${userId}`, opts)
          .then((res) => res.json())
          .then((data) => {
            setUser(data.data.user);
          })
          .catch((error) => console.error("Error fetching user:", error))
      );
    } else {
      setLoggedIn(false);
    }

    trackPromise(
      fetch(`https://node-mysql-api-0zxf.onrender.com/recipes`)
        .then((res) => res.json())
        .then((data) => {
          setRecipes(data.data);
        })
        .catch((error) => console.error("Error fetching recipes:", error))
    );
  }, [token, userId, expireToken]);

  const handleDelete = (id) => {
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

  const ProtectedRoute = ({ loggedIn, children }) => {
    if (!token) {
      return <Navigate to="/login" replace />;
    }

    return children;
  };

  return (
    <LoggedInUser.Provider value={[loggedIn, setLoggedIn]}>
      <User.Provider value={[user, setUser]}>
        <SearchContext.Provider value={[searchRecipe, setSearchRecipe]}>
          <Sorter.Provider value={[sort, setSort]}>
            <div className="App">
              <Routes>
                <Route path="/sign" element={<SignUp />} />

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

                <Route path="/" element={<Nav />}>
                  <Route
                    index
                    element={
                      <LandingPage
                        recipes={recipes}
                        setRecipes={setRecipes}
                        loader={loader}
                      />
                    }
                  />
                </Route>
                <Route path="/add" element={<Nav />}>
                  <Route
                    index
                    element={
                      <ProtectedRoute>
                        <AddRecipePage
                          recipes={recipes}
                          setRecipes={setRecipes}
                          recipesP={recipesP}
                          setRecipesP={setRecipesP}
                        />
                      </ProtectedRoute>
                    }
                  />
                </Route>

                <Route path="/edit/:id/:title" element={<Nav />}>
                  <Route
                    index
                    element={
                      <AddRecipePage
                        recipes={recipes}
                        setRecipes={setRecipes}
                        recipesP={recipesP}
                        setRecipesP={setRecipesP}
                        update={true}
                      />
                    }
                  />
                </Route>

                <Route path="/settings" element={<Nav />}>
                  <Route index element={<SeetingsPage user={user} />} />
                </Route>
                <Route path="/recipes/:id/:title" element={<Nav />}>
                  <Route
                    index
                    element={
                      <RecipeViewPage
                        recipes={recipes}
                        setRecipes={setRecipes}
                        handleDelete={handleDelete}
                        user={user}
                        path="Home > Recipes > Recipe Name"
                      />
                    }
                  />
                </Route>

                <Route path="/recipes" element={<Nav />}>
                  <Route
                    index
                    element={
                      <RecipesPage
                        path="Home > Recipes"
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

                <Route path="/myrecipes" element={<Nav />}>
                  <Route
                    index
                    element={
                      <PersonalRecipesPage
                        recipesP={recipesP}
                        setRecipesP={setRecipesP}
                        setRecipes={setRecipes}
                        handleDelete={handleDelete}
                      />
                    }
                  />
                </Route>
                <Route path="/myrecipes/:id/:title" element={<Nav />}>
                  <Route
                    index
                    element={
                      <RecipeViewPage
                        path="Home > My Recipes > Recipe Name"
                        recipes={recipes}
                        setRecipes={setRecipes}
                        handleDelete={handleDelete}
                        user={user}
                      />
                    }
                  />
                </Route>
              </Routes>
            </div>
          </Sorter.Provider>
        </SearchContext.Provider>
      </User.Provider>
    </LoggedInUser.Provider>
  );
}

export default App;

export const SearchContext = React.createContext();
