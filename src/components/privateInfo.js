import './privateInfo.css';
import React from "react";
import styled from "styled-components";
import { MyHeader } from '../components/globals/header';
import { TotalInfo }  from './globals/totalInfo';
import { Input } from './globals/globalItems';
// import { useRef } from 'React';
// symbol
import caret from '../symbols/caret.png';

export default function PrivateInfo() {

  // const uploadRef = useRef();

  // const handleUploadClick = () => {
  //   uploadRef.current.click();
  // }

  return (
   <div className='infoPage'>
    <div className='infoParent'>

     <figure className='resetParent'>
      <img src={caret} className='backReset' />
     </figure>
    <form className='pageInfo'>  
     <MyHeader/>

     <div className='infoInputParent'> {/* /სახელი & გვარი & პირადი ფოტო/  */}
       <div className='nameInput'>
       <label className='nameInputLabel' style={{width: '371px'}}>სახელი</label>
        <StyledInput/>
        <span className='nameInputSpan'>მინიმუმ 2 ასო, ქართული ასოები</span>
       </div>
       <div className='sureNameInput'style={{width: '371px'}}>
       <label className='sureNameInputLabel'>გვარი</label>
        <StyledInput/>
        <span className='sureNameInputSpan'>მინიმუმ 2 ასო, ქართული ასოები</span>
       </div>
     </div>

     <div className='photoMailNum'>
       <div className='photoUpload'>
        <span className='photoSpan'>პირადი ფოტოს ატვირთვა</span>
          <input type='file' id='fileInput' className='uploadPhotoInput' placeholder='awdads' />
        <label htmlFor='fileInput' id='fileLabel' accept='image/*' >ატვირთვა</label>
        {/* onClick={handleUploadClick} ref={uploadRef} */}
       </div>
       <div className='aboutMe'>
         <label className='aboutMeLabel'>ჩემ შესახებ (არასავალდებულო)</label>
         <input type='text-area' className='aboutMeText' placeholder='ზოგადი ინფო შენ შესახებ'/>
       </div>

       <div className='mailParent'>
        <label className='mailLabel'>ელ.ფოსტა</label>
        <StyledInput type='email' />
        <span className='mailSpan'>უნდა მთავრდებოდეს @redberry.ge-ით</span>
       </div>
 
       <div className='mobileNumber'>
        <label className='mobileLabel'>მობილურის ნომერი</label>
        <StyledInput type='number' />
        <span className='mobileSpan'>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</span>
       </div>
     </div>

{/*        
 <Input   label={'სახელი'}
          description={'რაღაცა'}
           
          /> */}

       <div className='btnParent'> 
        <button className='pervPageBtn'>ᲣᲙᲐᲜ</button>
        <button className='nextPageBtn'>ᲨᲔᲛᲓᲔᲒᲘ</button>
       </div>
       
     </form>

     </div>

     <div className='infoChild'>
       <TotalInfo/>
     </div>
  </div>
  )
}

const StyledInput = styled.input `
   border: 1px solid #BCBCBC;
   height: 48px;
   background-color: #FFFFFF;
   border-radius: 4px;
   outline: none;
   padding: 0 0 0 8px;
`;