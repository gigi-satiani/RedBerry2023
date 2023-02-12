import "./home.css";
import { Link } from "react-router-dom";
// img
import LOGOberry from "../images/LOGOberry.png";
import logo from "../images/LOGO.png";

export default function Home(props) {
  return (
    <div className="Home">
      <figure className="logoRedBerry">
        <img src={LOGOberry} style={{ paddingLeft: "20px" }} />
      </figure>
      <hr style={{ width: "1770px" }} />
      <div className="profileBtnParent">
        <button
          type="button"
          className="newProfileBtn"
          to="registration"
          onClick={props.handleNextPage}
        >
          ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ
        </button>
        {/* <Link className="newProfileBtn" to="registration">
          ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ
        </Link> */}
        <figure className="midLogoParent">
          <img src={logo} className="midLogo"></img>
        </figure>
      </div>
    </div>
  );
}
