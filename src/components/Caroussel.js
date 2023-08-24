import { useEffect, useState } from "react";

const Caroussel = ({ blogs }) => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timer = null;
  useEffect(() => {
   
    timer =
      // eslint-disable-next-line react-hooks/exhaustive-deps
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 6500);
  });

  const slideLeft = () => {
    setCurrent(current === 0 ? blogs.length - 1 : current - 1);
  };

  const slideRight = () => {
    setCurrent(current === blogs.length - 1 ? 0 : current + 1);
  };

  return (
    <div
      className="carousselio"
      onMouseEnter={() => {setAutoPlay(false);
      clearTimeout(timer)}}
      onMouseLeave={() => setAutoPlay(true)}
    >
      <div className="caroussel-wrapper">
        {blogs.map((blog, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "caroussel-card caroussel-card-active"
                  : "caroussel-card"
              }
            >
              <img className="blog-img" src={blog.image} alt="" />
              <div className="card-overlay">
                <h3 className="card-title">{blog.title}</h3>
              </div>
              <div className="card-overlay">
     
                <button className="card-title log-but">Checkout Recipes</button>
              </div>
            </div>
          );
        })}
        <div className="caroussel-arrow-left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="caroussel-arrow-right" onClick={slideRight}>
          &rsaquo;
        </div>
        <div className="caroussel-pagination">
          {blogs.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? "pagination-dot pagination-dot-active"
                    : "pagination-dot"
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Caroussel;
