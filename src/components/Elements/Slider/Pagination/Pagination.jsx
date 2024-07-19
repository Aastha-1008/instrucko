// src/components/Pagination.jsx
import React, { useState, useEffect,useRef } from 'react';
import './Pagination.scss';
import leftArrow from '../../Images/left-arrow.svg';
import rightArrow from '../../Images/right-arrow.svg';
import Cards from '../../cards/Cards';

export default function Pagination({ subject }) {
  const [data, setData] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const getItemsPerPage = () => {
    if (window.innerWidth < 600) {
      return 2;
    } else if (window.innerWidth < 1200) {
      return 3;
    } else {
      return 4;
    }
  };
  const [itemPerPage,setItemPerPage] = useState(getItemsPerPage());
  const intervalRef = useRef(null);



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


  useEffect(() => {
    setPageCount(Math.ceil(subject.length / itemPerPage));
    updateVisibleData();
  }, [subject, currPage]);

  

  const updateVisibleData = () => {
    const start = currPage ;
    const end = start + itemPerPage;
    setData(subject.slice(start, end));
  };

  const handlePageChange = (direction) => () => {
    setCurrPage((prevPage) => {
      if (direction === 'next'){
        if(prevPage < pageCount - 1)return prevPage + 1;
        else return 0;
      } 
      else if (direction === 'prev'){
        if(prevPage>0)return prevPage - 1;
        else return pageCount -1;
      } 
      else return prevPage;
    });
  };

  

  return (
    <div className='pagination-container'>
      <div className='pagination-left-button' style={{ opacity: subject.length === itemPerPage ? 0 : 1 }}>
        <img
          src={leftArrow}
          alt="left-arrow"
          onClick={handlePageChange('prev')}
        />
      </div>

      <div className='pagination-content' >
        {data.map(({ image, title, tagline }) => (
          <Cards title={title} image={image} tagline={tagline} key={title} />
        ))}
      </div>

      <div className='pagination-right-button' style={{ opacity: subject.length === itemPerPage ? 0 : 1 }}>
        <img
          src={rightArrow}
          alt="right-arrow"
          onClick={handlePageChange('next')}
        />
      </div>
    </div>
  );
}
