import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Cat from './pages/Cat';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalogo" element={<Cat />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
