import React, { useState } from 'react';
import './Header.scss';
import logoBlack from '../../assets/logoBlack.webp';
import menuIcon from '../../assets/menuIcon.png';
import lock from '../../assets/lock.svg';

export default function Header() {

    const [dropdown, setDropdown] = useState(false);

    const showDropdown = () => {
        setDropdown(!dropdown);
    }


    return (
        <div className='headerComponent'>
            <div className='headerSection'>
                <div className='logo'>
                    <a href="/"><img src={logoBlack} alt="logo" className="sitelogo" /></a>
                </div>
                <div className={`menuItems `}>
                    <ul>
                        <li>For Students</li>
                        <li>For Teachers</li>
                        <li>For School</li>
                        <li>List Your Course</li>
                    </ul>
                    <img src={menuIcon} alt="menuIcon" onClick={showDropdown} />
                </div>
                <div className='signInBooking'>
                    <div className='signINSignOut'>
                        <img src={lock} alt="lock" />
                        <p>Sign In</p>
                    </div>
                    <div className='trialBtn'>
                        <a href="/trial-class"><button> Book a Trial</button></a>
                    </div>
                </div>


            </div>
            <div className={`dropdownMenu ${dropdown ? 'show' : ''}`}>
                <ul>
                    <li>For Student</li>
                    <li>For Teacher</li>
                    <li>For School</li>
                    <li>List Your Course</li>
                </ul>
            </div>
        </div>
    )
}
