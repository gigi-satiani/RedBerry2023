import React from "react";
import dude from "../../images/dude.png";
import mail from "../../symbols/mail.png";
import phone from "../../symbols/phone.png";
import symbolOrange from "../../symbols/LOGO-orange.png";
import { TotalInfoPart } from "../globals/totalInfoComponent";

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
            <TotalInfoPart h4='ჩემს შესახებ' p='ძალიან მიყვარს დიზაინის კეთება. დილით ადრე რომ 
                                               ავდგები გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკეთებ' />
          </div>

          <div className="liveImageParent">
            <figure className="liveImgFig">
                <img className="liveImage" src={dude}/>
            </figure>
          </div>
         </div>
        
        <div className="widthControl">
        <TotalInfoPart h4='გამოცდილება' label='React Native Developer, microsoft'
                       span='2020-09-23 - 2020-09-23' 
                       p='ძალიან მიყვარს დიზაინის კეთება დილით ადრე რომ
                          ავდგები გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკეთებ
                          ძალიან მიყვარს დიზაინის კეთება დილით ადრე რომ ავდგები 
                          გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკე'/>
        </div>

        <div className="widthControl">
        <TotalInfoPart  h4='განათლება' label='წმ. ანდრიას საპატრიარქოს სასწავლებელი, სტუდენტი' 
                        span='2020-09-23' 
                        p='ვსწავლობდი გულმოდგინეთ. მყავდა ფრიადები. რაც შემეძლო — 
                           ვქენი. კომპიუტერები მიყვარდა. ვიჯექი ჩემთვის, ვაკაკუნებდი ამ კლავიშებზე. 
                           მეუნებოდნენ —დაჯექი, წაიკითხე რამე, რას აკაკუნებ, დრო მოვა და ჩაგიკაკუნებსო.
                           აჰა, მოვიდა დრო და ვერა ვარ დეველოპერირი?'/>
        </div>

         <figure className="orangeSymbol">
           <img src={symbolOrange} />
         </figure>
        </div>
    )
}