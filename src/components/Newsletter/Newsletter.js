import classes from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <section className={`${classes.newsletterContainer}`}>
      <h3 className={classes.title}>Let&apos;s Stay In Touch!</h3>
      <p className={classes.newsletter}>
        Join our newsletter, so that we reach out to you with our news and
        offers.
      </p>
      <div className={classes.inputContainer}>
        <input placeholder="Enter your Email" type="text" />
        <button className={classes.newsletterButton}>Subscribe </button>
      </div>
    </section>
  );
};

export default Newsletter;
