import React from 'react';
import './BasicInfo.scss';

export default function BasicInfo() {
  return (
    <div className='basicInfo'>
        <input type="text" placeholder="Child's name" required/>
        <input type="tel" placeholder='Phone Number' required/> 
        <input type="date" placeholder="Child's date of birth" required />
        <input type="email" placeholder="Parent's email" required/>
    </div>
  )
}
