import AccountSettings from "../Settings/AccountSettings";
import FooterTwo from "../Footer/FooterTwo";
import classes from "./pages.module.css";

const SeetingsPage = ({ user }) => {
  return (
    <main className={classes.main}>
      <AccountSettings user={user} />

      <FooterTwo />
    </main>
  );
};

export default SeetingsPage;
