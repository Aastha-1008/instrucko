import React, { useState } from 'react';
import './Accordian.scss';

export default function Accordian({title,content}) {
    const [isActive , setIsActive] = useState(false);
  return (
    <div className='accordian-item'>
        <div className={`accordian-title ${isActive ? 'orange' : ''}`} onClick={()=>setIsActive(!isActive)}>
            <div>{title}</div>
            <div>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && 
            <div className='accordian-content'>
              {content.map(({contentName,contentLink}) => (
                  <div className='content' key={contentName}>
                    <a href={contentLink}>{contentName}</a>
                  </div>
              ))
              }
            </div>
        }
    </div>
  )
}
