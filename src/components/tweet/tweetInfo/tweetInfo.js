import React from 'react';

const TweetInfo = (props) => {
  return ( 
    <div className="tweet-info-container">
      <div className="tweet-info__label">
        { props.label }
      </div>
      <div className="tweet-info__count">
        { props.count }
      </div>
    </div>
  );
}

export default TweetInfo;