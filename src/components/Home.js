import Caroussel from "./Caroussel";
import Welcome from "./Welcome";
import Nav from "./Nav"
import "./style.css";
import { blogs } from "./Data";



const Home = () => {

  return (
    <div className="background home-grid">
      <Nav />
      <section className="main-home">
        <section className="caroussel">
          <Caroussel blogs={blogs} />
        </section>
        <section className="welcome">
          <Welcome />
        </section>
        <section className="youtube"></section>
      </section>
    </div>
  );
};

export default Home;
