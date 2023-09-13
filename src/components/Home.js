import Caroussel from "./Caroussel";
import Welcome from "./Welcome";
import Nav from "./Nav";
import "./style.css";
import { blogs } from "./Data";
import Footer from "./Footer";

const Home = ({ users, setSearch, search }) => {
  return (
    <div className="background home-grid">
      <Nav users={users}  search={search} setSearch={setSearch}/>
      <section className="main-home">
      
        <section className="welcome">
          <Welcome />
        </section>
        <section className="caroussel">
          <Caroussel blogs={blogs} />
        </section>
        <section className="footer">
        <Footer/>
        </section>
      </section>
    </div>
  );
};

export default Home;
