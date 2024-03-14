import Footer from "../Footer/Footer";
import classes from "../Hero/HeroAndInfo.module.css";
import SignNew from "../Sign And Log/SignNew";

const SignPage = ({ recipes, setRecipes }) => {
  return (
    <main className={classes.main}>
      <div className={classes.section}>
        <SignNew />
      </div>
      <Footer />
    </main>
  );
};

export default SignPage;
