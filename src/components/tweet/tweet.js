import React from 'react';

import Avatar from './avatar/avatar';
import Handle from './handle/handle';
import TweetInfo from './tweetInfo/tweetInfo';
import { OptionsBtn, CommentBtn, FavoritesBtn, RetweetBtn, ShareBtn } from './button/buttons';

import './tweet.css';

const Tweet = ({ image, data, handleLikeBtn }) => {
  return ( 
    <div className="tweet-container">
      <div className="tweet__content">
        <div className="tweet__avatar-container">
          <Avatar avatar={ image } />
        </div>
        <div className="tweet__main">
          <div className="tweet__main-handle">
            <div className="main-handle__name">
              <Handle 
                name={ data.name } 
                handle={ data.handle } 
                date={ data.date } 
              />
            </div>
            <div className="main-handle__options-btn"><OptionsBtn /></div>
          </div>
          <div className="tweet__content-text">
            { data.text }
          </div>
        </div>
      </div>
      <div className="tweet__info-text">
        <TweetInfo label="Retweets" count={ data.retweets } />
        <TweetInfo label="Quote Tweets" count={ data.quoteTweets } />
        <TweetInfo label="Likes" count={ data.likes } />
      </div>
      <div className="tweet__menu">
      <CommentBtn />
      <RetweetBtn /> 
      <FavoritesBtn handleLikeBtn={ handleLikeBtn } tweetId={ data.id } />
      <ShareBtn />
      </div>
    </div>
  );
}

export default Tweet;