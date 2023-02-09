import React from "react";
import dude from "../../images/dude.png";
import mail from "../../symbols/mail.png";
import phone from "../../symbols/phone.png";
import symbolOrange from "../../symbols/LOGO-orange.png";

export const TotalInfo = () => {
    return (
        <div className="totalInformation">
         <div className="widthControl">

          <div className="liveInfo">
            <div className="liveInfoHeading">
                <h2 className="nameSurname">გიგი ასათიანი</h2>
                <span className="liveMail"><img src={mail}/>  123madness@gmail.com</span>
                <span className="liveNumber"><img src={phone}/>  +995 598 88 68 00</span>
            </div>
            <div className="liveAboutParent">
                <h4 className="liveAboutHeading">ჩემს შესახებ</h4>
                <p className="liveAbout">ძალიან მიყვარს დიზაინის კეთება. დილით ადრე რომ 
                              ავდგები გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკეთებ</p>
            </div>
          </div>

          <div className="liveImageParent">
            <figure className="liveImgFig">
                <img className="liveImage" src={dude}/>
            </figure>
          </div>
         </div>
        
        <div className="widthControl">
         <div className="liveAboutParent">
                <h4 className="liveAboutHeading">გამოცდილება</h4>
                <div className="dateAndJobFlex">
                   <label className="jobDiscription">React Native Developer, microsoft</label>
                   <span className="dateAndTime">2020-09-23 - 2020-09-23</span>
                </div>
                <p className="liveAbout">ძალიან მიყვარს დიზაინის კეთება. დილით ადრე რომ 
                            ავდგები გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკეთებadasd 
                            wadsadadsda sdawdad adwasd wadsd ძალიან მიყვარს დიზაინის კეთება.
                            დილით ადრე რომ ავდგები გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკე</p>
         </div>
        </div>

        <div className="widthControl">
         <div className="educationParent">
                <h4 className="liveAboutHeading">გამოცდილება</h4>
                <div className="dateAndJobFlex">
                   <label className="jobDiscription">წმ. ანდრიას საპატრიარქოს სასწავლებელი, სტუდენტი</label>
                   <span className="dateAndTime">2020-09-23</span>
                </div>
                <p className="liveAbout">ვსწავლობდი გულმოდგინეთ. მყავდა ფრიადები. რაც შემეძლო — 
                          ვქენი. კომპიუტერები მიყვარდა. ვიჯექი ჩემთვის, ვაკაკუნებდი ამ კლავიშებზე. 
                          მეუნებოდნენ —დაჯექი, წაიკითხე რამე, რას აკაკუნებ, დრო მოვა და ჩაგიკაკუნებსო.
                          აჰა, მოვიდა დრო და ვერა ვარ დეველოპერი?ე</p>
         </div>
        </div>

         <figure className="orangeSymbol">
           <img src={symbolOrange} />
         </figure>
        </div>
    )
}