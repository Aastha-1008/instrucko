import React, { useState } from 'react';

export default function BookPaid({selectedSubjects , setSelectedSubjects, setStep}) {

  const course299 = ["English", "Spanish", "Public Speaking", "Financial Literacy", "Phonics", "Maths", "German", "Creative Writing", "Sustainability", "French", "Hindi", "Personality Development", "Chess"];
  const course799 = ["English", "Spanish", "Creative Writing", "Sustainability", "Maths", "German", "Personality Development", "Chess", "French", "Public Speaking", "Financial Literacy", "Phonics"];

  const handleSubjectClick  = (subjectName , course)=>{
    const subjectIndex = selectedSubjects.findIndex(
      (subject)=>subject.name === subjectName && subject.course === course
    );
    if(subjectIndex > -1){
      setSelectedSubjects((prevSubjects)=>prevSubjects.filter((_,index) => index !== subjectIndex));
    }
    else{
      setSelectedSubjects((prevSubjects)=>[...prevSubjects , {name: subjectName , course: course}])
    }
  }

  const isSelected = (subjectName , course) => {
    return selectedSubjects.some(
      (subject)=> subject.name === subjectName && subject.course === course
    );
  }

  return (


    <div className='paidBooking-section'>
      <h2>Select Subjects with India Teacher ( ₹ 299 )</h2>
      <div className='course299'>
        {course299.map((subjectName) => (
          <div className={`subjectName ${isSelected(subjectName , '299')? 'selected' : ''}`}
          key={subjectName}
          onClick={() => handleSubjectClick(subjectName, '299')}>{subjectName}</div>
        ))}
      </div>
      <h2>Select Subjects with India Teacher ( ₹ 799 )</h2>
      <div className='course799'>
        {course799.map((subjectName) => (
          <div className={`subjectName ${isSelected(subjectName , '799')? 'selected' : ''}`}
          key={subjectName}
          onClick={() => handleSubjectClick(subjectName, '799')}>{subjectName}</div>
        ))}
      </div>
      {selectedSubjects.length>0 && <button className='bg-blue' style={{color:'white',marginLeft: '40%'}} onClick={()=>setStep(4)}>Next</button>}
    </div>
  )
}
