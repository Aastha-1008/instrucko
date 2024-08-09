import React, { useState, useEffect, useRef } from 'react';
import './Testimonial.scss';
import leftArrow from '../../Images/left-arrow.svg';
import rightArrow from '../../Images/right-arrow.svg';

import quote from '../../Images/quote.svg';
import shreya from './Images/shreya.webp';
import sandhya from './Images/sandhya.webp';
import renu from './Images/renu.webp';
import jasmine from './Images/jasmine.webp';

export default function Testimonial() {
    const testimonial = [
        {
            title: 'Confidence building',
            image: shreya,
            name: 'Shreya Sureka',
            relation: 'Mother of Viaan, Grade 6',
            review: 'Thank you instrucko for providing an interactive session. instrucko lesson plans make complex concepts easy to learn. Viaan not only learnt the tricks to read basic sentences ( phonetic base reading) but also got a positive push to try a little more difficult level and read more books. To boost Viaan’s confidence, the teacher always gives timely feedback.',
        }, {
            title: 'Brilliant online learning',
            image: jasmine,
            name: 'Jasmine Pestonji',
            relation: 'Mother of Arianah, Grade 5',
            review: 'Arianah really liked her teachers and they managed to develop a bond even though it was virtual',
        }, {
            title: 'Learning made fun',
            image: sandhya,
            name: 'Sandhya Raju',
            relation: 'Mother of Vikramaditya Raju, Grade 6',
            review: 'My kids love the time they spend with instrucko. The learning is fun, interactive, engaging, and really personalized.',
        }, {
            title: 'Confidence building',
            image: renu,
            name: 'Renu Yadav',
            relation: 'Mother of Rudra, 5',
            review: "instrucko has made my child become an excellent speaker. He started improving in just 5-6 classes with instrucko's brilliant content and teachers. These personalised classes have helped him understand how the language skills are adapted, in a fun and engaging way.",
        }
    ];

    const getItemsPerPage = () => {
        if (window.innerWidth > 1000) {
            return 2;
        } else {
            return 1;
        }
    };

    const [currPage, setCurrPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [data, setData] = useState([]);
    const [itemPerPage, setItemPerPage] = useState(getItemsPerPage());
    const intervalRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setItemPerPage(getItemsPerPage());
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setPageCount(Math.ceil(testimonial.length / itemPerPage));
    }, [itemPerPage, testimonial.length]);

    useEffect(() => {
        const start = currPage * itemPerPage;
        const end = start + itemPerPage;
        setData(testimonial.slice(start, end));
    }, [currPage, itemPerPage]);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrPage(prevPage => {
                if (prevPage < pageCount - 1) {
                    return prevPage + 1;
                } else {
                    return 0;
                }
            });
        }, 3000);

        return () => clearInterval(intervalRef.current);
    }, [pageCount]);

    const handlePageChange = (direction) => () => {
        setCurrPage((prevPage) => {
            if (direction === 'next') {
                if (prevPage < pageCount - 1) return prevPage + 1;
                else return 0;
            }
            else if (direction === 'prev') {
                if (prevPage > 0) return prevPage - 1;
                else return pageCount - 1;
            }
            else return prevPage;
        });
    };

    return (
        <div className='testimonial'>
            <div className='testimonial-left-button' style={{ opacity: testimonial.length === itemPerPage ? 0 : 1 }}>
                <img
                    src={leftArrow}
                    alt="left-arrow"
                    onClick={handlePageChange('prev')}
                />
            </div>

            <div className='testimonial-content' >
                {data.map(({ title, image, name, relation, review }) => (
                    <div className='peopleReview' key={name}>
                        <h1>{title}</h1>
                        <div className="photoQuote">
                            <div className='quote'>
                                <img src={quote} alt="quote" />
                            </div>
                            <div className='personPhoto'>
                                <img src={image} alt="photo" className='personPhoto' />
                            </div>
                        </div>
                        <h4>{name}</h4>
                        <h6>{relation}</h6>
                        <p>" {review} "</p>
                    </div>
                ))}
            </div>
            <div className='testimonial-right-button' style={{ opacity: testimonial.length === itemPerPage ? 0 : 1 }}>
                <img
                    src={rightArrow}
                    alt="right-arrow"
                    onClick={handlePageChange('next')}
                />
            </div>
        </div>
    )
}
