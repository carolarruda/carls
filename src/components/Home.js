import Caroussel from "./Caroussel";
import Welcome from "./Welcome";
import Nav from "./Nav";
import "./style.css";
import { blogs } from "./Data";
import Footer from "./Footer";

const Home = ({ users }) => {
  return (
    <div className="background home-grid">
      <Nav users={users} />
      <section className="main-home">
        <section className="caroussel">
          <Caroussel blogs={blogs} />
        </section>
        <section className="welcome">
          <Welcome />
        </section>
        <section className="footer">
        <Footer/>
        </section>
      </section>
    </div>
  );
};

export default Home;
