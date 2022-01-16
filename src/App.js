import React,{useState} from 'react';
import Review from './Review';
import data from './data'
function App() {
  const [reviewList, setReviewList] = useState(data)
  
  return (
    <div className="body">
      <div className="title-container">
        <h1 className="title">Our Reviews</h1>
        <hr className="border-bottom" />
      </div>
      <div className="content">
        {<Review reviewList={reviewList} />        
        }
      </div>
    </div>
  );
  
}

export default App;
