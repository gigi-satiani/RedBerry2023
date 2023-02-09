import './home.css';
// img
import LOGOberry from '../images/LOGOberry.png';
import logo from '../images/LOGO.png';


export default function Home() {
    return (
     <div className="Home">
       <figure className='logoRedBerry'>
         <img src={LOGOberry} style={{paddingLeft: '20px'}}/>
       </figure>
       <hr style={{width: '1770px'}}/>
       <div className='profileBtnParent'>
        <button className='newProfileBtn'>ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ</button>
        <figure className='midLogoParent'>
          <img src={logo} className='midLogo' ></img>
        </figure>
       </div>
     </div>
    )
};