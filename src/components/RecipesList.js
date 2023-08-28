import Nav from "./Nav";
import StickyFooter from "./FooterTwo";
import { useEffect, useState } from "react";

const RecipesList = ({publicRecipes, setPublicRecipes}) => {


  return (
    <div>
      <Nav />
      <section className="grid">
        {publicRecipes.length >0 && publicRecipes.map((recipe) => {
          return <div> {recipe.title}</div>;
        })}
      </section>
      <StickyFooter />
    </div>
  );
};

export default RecipesList;
