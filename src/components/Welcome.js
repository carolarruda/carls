import "./styles/welcome.css";
import pic from "./images/creating.jpg";
import pic2 from "./images/4575.jpg";
import pic3 from "./images/Tiny chefs cooking healthy food according to recipe book.jpg";
import pic4 from "./images/25579675_fish_online_1.jpg";
import pic5 from "./images/Happy woman chatting with friends online.jpg";
import pic6 from "./images/3759999.jpg";

const Welcome = () => {
  return (
    <div className="section">
      <h1 className="header">
        Welcome to Carl's - where food stories come to life!{" "}
      </h1>
      <section className="welcome-info">
        <div className="column-one">
          <div className="info-card one">
            <h2 className="larger">Share Your Culinary Creations</h2>
            <img src={pic} alt="" className="img-one" loading="lazy" />
            <p className="text-tag specialy">
              Whether it's your grandma's secret cookie recipe or a modern twist
              on a classic dish, this is your space to showcase your culinary
              creativity. Share your recipes accompanied with photos that make
              taste buds tingle.
            </p>
          </div>
          <div className="info-card four">
            <h2>Learn from the Best</h2>
            <img src={pic4} alt="" className="img-one" loading="lazy" />
            <p className="text-tag">
              Delve into a treasure trove of cooking guides, technique
              tutorials, and chef insights. Whether you're a novice or a pro,
              there's always something new to learn in the ever-evolving world
              of gastronomy.
            </p>
          </div>
        </div>
        <div className="column-two">
          <div className="info-card two">
            <h2>Connect and Collaborate</h2>
            <img src={pic2} alt="" className="img-two" loading="lazy" />

            <p className="text-tag">
              Connect with fellow food enthusiasts from around the globe.
              Exchange cooking tips, discuss flavor combinations, and learn the
              stories behind diverse recipes. Collaborate on culinary ventures
              that span continents and cultures.
            </p>
          </div>
          <div className="info-card five">
            <h2 className="larger">Build Your Foodie Network</h2>
            <img src={pic5} alt="" className="img-five" loading="lazy" />

            <p className="text-tag special">
              Create lasting connections as you engage with like-minded food
              lovers. Follow your favorite cooks, comment on recipes that
              tantalize your taste buds, and share your own culinary journey.
            </p>
          </div>
        </div>
        <div className="column-three">
          <div className="info-card three">
            <h2> Explore Diverse Cuisines</h2>
            <img src={pic3} alt="" className="img-three" loading="lazy" />

            <p className="text-tag">
              Embark on a virtual culinary expedition through the diverse
              cuisines of the world. From Italian pasta to Indian curries,
              Mexican tacos to Japanese sushi Discover the magic that happens
              when ingredients meet culture.
            </p>
          </div>
          <div className="info-card six">
            <h2 className="larger">Visual Feast</h2>
            <img src={pic6} alt="" className="img-six" loading="lazy" />

            <p className="text-tag specialy">
              They say we eat with our eyes first. Immerse yourself in a visual
              feast as you explore a treasure trove of delectable food
              photography. Capture the essence of your recipes in stunning
              images that capture every flavor-filled detail.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
