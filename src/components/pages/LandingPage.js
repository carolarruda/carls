import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import classes from "../Hero/HeroAndInfo.module.css";
import Share from "../Share/Share";
import Trending from "../Trending Recipes/Trending";

const LandingPage = ({recipes, setRecipes}) => {
  return (
    <main className={classes.main}>
      <div className={classes.section}>
        <Hero />
        <Share />
        <Trending recipes={recipes} setRecipes={setRecipes} />
      </div>
      <Footer />
    </main>
  );
};

export default LandingPage;
