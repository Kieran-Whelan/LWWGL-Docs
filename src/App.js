import React from 'react';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
          <div className='Content'>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
