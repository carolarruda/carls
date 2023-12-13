import Blog from "../Blog/Blog";
import FooterTwo from "../Footer/FooterTwo";

import classes from "./pages.module.css";

const BlogPage = () => {
  return (
    <>
      <div className={classes.grid}>
        <Blog />
      </div>
      <FooterTwo />
    </>
  );
};

export default BlogPage;
