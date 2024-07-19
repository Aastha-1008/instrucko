import React from 'react';
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

import whyInstrucko from './Images/whyInstructo.svg';
import futureKid from './Images/future-kid.webp';

import assignCourse from './Images/assign-course.svg';
import beginLearning from './Images/begin-learning.svg';
import checkProgress from './Images/check-progress.svg';
import line from './Images/line.svg';
import straightLine from './Images/straightLine.svg';

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
                        <h1>Your child's story <span>begins here</span></h1>
                        <h6>Unleash your child's potential with our best online learning platform for kids. Personalised online teaching built upon unique storytelling methods. Engaging learning which delivers exceptional outcomes.</h6>
                        <button>Book a Trial</button>
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
                    <h2>From Public Speaking to Creative writing, instrucko online learning platform has it covered using <span>real life</span> topics.</h2>
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

            <div className='whythis'>
                <h6>Why instrucko</h6>
                <h2>Give them a <span>better start</span></h2>
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
                        <button>Book a trial</button>
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

            <div className='buildFuture'>
                <div className='info-buildFuture'>
                    <div className='buildFutureContent'>
                        <h1>Build their future from just ₹180 per class</h1>
                        <p>We know youd pay anything to ensure your kid's future success. Fortunately, it's even more affordable than you may think. Our best online learning platform provides trial classes. Start with it now!</p>
                        <button>Book a Trial</button>
                        <div className='buildFutureImage'>
                            <img src={futureKid} alt="studentImage" />
                        </div>
                    </div>
                </div>

            </div>

            <div className='learningMap'>
                <h6>Manage learning through our dashboard</h6>
                <h2>Our learning <span>dashboard</span> makes it as easy as ABC</h2>
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
                            <img src={line} alt="line" className="absolute"/>
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
                    <button>Book a Trial</button>
                </div>
            </div>
        </div>
    )
}
