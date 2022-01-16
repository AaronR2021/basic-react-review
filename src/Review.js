import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import reviews from './data';

const Review = ({reviewList}) => {
  //useState to hold index
  const [index, setIndex] = useState(0);


  //check if index is between limit
  function checkLimit(i){
    console.log(i, reviewList.length);
    if (i >=reviewList.length) {
      console.log("im here");
      return setIndex(0);
    }
    if (i < 0) {
     return setIndex(reviewList.length-1);
    }
    else{return setIndex(i);}
  }
  //function to increase index by 1
  const increase=()=>{
    checkLimit(index+1)
  }
  //function to decrease index by 1
  const  decrease=()=>{
    checkLimit(index-1)
  }
  //function to randomize index
    console.log(reviewList);

  return (
    <>
      <div className="review">
        <div className="img">
          <img src={reviewList[index].image} className="img-review" />
          <FaQuoteRight className="quote" />
        </div>
        <div className="position">
          <h4 className="name">{reviewList[index].name}</h4>
          <p className="job">{reviewList[index].job}</p>
        </div>
        <p className="text">{reviewList[index].text}</p>
        <div className="flex-row">
          <button onClick={decrease}>
            <FaChevronLeft />
          </button>
          <button onClick={increase}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Review;
