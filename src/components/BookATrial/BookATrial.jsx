import React from 'react';
import './BookATrial.scss';
import { useState } from 'react';

import BasicInfo from './BasicInfo/BasicInfo';
import Benefits from './Benefits/Benefits';
import BookPaid from './BookPaid/BookPaid';

export default function BookATrial() {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        childName:'',
        childDOB:'',
        parentPhn:'',
        parentEmail:'',
    })

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleInputData = input => e => {
        const {value} = e.target;

        setFormData(prevState => ({
            ...prevState,[input]: value
        }));
    }


  return (
    <div className='bookATrialSection'>
        <h1>Experience the <span className='blueFont'>instrucko difference</span></h1>

        <div className='form'>
            <div className='progressBar'>
                <div className='colored-progressBar' style={{backgroundColor: 'rgb(27 83 244)' , width: step === 0 ? '33%' :step === 1 ? "66%" : "100%" ,height: '0.1rem'}}></div>
            </div>
            <div className='form-content'>
                {step == 0 && <BasicInfo/>}
                {step === 1 && <Benefits/>}
                {step === 2 && <BookPaid/>}
            </div>
            <div className='form-btn'>
                {step==0 && <button className='bg-blue' style={{color: 'white'}} onClick={nextStep}>Next</button>}
                {step==1 && <div className='benefits-btn'>
                    <button className='bg-blue' style={{color: 'white'}} onClick={nextStep}>Book Paid Trial ₹ 299</button>
                    <button className='bg-white' style={{color: 'rgb(27 80 240)'}}>Continue with a free trial</button></div>
                }
            </div>
        </div>

    </div>
  )
}
