import Blog from "../Blog/Blog";
import FooterTwo from "../Footer/FooterTwo";

import classes from "./pages.module.css";

const BlogPage = () => {
  return (
    <main className={classes.main}>

      <div className={classes.grid}>
        <Blog />
      </div>
      <FooterTwo />
    </main>
  );
};

export default BlogPage;
