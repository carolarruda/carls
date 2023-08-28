import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import RecipeAdd from "./components/RecipeAdd";
import React, { useEffect, useState } from "react";
import MenuPopupState from "./components/AccountMenu";
import RecipesList from "./components/RecipesList"



export const Context = React.createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState();
  const [publicRecipes, setPublicRecipes]= useState('')
  

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  
  

  useEffect(() => {
    if (token) {
      setLoggedIn(true);

        fetch(`http://localhost:4000/recipes`)
          .then((res) => res.json())
          .then((data) => {
            setPublicRecipes(data.data);
          })
          .catch((error) => console.error("Error fetching recipes:", error));
    }
  }, [token]);

  return (
    <Context.Provider value={[loggedIn, setLoggedIn]}>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/test" element={<MenuPopupState users={users}/>} />
          <Route path="/login" element={<Login setUsers={setUsers} users={users} setLoggedIn={setLoggedIn}/>} />
          <Route path="/home" element={<Home users={users} setLoggedIn={setLoggedIn}/>} />
          <Route path="/add" element={<RecipeAdd />} />
          <Route path="/recipes" element={<RecipesList publicRecipes={publicRecipes} setPublicRecipes={setPublicRecipes}/>} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
