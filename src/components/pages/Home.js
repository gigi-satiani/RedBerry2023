import LOGOberry from "../../images/LOGOberry.png";
import logo from "../../images/LOGO.png";
import { Link } from "react-router-dom";
import "../cssFiles/home.css";

function HomePage() {
  return (
    <div className="home">
      <figure className="logoRedBerry">
        <img src={LOGOberry} style={{ paddingLeft: "20px" }} alt="" />
      </figure>
      <hr style={{ width: "1770px" }} />
      <div className="profileBtnParent">
        <Link className="newProfileBtn" to="formRegistration">
          ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ
        </Link>
        <figure className="midLogoParent">
          <img src={logo} className="midLogo" alt=""></img>
        </figure>
      </div>
    </div>
  );
}

export default HomePage;
