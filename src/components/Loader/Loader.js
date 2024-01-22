import classes from "./Loader.module.css";
import { usePromiseTracker } from "react-promise-tracker";

const Loader = () => {
  const { promiseInProgress } = usePromiseTracker({delay: 500});

  return (
    <div>
      {(promiseInProgress === true) ? (
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
      ) : null}
    </div>
  );
};

export default Loader;
