import React from 'react';
import './WhyInstrucko.scss';
import whyInstrucko from './Images/whyInstructo.svg';

export default function WhyInstrucko() {
    return (
        <div className='whythis'>
            <h6>Why instrucko</h6>
            <h2>Give them a <span className='greenFont'>better start</span></h2>
            <p>Learning has evolved. Find out more about what makes instrucko different, or experience it for yourself.</p>
            <div className='whyContent'>
                <div className='whycontent-left'>
                    <div className='why-box'>
                        <h5>Improvement in 5 classes</h5>
                        <p>Courses are designed to academic specifications, ensuring better school outcomes. Choose the goals for each teaching session.</p>
                    </div>
                    <div className='why-box'>
                        <h5>Content created by experts from University of Oxford</h5>
                        <p>Using groundbreaking storytelling techniques based on leading research, which enhance engagement and knowledge retention</p>
                    </div>
                </div>
                <div className='whycontent-centre'>
                    <img src={whyInstrucko} alt="whyInstrcko" />
                    <button className='bg-blue'>Book a trial</button>
                </div>
                <div className='whycontent-right'>
                    <div className='why-box'>
                        <h5>A new standard in teaching</h5>
                        <p>Recruiting only internationally certified teachers, our learning platform pairs your kids with the ideal teacher for their needs and learning style.</p>
                    </div>
                    <div className='why-box'>
                        <h5>Beyond the classroom</h5>
                        <p>Holistic learning methods, gamified studying, and integrated counselling build more rounded and emotionally intelligent children.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
