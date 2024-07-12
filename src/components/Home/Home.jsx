import React from 'react';
import './Home.scss';
import coverImage from '../../assets/coverImage.webp';

export default function Home() {
  return (
    <div className='homeSection'>
        <div className='coverSection'>
            <div className='coverTopSection'>
                <div className='coverLeftSection'>
                    <h1>Your child's story <span>begins here</span></h1>
                    <h6>Unleash your child's potential with our best online learning platform for kids. Personalised online teaching built upon unique storytelling methods. Engaging learning which delivers exceptional outcomes.</h6>
                    <button>Book a Trial</button>
                </div>
                <div className='coverRightSection'>
                    <img src={coverImage} alt="coverphoto"/>
                </div>
            </div>
            <div className='coverBottomSection'>
                <h5>Did you know?</h5>
                <div className='didyouknowItems'>
                    <p><b>96%</b>  of instrucko students perform better in school exams than their peers</p>
                    <hr/>
                    <p>instrucko students develop leadership qualities at a younger age</p>
                    <hr/>
                    <p>instrucko students show academic improvement in just 5 classes</p>
                </div>
            </div>
        </div>

        <div className='curriculum'>
            
        </div>
      
    </div>
  )
}
