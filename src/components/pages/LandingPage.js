import Blog from "../Blog/Blog";
import Explore from "../Explore/Explore";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import classes from "../Hero/HeroAndInfo.module.css";
import Newsletter from "../Newsletter/Newsletter";
import Popular from "../Popular/Popular";
import Share from "../Share/Share";
import Trending from "../Trending Recipes/Trending";

const LandingPage = ({ recipes, setRecipes }) => {
  return (
    <main className={classes.main}>
      <div className={classes.section}>
        <Hero />
        <Share />
        <Trending
          recipes={recipes}
          setRecipes={setRecipes}
          small={false}
          header={true}
        />
        <Blog small={false} header={true} />
        <Explore small={false} header={true} recipes={recipes} />
        <Newsletter />
        <Popular  small={false} header={true} />
      </div>
      <Footer />
    </main>
  );
};

export default LandingPage;
