import React from 'react';

export default function FreeTrial() {

    const subject = ["English", "Spanish", "German" , "Personality Development" , "Chess", " Phonics", "French" ,"Public Speaking", "Financial Literacy","Maths","Hindi", "Creative Writing" , "Sustainability"]

  return (
    <div className='freeTrialSection'>
      <h2>Select Subjects</h2>
      <div className='freeSubjects'>
      {subject.map((subjectName)=>(
        <div className='subjectName' key={subjectName}>{subjectName}</div>
      ))}
      </div>
    </div>
  )
}
