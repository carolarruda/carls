import Caroussel from "./Caroussel";
import { blogs } from "./Data";
import Nav from "./Nav";
import FooterTwo from "./FooterTwo";
const Blog = (users, setSearch, search) => {
  return (
    <div>
      <Nav users={users} search={search} setSearch={setSearch} />
      <section className="caroussel">
        <Caroussel blogs={blogs} />
      </section>
      <section className="footer">
        <FooterTwo/>
        </section>
    </div>
  );
};

export default Blog;
