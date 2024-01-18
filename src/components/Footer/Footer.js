import classes from "./Footer.module.css";
import Logo from "../Logo/Logo";
import Tiktok from "../icons/socialMedia/Tiktok";
import X from "../icons/socialMedia/X";
import Facebook from "../icons/socialMedia/Facebook";
import Instagram from "../icons/socialMedia/Instagram";
import Pinterest from "../icons/socialMedia/Pinterest";

const Footer = () => {
  return (
    <section className={` ${classes.footerContainer}`}>
      <div className={classes.footerGrid}>
        <div className={classes.about}>
          <Logo />
          <p>
            A website dedicated to providing the best recipes and your space to
            showcase your culinary creativity.{" "}
          </p>
        </div>
        <div className={classes.linksContainer}>
          <ul>
            <li>Home</li>
            <li>Recipes</li>
            <li>Blog</li>
          </ul>
          <ul>
            <li>Share Recipe</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
          <ul>
            <li>Terms of Use</li>
            <li>Privacy & Cookies</li>
          </ul>
        </div>

        <div className={classes.subscribe}>
          <h5>Newsletter</h5>
          <p>Subscribe to our newsletter to get more </p>
          <input
            className={classes.input}
            type="text"
            placeholder="&#9993; Enter your Email"
          />
          <button className={classes.subscribeButton}>Subscribe</button>
        </div>
      </div>

      <div className={classes.footerBottom}>
        <p>© 2023 PerfectRecipe All Right Reserved</p>
        <div className={classes.logos}>
          <div className={classes.logo}>
            <Tiktok />
          </div>
          <div className={classes.logo}>
            <X />
          </div>
          <div className={classes.logo}>
            <Facebook />
          </div>
          <div className={classes.logo}>
            <Instagram />
          </div>
          <div >
            <Pinterest />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
