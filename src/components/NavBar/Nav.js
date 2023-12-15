import classes from "./Nav.module.css";
import { Outlet } from "react-router-dom";
import NavBarDesktop from "./NavBarDesktop";
import NavBarPhone from "./NavBarPhone";
import pic from "../images/roundLogoDark.png";


const Nav = () => {
  return (
    <>
      <nav className={classes.nav}>
        <div>
          <img className={classes.carlsLogo} src={pic} alt=" " />
        </div>
        <NavBarDesktop />
        <NavBarPhone />
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
