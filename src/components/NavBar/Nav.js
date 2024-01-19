import classes from "./Nav.module.css";
import { Outlet } from "react-router-dom";
import NavBarDesktop from "./NavBarDesktop";
import NavBarPhone from "./NavBarPhone";

const Nav = ({}) => {
  return (
    <>
      <nav className={classes.nav}>
        <NavBarDesktop />
        <NavBarPhone />
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
