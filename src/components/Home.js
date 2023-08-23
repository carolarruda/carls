import Caroussel from "./Caroussel";
import "./style.css";
import React from "react";

const Home = () => {
  return (
    <div className="background home-grid">
      <section className="nav">
        <div className="logo"></div>
        <div>
          <ul className="options">
            <li>
              <a href="default.asp">Home</a>
            </li>
            <li>
              <a href="news.asp">News</a>
            </li>
            <li>
              <a href="contact.asp">Contact</a>
            </li>
            <li>
              <a href="about.asp">About</a>
            </li>
          </ul>
        </div>

        <div></div>
      </section>
      <section className="main-home">
        <section className="caroussel">
            <Caroussel/>
        </section>
        <section className="users"></section>
        <section className="youtube"></section>
      </section>
    </div>
  );
};

export default Home;
