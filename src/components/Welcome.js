import "./styles/welcome.css";
import pic from "./images/creating.jpg";
import pic2 from "./images/4575.jpg";
import pic3 from "./images/Tiny chefs cooking healthy food according to recipe book.jpg";
import pic4 from "./images/25579675_fish_online_1.jpg";
import pic5 from "./images/Happy woman chatting with friends online.jpg";
import pic6 from "./images/3759999.jpg";
import { useState } from "react";

const Welcome = () => {
  const [hoveredCards, setHoveredCards] = useState({});

  const handleHover = (index) => {
    setHoveredCards((prevHoveredCards) => ({
      ...prevHoveredCards,
      [index]: true,
    }));
  };

  const handleHoverOut = (index) => {
    setHoveredCards((prevHoveredCards) => ({
      ...prevHoveredCards,
      [index]: false,
    }));
  };

  const isHovered = (index) => {
    return hoveredCards[index] || false;
  };

  return (
    <div className="section">
      <h1 className="header">
        Welcome to Carl's - where food stories come to life!{" "}
      </h1>
      <section className="welcome-info">
        <div className="column-one">
          <div
            className="info-card one"
            onMouseEnter={() => handleHover(1)}
            onMouseLeave={() => handleHoverOut(1)}
            style={{
              boxShadow: isHovered(1)
                ? "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                : "none",
              transform: isHovered(1) ? "translateY(-2px)" : "translateY(0px)",
              transition: isHovered(1) ? "transform 0.8s " : "none",
            }}
          >
            <h2>Share Your Culinary Creations</h2>
            {!isHovered(1) && <img src={pic} alt="" className="img-one" />}
            {isHovered(1) && (
              <p
                className="text-tag"
                style={{
                  opacity: isHovered(1) ? 1 : 0,
      
                  transition: "opacity 0.6s cubic-bezier(.25,.1,.25,1), transition-delay 0.9s",
                }}
              >
                Whether it's your grandma's secret cookie recipe or a modern
                twist on a classic dish, this is your space to showcase your
                culinary creativity. Share your recipes accompanied with photos
                that make taste buds tingle.
              </p>
            )}
          </div>
          <div
            className="info-card four"
            onMouseEnter={() => handleHover(4)}
            onMouseLeave={() => handleHoverOut(4)}
            style={{
              boxShadow: isHovered(4)
                ? "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                : "none",
              transform: isHovered(4) ? "translateY(-2px)" : "translateY(0px)",
              transition: isHovered(4) ? "transform 0.8s" : "none",
            }}
          >
            <h2>Learn from the Best</h2>
            {!isHovered(4) && <img src={pic4} alt="" className="img-one" />}
            {isHovered(4) && (
              <p
                className="text-tag"
                style={{
                  opacity: isHovered(4) ? 1 : 0,

                  transition:
                  "opacity 0.6s ease-in-out, filter 0.6s ease-in-out",
                }}
              >
                Delve into a treasure trove of cooking guides, technique
                tutorials, and chef insights. Whether you're a novice or a pro,
                there's always something new to learn in the ever-evolving world
                of gastronomy.
              </p>
            )}
          </div>
        </div>
        <div className="column-two">
          <div
            className="info-card two"
            onMouseEnter={() => handleHover(2)}
            onMouseLeave={() => handleHoverOut(2)}
            style={{
              boxShadow: isHovered(2)
                ? "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                : "none",
              transform: isHovered(2) ? "translateY(-2px)" : "translateY(0px)",
              transition: isHovered(2) ? "transform 0.8s" : "none",
            }}
          >
            <h2>Connect and Collaborate</h2>
            {!isHovered(2) && <img src={pic2} alt="" className="img-two" />}
            {isHovered(2) && (
              <p
                className="text-tag"
                style={{
                  opacity: isHovered(2) ? 1 : 0,

                  transition:
                    "opacity 0.6s ease-in-out, filter 0.6s ease-in-out",
                }}
              >
                Connect with fellow food enthusiasts from around the globe.
                Exchange cooking tips, discuss flavor combinations, and learn
                the stories behind diverse recipes. Collaborate on culinary
                ventures that span continents and cultures.
              </p>
            )}
          </div>
          <div
            className="info-card five"
            onMouseEnter={() => handleHover(5)}
            onMouseLeave={() => handleHoverOut(5)}
            style={{
              boxShadow: isHovered(5)
                ? "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                : "none",
              transform: isHovered(5) ? "translateY(-5px)" : "translateY(0px)",
              transition: isHovered(5) ? "transform 0.8s" : "none",
            }}
          >
            <h2>Build Your Foodie Network</h2>
            {!isHovered(5) && <img src={pic5} alt="" className="img-five" />}
            {isHovered(5) && (
              <p
                className="text-tag"
                style={{
                  opacity: isHovered(5) ? 1 : 0,

                  transition:
                    "opacity 0.6s ease-in-out, filter 0.6s ease-in-out",
                }}
              >
                Create lasting connections as you engage with like-minded food
                lovers. Follow your favorite cooks, comment on recipes that
                tantalize your taste buds, and share your own culinary journey.
              </p>
            )}
          </div>
        </div>
        <div className="column-three">
          <div
            className="info-card three"
            onMouseEnter={() => handleHover(3)}
            onMouseLeave={() => handleHoverOut(3)}
            style={{
              boxShadow: isHovered(3)
                ? "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                : "none",
              transform: isHovered(3) ? "translateY(-2px)" : "translateY(0px)",
              transition: isHovered(3) ? "transform 0.8s" : "none",
            }}
          >
            <h2> Explore Diverse Cuisines</h2>
            {!isHovered(3) && <img src={pic3} alt="" className="img-three"   style={{
              boxShadow: isHovered(3)
                ? "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                : "none",
              transform: isHovered(3) ? "translateY(-2px)" : "translateY(0px)",
              transition: isHovered(3) ? "transform 0.8s" : "none",
            }}/>}
            {isHovered(3) && (
              <p
                className="text-tag"
                style={{
                  opacity: isHovered(3) ? 1 : 0,

                  transition:
                    "opacity 0.6s ease-in-out, filter 0.6s ease-in-out",
                }}
              >
                Embark on a virtual culinary expedition through the diverse
                cuisines of the world. From Italian pasta to Indian curries,
                Mexican tacos to Japanese sushi – discover the magic that
                happens when ingredients meet culture.
              </p>
            )}
          </div>
          <div
            className="info-card six"
            onMouseEnter={() => handleHover(6)}
            onMouseLeave={() => handleHoverOut(6)}
            style={{
              boxShadow: isHovered(6)
                ? "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                : "none",
              transform: isHovered(6) ? "translateY(-2px)" : "translateY(0px)",
              transition: isHovered(6) ? "transform 0.8s" : "none",
            }}
          >
            <h2>Visual Feast</h2>
            {!isHovered(6) && <img src={pic6} alt="" className="img-six" />}
            {isHovered(6) && (
              <p
                className="text-tag"
                style={{
                  opacity: isHovered(6) ? 1 : 0,

                  transition:
                    "opacity 0.6s ease-in-out, filter 0.6s ease-in-out",
                }}
              >
                They say we eat with our eyes first. Immerse yourself in a
                visual feast as you explore a treasure trove of delectable food
                photography. Capture the essence of your recipes in stunning
                images that capture every flavor-filled detail.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
