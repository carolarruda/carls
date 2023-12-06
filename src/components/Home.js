import Welcome from "./Welcome";
import Nav from "./NavBar/Nav";
import "./style.css";

import Footer from "./Footer";

const Home = ({ users, setSearch, search }) => {
  return (
    <div className="background home-grid">
      <Nav users={users} search={search} setSearch={setSearch} />
      <section className="main-home">
        <section className="welcome">
          <Welcome />
        </section>
        <section className="footer">
          <Footer />
        </section>
      </section>
    </div>
  );
};

export default Home;
