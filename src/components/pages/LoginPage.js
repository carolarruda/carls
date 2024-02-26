import Footer from "../Footer/Footer";
import classes from "../Hero/HeroAndInfo.module.css";
import LoginNew from "../Sign And Log/LoginNew";

const LoginPage = ({ recipes, setRecipes }) => {
  return (
    <main className={classes.main}>
      <div className={classes.section}>
        <LoginNew />
      </div>
      <Footer />
    </main>
  );
};

export default LoginPage;
