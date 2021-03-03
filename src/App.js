import React, { useState } from 'react';

import Tweet from './components/tweet/tweet';

import tweets from './resources/mockdata/tweetData';

import avatar1 from './resources/avatarLlama.jpg';
import avatar2 from './resources/tweetface.jpg';

import './App.css';

function App() {
  const [tweetData, setTweetData] = useState(tweets);

  const addLikes = (id) => {
    const tempTweetData = [...tweetData];

    const flatTempTweetData = tempTweetData.map((tweet) => tweet.id);
    const tweetIndex = flatTempTweetData.indexOf(id);

    tempTweetData[tweetIndex].likes += 1;

    setTweetData(tempTweetData);
  }

  return (
    <div className="App">
      <Tweet image={ avatar1 } data={ tweetData[0] } handleLikeBtn={ addLikes } />
      <Tweet image={ avatar2 } data={ tweetData[1] } handleLikeBtn={ addLikes } />
    </div>
  );
}

export default App;
