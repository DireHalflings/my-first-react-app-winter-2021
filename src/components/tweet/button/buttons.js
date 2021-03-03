import React from 'react';

export const OptionsBtn = () => {
  return ( 
    <div className="options-btn">
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export const ShareBtn = () => {
  return ( 
    <div className="options-btn">
      <i className="fas fa-share"></i>
    </div>
  );
}

export const CommentBtn = () => {
  return ( 
    <div className="options-btn">
      <i className="far fa-comment"></i>
    </div>
  );
}

export const RetweetBtn = () => {
  return ( 
    <div className="options-btn">
      <i className="fas fa-retweet"></i>
    </div>
  );
}

export const FavoritesBtn = (props) => {
  return ( 
    <div className="options-btn" onClick={() => props.handleLikeBtn(props.tweetId)}>
      <i className="far fa-heart"></i>
    </div>
  );
}