import React from 'react';
import './Cards.scss';

export default function Cards({image,title,tagline}) {
  return (
    <div className='cards-container' key={title}>
        <a href="" >
            <div className='card'>
                <div className='imgSection'>
                    <img src={image} alt="titleImg"/>
                </div>
                <h3>{title}</h3>
                <p>{tagline}</p>
            </div>
        </a>
    </div>
  )
}
