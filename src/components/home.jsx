import "./home.css";
import LOGOberry from "../images/LOGOberry.png";
import logo from "../images/LOGO.png";

export function Home(props) {
  return (
    <div className="home">
      <figure className="logoRedBerry">
        <img src={LOGOberry} style={{ paddingLeft: "20px" }} alt="" />
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
        <figure className="midLogoParent">
          <img src={logo} className="midLogo" alt=""></img>
        </figure>
      </div>
    </div>
  );
}
