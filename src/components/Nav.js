import { useNavigate } from "react-router-dom";
import pic from "./images/roundLogoDark.png";


const Nav = ()=> {
    const navigate = useNavigate();
    const handleSign = () => {
      navigate("/login");
    }
    return (


        <nav className="nav">
          <div className="logo">
            <img className="carls-log0" src={pic} alt=" " />
          </div>
          <div>
            <ul className="options">
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="news.asp">Recipes</a>
              </li>
              <li>
                <a href="contact.asp">Contact</a>
              </li>
              <li>
                <a href="about.asp">About</a>
              </li>
            </ul>
          </div>
    
          <div className="right-nav">
            <button className="log-but home" onClick={handleSign}>
              Sign In
            </button>
          </div>
        </nav>
    )
   
}

export default Nav