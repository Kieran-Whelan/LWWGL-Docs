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
          <NavBar title="LWWGL"/>
        </div>
          <div className='App-content'>
            <div className='App-container'>
              <div className='App-container-left'>
              </div>
              <div className='App-container-right'>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/install' element={<Install />} />
                  <Route path='/docs' element={<Docs />} />
                </Routes>
              </div>
            </div>
          </div>
          <div className='App-footer'>

          </div>
      </div>
    </Router>
  );
}

export default App;
