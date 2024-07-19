import React from 'react';
import './Footer.scss';
import twitter from '../../assets/twitter.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import youtube from '../../assets/youtube.png';
import logowhite from '../../assets/logo-white.svg';
import Accordian from '../Elements/Accordian/Accordian.jsx';

export default function Footer() {
  const accordianData = [
    {
      title: 'English Worksheets',
      content: [
        {
          contentName: 'Age 3 - 5',
          contentLink: ''
        },
        {
          contentName: 'Age 6 - 8',
          contentLink: ''
        },
        {
          contentName: 'Age 9 - 11',
          contentLink: ''
        },
        {
          contentName: 'Age 12 - 14',
          contentLink: ''
        }
      ]
    },
    {
      title: 'French Worksheets',
      content: [
        {
          contentName: 'Age 3 - 5',
          contentLink: ''
        },
        {
          contentName: 'Age 6 - 8',
          contentLink: ''
        },
        {
          contentName: 'Age 9 - 11',
          contentLink: ''
        },
        {
          contentName: 'Age 12 - 14',
          contentLink: ''
        }
      ]
    },
    {
      title: 'Maths Worksheets',
      content: [
        {
          contentName: 'Age 3 - 5',
          contentLink: ''
        },
        {
          contentName: 'Age 6 - 8',
          contentLink: ''
        },
        {
          contentName: 'Age 9 - 11',
          contentLink: ''
        },
        {
          contentName: 'Age 12 - 14',
          contentLink: ''
        }
      ]
    },
    {
      title: 'Spanish Worksheets',
      content: [
        {
          contentName: 'Age 3 - 5',
          contentLink: ''
        },
        {
          contentName: 'Age 6 - 8',
          contentLink: ''
        },
        {
          contentName: 'Age 9 - 11',
          contentLink: ''
        },
        {
          contentName: 'Age 12 - 14',
          contentLink: ''
        }
      ]
    },
    {
      title: 'German Worksheets',
      content: [
        {
          contentName: 'Age 3 - 5',
          contentLink: ''
        },
        {
          contentName: 'Age 6 - 8',
          contentLink: ''
        },
        {
          contentName: 'Age 9 - 11',
          contentLink: ''
        },
        {
          contentName: 'Age 12 - 14',
          contentLink: ''
        }
      ]
    },
    {
      title: 'Financial Literacy Worksheets',
      content: [
        {
          contentName: 'Age 3 - 5',
          contentLink: ''
        },
        {
          contentName: 'Age 6 - 8',
          contentLink: ''
        },
        {
          contentName: 'Age 9 - 11',
          contentLink: ''
        },
        {
          contentName: 'Age 12 - 14',
          contentLink: ''
        }
      ]
    },
    
  ]

  return (
    <div className= "FooterSection">
      <div className='upperFooter'>
        <div className='section'>
          <div className='footerSection1'>
            <img src={logowhite} alt="websitelogo"/>
            <p>www.instrucko.com specialises in teaching English, Maths, Public Speaking, 
              Creative Writing, Phonics, Sustainability, Personality Development and languages
              to children between the age of 3-15 years. instrucko's live online classes are 
              conducted by teachers from India as well as by native speakers. Its courseware 
              has been created by leading educationists in the United Kingdom and alumni from 
              University of Oxford.</p>
          </div>
          <div className='footerSection2'>
            <h3>Free Worksheets</h3>
            <div className='worksheetTopic'>
                <div className='accordian'>
                  {accordianData.map(({title,content}) => (
                    <div key={title}>
                    <Accordian title={title} content={content}/>
                    </div>
                  ))}
                </div>
              
            </div>
            <h3>Free Live Video</h3>
            <div className='liveVideos'>
              <div className='videosSection1'>
                <ul>
                  <li>Live Hindi Classes</li>
                  <li>Live French Classes</li>
                  <li>Live Spanish Classes</li>
                  <li>Live Public Speaking Classes</li>
                  <li>Live Personality Development Classes</li>
                  <li>Live Sustainability Classes</li>
                </ul>
              </div>
              <div className='videosSection2'>
                <ul>
                  <li>Live English Classes</li>
                  <li>Live Maths Classes</li>
                  <li>Live German Classes</li>
                  <li>Live  Creative Writing Classes</li>
                  <li>Live Financial Literacy Classes</li>
                  <li>Live Phonics Classes</li>
                </ul>
              </div>

            </div>
          </div>
          <div className='footerSection3'>
            <h3>Courses & Curriculum</h3>
            <ul>
              <li>Hindi</li>
              <li>English</li>
              <li>French</li>
              <li>Maths</li>
              <li>spanish</li>
              <li>German</li>
              <li>Public Speaking</li>
              <li>Creative Writing</li>
              <li>Personality Developemnt</li>
              <li>Financial Literacy</li>
              <li>Sustainabilty</li>
              <li>Phonics</li>
              <li>Chess</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='lowerFooter'>
        <div className='emailSubscribe'>
          <div className="lowerFooterSection1">
            <h4>Stay tuned with our newsletter</h4>
            <div className='emailSubscribeBtn'>
              <input type='email' placeholder='Enter your email' className='email' required/>
              <button>Subscribe now</button>
            </div>
          </div>
          <div className='lowerFooterSection2'>
            <h3>instrucko</h3>
            <div className='instruckoLinks1'>
              <ul>
                <li>About Us</li>
                <li>News & Press</li>
                <li>Careers</li>
              </ul>
              <ul>
                <li>Blog</li>
                <li>Contact Us</li>
                <li>Refer a Friend</li>
              </ul>
            </div>
          </div>
          <div className='lowerFooterSection3'>
            <h3>Partner with us</h3>
            <ul>
              <li>List your course</li>
              <li>For Corporates</li>
            </ul>
          </div>
        </div>
        
      </div>
      <div className='connectSection'>
        <div className='section'>
          <div className='socialMedia'>
            <h4>Follow us</h4>
            <div className="socialMediaIcon">
              <a href="https://x.com/instrucko_edu"><img src={twitter} alt="twitter"/></a>
              <a href="https://www.facebook.com/instrucko"><img src={facebook} alt="facebook"/></a>
              <a href="https://www.instragram.com/instrucko"><img src={instagram} alt="instagram"/></a>
              <a href="https://www.linkedin.com/company/instrucko/"><img src={linkedin} alt="linkedin"/></a>
              <a href="https://www.youtube.com/channel/UC15DENuuGBVEsaYl53OoRpw/videos?view=0&sort=p&shelf_id=0"><img src={youtube} alt="youtube"/></a>
            </div>
          </div>
          <div className='connectLinks'>
            <ul>
              <li>Disclaimer</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Sitemap</li>
              <li>Why us</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};
