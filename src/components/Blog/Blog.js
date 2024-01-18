import classes from "./Blog.module.css";
import Header from "../Header/Header";
import Article from "./Article";

const Blog = ({ recipes, setRecipes }) => {
  console.log("trending", recipes);

  return (
    <section className="section-wrapper">
      <Header title={"Blog"} path={"/blog"} />
      <div className={classes.articleContainer}>
        <Article />
      </div>
    </section>
  );
};

export default Blog;
