import React, { useEffect, useState } from 'react';
import './Payment.scss';

import pic1 from '../images/ourParentPic1.png';
import pic2 from '../images/ourParentPic2.png';


export default function Payment({ selectedSubjects, setSelectedSubjects }) {

  const course299 = ["English", "Maths", "Public Speaking", "Creative Writing", "Personality Development"];
  const [sum, setSum] = useState(0);

  const removeSubject = (name, course) => {
    setSelectedSubjects((prevSubjects) => prevSubjects.filter(
      (subject) => !(subject.name === name && subject.course === course)
    ));
  }

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

  useEffect(() => {
    let total = selectedSubjects.reduce((acc, { course }) => acc + parseInt(course, 10), 0);
    if (selectedSubjects.length > 4) total -= 200;
    setSum(total);
  }, [selectedSubjects]);

  return (
    <div className='Payment-section'>
      <h2>Order Summary</h2>
      <div className='subjects-order'>
        {selectedSubjects.map(({ name, course }) => (
          <div className='subject'>
            <div className='subjectName'><h3>{name}</h3><p>Trial Class | Indian Teacher</p></div>
            <div className='amount'><h3>₹{course}</h3><button onClick={() => removeSubject(name, course)}>x</button></div>
          </div>
        ))}
        {selectedSubjects.length > 3 && <div className='subject'>
          <div className='subjectName' style={{ color: 'black', fontWeight: '600', fontSize: '20px' }}>Discount</div>
          <div className='amount'>-₹200</div>
        </div>}
        <hr />
        <div className='subject'>
          <div className='subjectName' style={{ color: 'black', fontWeight: '700', fontSize: '20px' }}>Total</div>
          <div className='amount'>₹{sum}</div>
        </div>
        <button>Pay Now</button>
        <div className='frequently'>
          <p>Frequently bought </p>
          <div className='course299'>
            {course299.map((subjectName) => (
              <div className={`subjectName ${isSelected(subjectName, '299') ? 'selected' : ''}`}
                key={subjectName}
                onClick={() => handleSubjectClick(subjectName, '299')}>{subjectName}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='our-parents'>
        <p>Our Parents</p>
        <div className='images'>
          <img src={pic1} alt="pic1" />
          <img src={pic2} alt="pic2" />
        </div>
      </div>
    </div>
  )
}
