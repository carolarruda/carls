import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Info from "../Hero/Info";
import classes from "../Hero/HeroAndInfo.module.css";

const LandingPage = () => {
  return (
    <main className={classes.main}>
      <div className={classes.section}>
        <Hero />
        <Info />
      </div>
      <Footer />
    </main>
  );
};

export default LandingPage;
