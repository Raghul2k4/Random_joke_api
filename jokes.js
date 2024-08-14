import React, { useState } from 'react';
import axios from 'axios';

const Joke = () => {
  const [joke, setJoke] = useState(null);
  const [showJoke, setShowJoke] = useState(true);

  const fetchJoke = async () => {
    try {
      const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
      setJoke(response.data);
      setShowJoke(false);
    } catch (error) {
      console.error('Error caught:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {showJoke ? (
        <div>
          <h2>Wanna hear a joke?</h2>
          <button onClick={fetchJoke}>YES</button>
        </div>
      ) : (
        <div>
          <h3>{joke.setup}</h3>
          <p>{joke.punchline}</p>
          <button onClick={fetchJoke}>Get Another Joke</button>
        </div>
      )}
    </div>
  );
};

export default Joke;
