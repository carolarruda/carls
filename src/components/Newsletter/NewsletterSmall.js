import classes from "./Newsletter.module.css";

const NewsletterSmall = () => {
  return (
    <section className={`${classes.newsletterContainerLateral}`}>
      <h3 className={classes.titleSmallLateral}>
        Stay connected with our Recipes updates
      </h3>
      <p className={classes.newsletterLaterall}>
        for the latest health tips and delicious recipes
      </p>

      <input
        placeholder="      Enter your Email"
        type="text"
        className={classes.inputNewsletter}
      />
      <button className={classes.newsletterButtonLateral}>Sign up </button>
    </section>
  );
};

export default NewsletterSmall;
