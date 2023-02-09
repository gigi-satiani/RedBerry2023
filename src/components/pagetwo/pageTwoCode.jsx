import React from "react";
import { GlobalInput } from '../inputFormPages/globalInput';

export const PageTwo = () => {
    return (
     <>
        <div className='infoInputParent'>
         <GlobalInput placeholder='გიგი' label='სახელი' span='მინიმუმ 2 ასო, ქართული ასოები' />
         <GlobalInput placeholder='ასათიანი' label='გვარი' span='მინიმუმ 2 ასო, ქართული ასოები' />
      </div>

     <div className='photoMailNum'>
        <div className='photoUpload'>
           <span className='photoSpan'>პირადი ფოტოს ატვირთვა</span>
           <input type='file' id='fileInput' className='uploadPhotoInput' placeholder='awdads' />
           <label htmlFor='fileInput' id='fileLabel' accept='image/*' >ატვირთვა</label>
        </div>
        <div className='aboutMe'>
          <label className='aboutMeLabel'>ჩემ შესახებ (არასავალდებულო)</label>
          <input type='text-area' className='aboutMeText' placeholder='ზოგადი ინფო შენ შესახებ'/>
        </div>
 
        <GlobalInput placeholder='GigiAsatiani@redberry.ge' label='ელ.ფოსტა' 
            span='უნდა მთავრდებოდეს @redberry.ge-ით' color='blue' type='email' />

        <GlobalInput placeholder='+995 598 88 68 00' label='მობილურის ნომერი' 
            span='უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს' color='blue' type='number' />             
     </div>

      <div className='btnParent'> 
        <button className='pervPageBtn'>ᲣᲙᲐᲜ</button>
        <button className='nextPageBtn'>ᲨᲔᲛᲓᲔᲒᲘ</button>
      </div> 
  </>
 )
}