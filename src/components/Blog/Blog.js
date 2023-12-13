import Caroussel from "./Caroussel";
import { blogs } from "../Data";

const Blog = (users, setSearch, search) => {
  return (
    <div>
      <section className="caroussel">
        <Caroussel blogs={blogs} />
      </section>

    </div>
  );
};

export default Blog;
