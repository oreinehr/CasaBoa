// App.js
import React from 'react';
import Header from './components//Header';
import Hero from './components/Hero';
import Recommended from './components/Recomendar';
import './Styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Recommended />
    </div>
  );
}

export default App;
