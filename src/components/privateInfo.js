import './privateInfo.css';
import caret from '../symbols/caret.png';
import React, { useState } from "react";
import { MyHeader } from '../components/globals/header';
import { TotalInfo }  from './globals/totalInfo';
import { PageTwo } from './pagetwo/pageTwoCode';


export default function PrivateInfo() {

  const [tab, setTab] = useState(1);

  return (
   <div className='infoPage'>

    <div className='infoParent'>
     <div className='headerParent'>
      <figure className='resetParent'>
       <img src={caret} className='backReset'/>
      </figure>
      <MyHeader h2='პირადი ინფო' span='1/3'/>
    </div>

    <form className='pageInfo'>  
      <PageTwo/>
    </form>
    </div>

    <div className='infoChild'>
      <TotalInfo />
    </div>
  
  </div>
  )
};