import React, {useState} from 'react';
// import logo from './logo.svg';
// import './App.css';

function App() {
  const [conter, setCounter] = useState(0);
    return (
      <>
        <p> {conter}</p>
        <button onClick={() => setCounter(conter + 1)}> Contador</button>
      </>
  );
}

export default App;
