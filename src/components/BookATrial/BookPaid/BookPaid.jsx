import React from 'react';
import './BookPaid.scss';

export default function BookPaid() {

    const course299 = ["English","Spanish","Public Speaking","Financial Literacy","Phonics","Maths","German","Creative Writing","Sustainability","French","Hindi","Personality Development","Chess"];
    const course799 = ["English","Spanish","Creative Writing","Sustainability","Maths","German","Personality Development","Chess","French","Public Speaking","Financial Literacy", "Phonics"];

  return (
    <div className='paidBooking-section'>
      <h2>Select Subjects with India Teacher ( ₹ 299 )</h2>
      <div className='course299'>
        {course299.map((subjectName)=>(
            <div className='subjectName'>{subjectName}</div>
        ))}
      </div>
      <h2>Select Subjects with India Teacher ( ₹ 799 )</h2>
      <div className='course799'>
        {course799.map((subjectName)=>(
            <div className='subjectName'>{subjectName}</div>
        ))}
      </div>
    </div>
  )
}
