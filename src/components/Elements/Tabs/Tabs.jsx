import React,{useState} from 'react';
import './Tabs.scss';

export default function Tabs({subjects}) {
  const [activeTab , setActiveTab] = useState('English');

  const handleTabClick = (subjectName) => {
    setActiveTab(subjectName);
  }

  const activeSubject = subjects.find(subject => subject.subjectName === activeTab);

  return (
    <div className='tab-container'>
      <div className='tab-header'>
        <ul>
        {subjects.map(subject=>(
          <li
            key={subject.subjectName} 
            className={` ${activeTab === subject.subjectName ? 'active' : ''} tab`} 
            onClick={() => handleTabClick(subject.subjectName)}
          >
            <button >{subject.subjectName}</button>
          </li>       
        ))}
        </ul>
      </div>


      <div className='tab-content'>
        <div className='tab-content-left'>
          <ul>
            {activeSubject.about.map((point,index) => (
              <li key={index}>&#x2705; &nbsp;{point}</li>
            ))}
          </ul>
          <div className='bookingBtn'>
          <a href = "/trial-class"><button className='book-trial bg-blue'>Book a Trial</button></a>
            <p>Teachers: India & UK</p>
          </div>
        </div>
        <div className='tab-content-right'>
          <img src={activeSubject.image} alt={activeSubject.subjectName} className='subject-image'/>
        </div>
        
      </div>
    </div>
  )
}
