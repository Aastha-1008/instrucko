import React, { useState } from 'react';
import './Home.scss';
import coverImage from '../../assets/coverImage.webp';
import Tabs from '../Elements/Tabs/Tabs';
import Cards from '../Elements/cards/Cards';
import Pagination from '../Elements/Slider/Pagination/Pagination';

import math from './Images/math.svg';
import hindi from './Images/hindi.svg';
import english from './Images/english.svg';
import french from './Images/french.svg';
import spanish from './Images/Spanish.svg';
import german from './Images/German.svg';
import spanishlang from './Images/spanishlang.svg'
import hindilang from './Images/hindilang.svg';
import germanlang from './Images/germanlang.svg';
import frenchlang from './Images/frenchlang.svg';

import personlity from './Images/personality-development.svg';
import sustainability from './Images/sustainability.svg';
import financial from './Images/financial-literacy.svg';
import chess from './Images/chess.svg';
import creativeWriting from './Images/creative-writing.svg';
import publicSpeaking from './Images/public-speaking.svg';

import futureKid from './Images/future-kid.webp';

import assignCourse from './Images/assign-course.svg';
import beginLearning from './Images/begin-learning.svg';
import checkProgress from './Images/check-progress.svg';
import line from './Images/line.svg';
import straightLine from './Images/straightLine.svg';

import businessStandard from './Images/BusinessStandard.webp';
import midday from './Images/midday.webp';
import TheHindu from './Images/TheHindu.webp';
import toi from './Images/toi.webp';
import ys from './Images/ys.webp';

import Testimonial from '../Elements/Slider/Testimonial/Testimonial';
import VideoSection from '../Section/VideoSection/VideoSection';
import WhyInstrucko from '../Section/WhyInstrucko/WhyInstrucko';

import Holon from './Images/Holon IQ.jpg';
import childDevelopment from './Images/child development.jpg';

