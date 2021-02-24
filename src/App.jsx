import React, { useEffect, useState } from 'react';
import ky from 'ky';

const url = 'https://icanhazdadjoke.com/';

const App = () => {
  const [state, setState] = useState(1);
  const [joke, setJoke] = useState('');

  useEffect(async () => {
    const res = await ky.get(url).json();
    console.log(res);
    setJoke(res.joke);
  }, [state]);

  return (
    <>
      <h1>{joke}</h1>
      <button onClick={() => setState(state + 1)}>Get Joke</button>
    </>
  );
};

export default App;
