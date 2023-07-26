import logo from './logo.svg';
import './App.css';
import React from 'react';

function MyButton () {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is my first React component.</p>
      <MyButton />
    </div>
  );
}

//export default App;
