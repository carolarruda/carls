import Eye from "../icons/Eye";
import FacebookLogin from "../icons/FacebookLogin";
import Google from "../icons/Google";
import login from "../images/LoginImg.png";
import classes from "./LogSign.module.css";
import facebook from "../images/facebook 1.png";

const LoginNew = () => {
  return (
    <div className={`${classes.loginContainer} section-wrapper`}>
      <div>
        <img src={login} alt="" />
      </div>
      <div className={classes.formContainer}>
        <h2 className={classes.loginPrompt}>Welcome Back!</h2>
        <p className={classes.loginTag}>Enter your email & passpord to login</p>
        <form className={classes.loginForm}>
          <input
            required
            id="email"
            className={classes.emailInput}
            placeholder="email"
            type="text"
          />

          <div>
            <input
              type="password"
              id="password"
              className={classes.passwordInput}
              placeholder="password"
              required
            />
            <div className={classes.passVisibleButton}>
              <Eye />
            </div>
          </div>
          <button className={classes.signButtonHome}>Login</button>
        </form>
        <p className={classes.loginTag}>Or you can join with</p>
        <div className={classes.socials}>
          <div className={classes.alternativeLogin}>
            <Google />
            <p>Sign in with Google</p>
          </div>
          <div className={classes.alternativeLogin}>
            <img src={facebook} alt="facebook" />
            <p>Sign in with Facebook</p>
          </div>
        </div>
        <p className={classes.loginTag}>Already have an account? Log in</p>
      </div>
    </div>
  );
};

export default LoginNew;
