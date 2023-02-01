import logo from './logo.svg';
import useState from 'react';
import Counter from './components/Counter'
import './App.css';
import React from 'react';

function App() {

  return (
    <div className="App">
      <Counter initialValue={10}/>
      <Counter/>
      <Counter/>
    </div>
  );
}

export default App;
