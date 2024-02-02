import classes from "./Newsletter.module.css";

const NewsletterSmall = () => {
  return (
    <section className={`${classes.newsletterContainer}`}>
      <h3 className={classes.titleSmall}>
        Stay connected with our Recipes updates
      </h3>
      <p className={classes.newsletter}>
        for the latest health tips and delicious recipes
      </p>
      <div className={classes.inputContainer}>
        <input placeholder="Enter your Email" type="text" />
        <button className={classes.newsletterButton}>Subscribe </button>
      </div>
    </section>
  );
};

export default NewsletterSmall;
