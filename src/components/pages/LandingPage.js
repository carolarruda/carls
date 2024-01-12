import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import classes from "../Hero/HeroAndInfo.module.css";
import Share from "../Share/Share";

const LandingPage = () => {
  return (
    <main className={classes.main}>
      <div className={classes.section}>
        <Hero />
        <Share />
      </div>
      <Footer />
    </main>
  );
};

export default LandingPage;
