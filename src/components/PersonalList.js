import Nav from "./Nav";
import StickyFooter from "./FooterTwo";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Delete from "./icons/delete";
import Edit from "./icons/edit";
import Heart from "./icons/heart";
import LikeRed from "./icons/likeRed";
import "./styles/main.css";

const PersonalList = ({
  search,
  setSearch,
  recipesP,
  setRecipesP,
  className,
  hoveredCard,
  handleHoverIn,
  handleHoverOut,
  handleDelete,
}) => {
  const [isLiked, setIsLiked] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let forMobile = 550;

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  let theme = "rgb(208, 224, 245)";

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const likeRecipe = (id) => {
    const likedRecipe = recipesP.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          liked: !item.liked,
        };
      } else {
        return item;
      }
    });

    setRecipesP(likedRecipe);

    const isRecipeLiked =
      likedRecipe.find((item) => item.id === id)?.liked || false;
    setIsLiked(isRecipeLiked);

    const url = `http://localhost:4000/recipes/${id}`;

    if (isLiked) {
      const dislike = {
        liked: false,
      };

      const optLike = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dislike),
      };

      fetch(url, optLike).then((response) => response.json());
    } else {
      const LikedRecipe = {
        liked: true,
      };

      const optLike = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(LikedRecipe),
      };
      fetch(url, optLike).then((response) => response.json());
    }
  };

  let filteredRecipes;

  if (search !== "") {
    filteredRecipes = recipesP.filter((recipe) => {
      return recipe.title.toLowerCase().includes(search.toLowerCase());
    });
  } else {
    filteredRecipes = recipesP;
  }

  return (
    <div>
      <Nav search={search} setSearch={setSearch} />
      <>
        <div className={className} id="recipes">
          <div></div>
          <section className="card-grid">
            {filteredRecipes.length === 0 && (
              <h1 className="centerh1">Sorry, No recipes found</h1>
            )}
            {filteredRecipes.length > 0 &&
              filteredRecipes.map((item, index) => {
                const isHovered = hoveredCard === index;
                const boxstyle = {
                  backgroundImage: `url(${item.imageUrl})`,
                  filter:
                    isHovered || windowWidth <= `${forMobile}`
                      ? "brightness(94%)"
                      : "blur(0.5px) brightness(92%) grayscale(20%)",
                };
                const cardBox = {
                  backgroundColor: isHovered ? `${theme}` : "#d8dfe6",
                  boxShadow: isHovered
                    ? "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                    : "none",
                  transform: isHovered ? "translateY(-5px)" : "translateY(0px)",
                  transition:
                    "background-color 0.3s, boxShadow 0.3s, transform 0.3s",
                };

                const show = {
                  fill:
                    isHovered || windowWidth <= `${forMobile}`
                      ? "#191d3a"
                      : "transparent",
                  width: windowWidth <= `${forMobile}` ? "22px" : "30px",
                  padding: "3px",
                  display: "grid",
                  justifyContent: "center",
                };
                const showRed = {
                  fill:
                    isHovered || windowWidth <= `${forMobile}`
                      ? "rgb(185, 14, 10)"
                      : "transparent",
                  width: windowWidth <= `${forMobile}` ? "22px" : "30px",
                  padding: "3px",
                  display: "grid",
                  justifyContent: "center",
                };
                const styleForphoto = {
                  textDecoration: "none",
                  color: "#808080",
                  display: "grid",
                  textAlign: "left",
                  paddingLeft: "5px",
                };

                return (
                  <div
                    className="box"
                    style={cardBox}
                    onMouseEnter={() => handleHoverIn(index)}
                    onMouseLeave={handleHoverOut}
                    key={item.id}
                  >
                    <div className="icons-container">
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="btn-no-style"
                      >
                        <Delete show={show} />
                      </button>
                      <Link
                        to={`recipes/edit/${item.id}`}
                        className="btn-no-style-test"
                      >
                        <Edit show={show} />
                      </Link>
                      <button
                        onClick={() => likeRecipe(item.id)}
                        className="btn-no-style"
                      >
                        {!item.liked && <Heart show={show} />}
                        {item.liked && <LikeRed showRed={showRed} />}
                      </button>
                    </div>

                    <Link to={`${item.id}`} style={styleForphoto}>
                      <div className="recipe-photo" style={boxstyle}></div>
                    </Link>
                    <div className="recipe-name">{item.title}</div>
                  </div>
                );
              })}
          </section>
        </div>
      </>

      <StickyFooter />
    </div>
  );
};

export default PersonalList;
