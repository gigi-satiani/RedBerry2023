import '../privateInfo.css';
import React from "react";
import caret from '../../symbols/caret.png';
import { TotalInfo } from '../globals/totalInfo';
import { MyHeader } from "../globals/header";
import { GlobalInput } from "../globals/globalInput";
import { GlobalText } from '../globals/globalTextArea';

export const Experience = () => {
  return (
  <div className="infoPage">

   <div className='infoParent'>
     <div className='headerParent'>
      <figure className='resetParent'>
        <img src={caret} className='backReset'/>
      </figure>
          <MyHeader h2='გამოცდილება' span='2/3'/>
     </div>

     <div className='pageInfoTwo'>  
          <GlobalInput placeholder='დეველოპერი, დიზაინერი, ა.შ' label='თანამდებობა' 
                   span='მინიმუმ 2 ასო სიმბოლო' />
          <GlobalInput placeholder='დამსაქმებელი' label='დამსაქმებელი' 
                   span='მინიმუმ 2 ასო სიმბოლო' />
      <div className='dateFlexDiv'>
          <GlobalInput  label='დაწყების რიცხვი'  type='date'/>      
          <GlobalInput  label='დამთავრების რიცხვი' type='date'/>     
      </div>   
          <GlobalText label='აღწერა' placeholder='როლი თანამდებობაზე და ზოგადი აღწერა' 
                      className='workplaceInfo' />

      <div className='addExpBtnParent'>
        <button className='addInfoButton'>მეტი გამოცდილების დამატება</button>
      </div>
     </div>

    <div className='btnParentTwo'> 
      <button className='pervPageBtn'>ᲣᲙᲐᲜ</button>
      <button className='nextPageBtn'>ᲨᲔᲛᲓᲔᲒᲘ</button>
    </div> 
   </div>

    <div className='infoChild'>
      <TotalInfo />
    </div>

  </div>
  )
}