import React from "react";
import dude from "../../images/dude.jpg";
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
            <span className="liveMail">
              <img src={mail} alt="" /> 123madness@gmail.com
            </span>
            <span className="liveNumber">
              <img src={phone} alt="" /> +995 598 88 68 00
            </span>
          </div>
          <TotalInfoPart
            h4="ჩემს შესახებ"
            p=" გიგი ასათიანი Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
               sed do eiusmod tempor incididunt ut labore et dolore magna"
          />
        </div>

        <div className="liveImageParent">
          <figure className="liveImgFig">
            <img className="liveImage" src={dude} alt="" />
          </figure>
        </div>
      </div>

      <div className="widthControl">
        <TotalInfoPart
          h4="გამოცდილება"
          label="React Developer, EpamBerry"
          span="1991-08-30 - 2020-09-23"
          p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
             sed do eiusmod tempor incididunt ut labore et dolore magna 
             aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
             laboris nisi ut aliquip ex ea"
        />
      </div>

      <div className="widthControl">
        <TotalInfoPart
          h4="განათლება"
          label="გე პე იი"
          span="2020-09-23"
          p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
             sed do eiusmod tempor incididunt ut labore et dolore magna.
             ისე, ამის კეთება 100% რო ვიცოდე, თქვენი ბუთქემფი თუ ბითქემფი რაღათ მინდა..."
        />
      </div>

      <figure className="orangeSymbol">
        <img src={symbolOrange} alt="" />
      </figure>
    </div>
  );
};
