import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <section className={classes.loaderContainer}>
      <h1 className={classes.header}>Something is cooking...</h1>
      <div id={classes.cooking}>
        <div className={classes.bubble}></div>
        <div className={classes.bubble}></div>
        <div className={classes.bubble}></div>
        <div className={classes.bubble}></div>
        <div className={classes.bubble}></div>

        <div id={classes.area}>
          <div id={classes.sides}>
            <div id={classes.pan}></div>
            <div id={classes.handle}></div>
          </div>
          <div id={classes.pancake}>
            <div id={classes.pastry}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loader;
