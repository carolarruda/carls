import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import classes from './RecipeDetails.module.css'

const RecipeDetails = () => {
    return(
        <section className="section-wrapper">
        <Header title={"Recipes"} path={"/recipes"} sort={true}/>
        <Loader/>
        <div className={classes.recipesContainer}>

        </div>
      </section>
    )
}

export default RecipeDetails