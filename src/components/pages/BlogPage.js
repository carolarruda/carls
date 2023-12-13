import Blog from "../Blog";
import FooterTwo from "../FooterTwo";

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
