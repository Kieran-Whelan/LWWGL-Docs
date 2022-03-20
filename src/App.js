import React from 'react';
import './App.css';
import Home from './pages/Home';
import Install from './pages/Install';
import Docs from './pages/Docs';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <NavBar />
        </div>
          <div className='App-content'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/install' element={<Install />} />
              <Route path='/docs' element={<Docs />} />
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
