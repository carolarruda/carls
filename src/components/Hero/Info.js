import pic from "../images/creating.jpg";
import pic2 from "../images/4575.jpg";
import pic3 from "../images/Tiny chefs cooking healthy food according to recipe book.jpg";
import pic4 from "../images/25579675_fish_online_1.jpg";
import pic5 from "../images/Happy woman chatting with friends online.jpg";
import pic6 from "../images/3759999.jpg";
import classes from "./HeroAndInfo.module.css";

const Info = () => {
  return (
    <section className={`${classes.welcomeInfo} section-wrapper`} id="about">
      <div className={classes.infoCard}>
        <h2>Share Your Culinary Creations</h2>
        <img src={pic} alt="" loading="lazy" />
        <p className={classes.textTag}>
          Whether it's your grandma's secret cookie recipe or a modern twist on
          a classic dish, this is your space to showcase your culinary
          creativity. Share your recipes accompanied with photos that make taste
          buds tingle.
        </p>
      </div>
      <div className={classes.infoCard}>
        <h2>Learn from the Best</h2>
        <img src={pic4} alt="" loading="lazy" />
        <p className={classes.textTag}>
          Delve into a treasure trove of cooking guides, technique tutorials,
          and chef insights. Whether you're a novice or a pro, there's always
          something new to learn in the ever-evolving world of gastronomy.
        </p>
      </div>

      <div className={classes.infoCard}>
        <h2>Connect and Collaborate</h2>
        <img src={pic2} alt="" className="img-two" loading="lazy" />

        <p className={classes.textTag}>
          Connect with fellow food enthusiasts from around the globe. Exchange
          cooking tips, discuss flavor combinations, and learn the stories
          behind diverse recipes. Collaborate on culinary ventures that span
          continents and cultures.
        </p>
      </div>
      <div className={classes.infoCard}>
        <h2>Build Your Foodie Network</h2>
        <img src={pic5} alt="" loading="lazy" />

        <p className={classes.textTag}>
          Create lasting connections as you engage with like-minded food lovers.
          Follow your favorite cooks, comment on recipes that tantalize your
          taste buds, and share your own culinary journey.
        </p>
      </div>

      <div className={classes.infoCard}>
        <h2> Explore Diverse Cuisines</h2>
        <img src={pic3} alt="" loading="lazy" />

        <p className={classes.textTag}>
          Embark on a virtual culinary expedition through the diverse cuisines
          of the world. From Italian pasta to Indian curries, Mexican tacos to
          Japanese sushi Discover the magic that happens when ingredients meet
          culture.
        </p>
      </div>
      <div className={classes.infoCard}>
        <h2>Visual Feast</h2>
        <img src={pic6} alt="" loading="lazy" />

        <p className={classes.textTag}>
          They say we eat with our eyes first. Immerse yourself in a visual
          feast as you explore a treasure trove of delectable food photography.
          Capture the essence of your recipes in stunning images that capture
          every flavor-filled detail.
        </p>
      </div>
    </section>
  );
};

export default Info;