export default function Home() {

    const subjects = [
        {
            subjectName: 'English',
            about: [
                "Converse fluently with people",
                "Improve grammar and vocabulary",
                "Improve reading comprehension",
                "Improve writing skills"
            ],
            image: english
        }, {
            subjectName: 'Maths',
            about: [
                "Understanding the foundation of mathematics",
                "Building logical reasoning skills",
                "Building financial literacy",
                "Use mathematical ideas to model real-world problems"
            ],
            image: math
        }, {
            subjectName: 'French',
            about: [
                "DELF certified curriculum",
                "Learn to speak fluently",
                "Develop accurate pronunciation and intonation",
                "Improve cultural awareness"
            ],
            image: french
        }, {
            subjectName: 'Spanish',
            about: [
                "DELE certified curriculum",
                "Learn to speak fluently",
                "Develop accurate pronunciation and intonation",
                "Improve cultural awareness"
            ],
            image: spanish
        }, {
            subjectName: 'Hindi',
            about: [
                "DELE certified curriculum",
                "Learn to speak fluently",
                "Develop accurate pronunciation and intonation",
                "Improve cultural awareness"
            ],
            image: hindi
        }, {
            subjectName: 'German',
            about: [
                "Goethe certified curriculum",
                "Learn to speak fluently",
                "Develop accurate pronunciation and intonation",
                "Improve cultural awareness"
            ],
            image: german
        }
    ]
    const language = [
        {
            image: spanishlang,
            title: 'Spanish',
            tagline: '¡Hola genio!'
        }, {
            image: hindilang,
            title: 'Hindi',
            tagline: 'हैलो जीनियस!'
        }, {
            image: germanlang,
            title: 'German',
            tagline: 'hallo genie!'
        }, {
            image: frenchlang,
            title: 'French',
            tagline: 'Bonjour Génie !'
        }
    ]
    const shortCourse = [
        {
            image: personlity,
            title: 'Personality Development',
            tagline: 'Suggested Age 5+'
        }, {
            image: sustainability,
            title: 'Sustainabilty',
            tagline: 'Suggested Age 6+'
        }, {
            image: financial,
            title: 'Financial Literacy',
            tagline: 'Age 6+'
        }, {
            image: publicSpeaking,
            title: 'Public Speaking',
            tagline: 'Suggested Age 6+'
        }, {
            image: creativeWriting,
            title: 'Creative Writing',
            tagline: 'Suggested Age 6+'
        }, {
            image: chess,
            title: 'Chess',
            tagline: 'Suggested Age 4+'
        }
    ]

    return (
        <div className='homeSection'>
            <div className='coverSection'>
                <div className='coverTopSection'>
                    <div className='coverLeftSection'>
                        <h1>Your child's story <span className='redFont'>begins here</span></h1>
                        <h6>Unleash your child's potential with our best online learning platform for kids. Personalised online teaching built upon unique storytelling methods. Engaging learning which delivers exceptional outcomes.</h6>
                        <a href = "/trial-class"><button className='bg-blue'>Book a Trial</button></a>
                    </div>
                    <div className='coverRightSection'>
                        <img src={coverImage} alt="coverphoto" />
                    </div>
                </div>
                <div className='coverBottomSection'>
                    <h5>Did you know?</h5>
                    <div className='didyouknowItems'>
                        <p style={{ 'paddingRight': '2.5rem' }}><b>96%</b>  of instrucko students perform better in school exams than their peers</p>
                        <hr />
                        <p>instrucko students develop leadership qualities at a younger age</p>
                        <hr />
                        <p>instrucko students show academic improvement in just 5 classes</p>
                    </div>
                </div>
            </div>

            <div className='curriculum'>
                <div className='curriculumSection'>
                    <h6>Our Curriculum</h6>
                    <h2>From Public Speaking to Creative writing, instrucko online learning platform has it covered using <span className='orangeFont'>real life</span> topics.</h2>
                    <h5>A curriculum compliant with IB, IBCSE, CIE, CBSE, and ICSE standards embedded into engaging stories and narratives. Putting the cool back into school.</h5>
                    <div className='curriculumTabs'>
                        <Tabs subjects={subjects} />
                    </div>
                </div>
            </div>

            <div className='distinctLang'>
                <h3>Learn distinct language</h3>
                <div className='languageCourse'>
                    <Pagination subject={language} />
                </div>

                <h3>Short courses for upskilling</h3>
                <p>We provide with more advanced skills through additional education and training</p>
                <div className='shortCourse'>
                    <Pagination subject={shortCourse} />
                </div>
            </div>

            <WhyInstrucko/>

            <div className='buildFuture bg-blue'>
                <div className='info-buildFuture'>
                    <div className='buildFutureContent'>
                        <h1>Build their future from just ₹180 per class</h1>
                        <p>We know youd pay anything to ensure your kid's future success. Fortunately, it's even more affordable than you may think. Our best online learning platform provides trial classes. Start with it now!</p>
                        <a href = "/trial-class"><button>Book a Trial</button></a>
                        <div className='buildFutureImage'>
                            <img src={futureKid} alt="studentImage" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='learningMap'>
                <h6>Manage learning through our dashboard</h6>
                <h2>Our learning <span className="pinkFont">dashboard</span> makes it as easy as ABC</h2>
                <p>We use an advanced learning dashboard that makes managing your child’s progress simple. Understand their progress, set future goals, and watch them become more developed individuals – all from within your account.</p>
                <div className='learning'>
                    <div className='learning-container'>
                        <div className='learningway'>
                            <img src={assignCourse} alt="assign course"/>
                            <p className='title'>Assign courses</p>
                            <p className='tagline'>Choose from our wide variety of studies, and select initial courses.</p>
                            <img src={line} alt="line" className="absolute curve"/>
                            <img src={straightLine} alt="line" className="absolute straight"/>
                        </div>
                    </div>
                    <div className='learning-container'>
                        <div className='learningway'>
                            <img src={beginLearning} alt="assign course"/>
                            <p className='title'>Begin learning</p>
                            <p className='tagline'>Choose your preferred day and time and let the learning begin!</p>
                            <img src={line} alt="line" className="absolute curve"/>
                            <img src={straightLine} alt="line" className="absolute straight"/>
                        </div>
                    </div>
                    <div className='learning-container'>
                        <div className='learningway'>
                            <img src={checkProgress} alt="assign course"/>
                            <p className='title'>Check progress</p>
                            <p className='tagline'>Receive detailed reports and plan for next learning outcomes.</p>
                        </div>
                    </div>
                </div>
                <div className='button'>
                <a href = "/trial-class"><button className='bg-blue'>Book a Trial</button></a>
                </div>
            </div>

            <VideoSection/>

            <div className='testimonialSection'>
                <div className='reviewContainer'>
                    <h2>There's a reason that 95% of our customers undertake 3+ courses as a minimum with instrucko</h2>
                    <div className='peopleReview'>
                        <Testimonial />
                    </div>
                    <p className='testimonialTag'>We’ve improved academic results for 50k children.
                    Make your child one of them.</p>
                </div>
            </div>

            <div className='featuredIn'>
                <div className='featuredHeading'>Proud to be featured in </div>
                <div className='featuredBrand'>
                    <ul>
                        <div className='brandBox'><img src={businessStandard} alt="business Standard"/></div>
                        <div className='brandBox'><img src={midday} alt="mid day"/></div>
                        <div className='brandBox'><img src={TheHindu} alt="The Hindu"/></div>
                        <div className='brandBox'><img src={toi} alt="times of india"/></div>
                        <div className='brandBox'><img src={ys} alt = "ys"/></div>
                    </ul>
                </div>
            </div>

            <div className='academicDiary'>
                <h6>Blogs & Articles</h6>
                <h2>The academic <span className='orangeFont'>diary</span></h2>
                <div className='diaries'>
                    <div className='diary-container'>
                        <div className='diary-image'>
                            <img src={Holon} alt="diary"/>
                        </div>
                        <div className='diary-content'>
                            <h5>EDUCATION</h5>
                            <h2>Celebrating Instrucko: Named Among Europe’s Top 200 EdTech Startups for Language Learning</h2>
                            <p className='gray-color'>We are thrilled to announce that instrucko has been recognized as one of Europe’s most promising EdTech startups in the field of l...</p>
                            <p>By <b>Devvaki Aggarwal</b> on 10 Jul 2024</p>
                        </div>
                    </div>
                </div>
                <div className='diaries'>
                    <div className='diary-container'>
                        <div className='diary-image'>
                            <img src={childDevelopment} alt="diary"/>
                        </div>
                        <div className='diary-content'>
                            <h5>CHILD DEVELOPMENT</h5>
                            <h2>Effective Strategies for Vocabulary Expansion in English-Speaking Classes</h2>
                            <p className='gray-color'>Increasing one's vocabulary is essential to learning any language. Having a large vocabulary improves comprehension and confidence..</p>
                            <p>By <b>Devvaki Aggarwal</b> on 17 Jun 2024</p>
                        </div>
                    </div>
                </div>
                <a href="">View All Blogs</a>
            </div>

            <div className='childJourney bg-blue'>
                <h1> Your child's <span className='greenFont'>journey</span> begins here.</h1>
                <a href = "/trial-class"><button className='bg-green'>Book a Trial</button></a>
            </div>

        </div>
    )
}
