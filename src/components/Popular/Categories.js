import breakfast from "../images/categories/breakfast.jpg";
import lunch from "../images/categories/lunch.jpg";
import dinner from "../images/categories/dinner.jpg";
import appetizer from "../images/categories/appetizer.jpg";
import salad from "../images/categories/salad.jpg";
import pizza from "../images/categories/pizza.jpg";
import smoothie from "../images/categories/smoothie.jpg";
import pasta from "../images/categories/pasta.jpg";
import classes from "./Popular.module.css";

const Categories = () => {
  const categories = [
    { categorie: "Breakfast recipes", thumbnail: breakfast },
    { categorie: "Lunch recipes", thumbnail: lunch },
    { categorie: "Dinner recipes", thumbnail: dinner },
    { categorie: "Appetizer recipes", thumbnail: appetizer },
    { categorie: "Salad recipes", thumbnail: salad },
    { categorie: "Pizza recipes", thumbnail: pizza },
    { categorie: "Smoothie recipes", thumbnail: smoothie },
    { categorie: "Pasta recipes", thumbnail: pasta },
  ];
  return categories.map((categorie) => (
    <div className={classes.categorie}>
      <img src={categorie.thumbnail} alt={categorie.categorie} />
      <p className={classes.categorieTitle}>{categorie.categorie}</p>
    </div>
  ));
};

export default Categories;
