import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Install from './components/pages/Install';
import Docs from './components/pages/Docs';
import NavBar from './components/NavBar';
import LWWGL from './res/LWWGL.png'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchBar from './components/SearchBar';

const placeholder = "Search docs";

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='App-content'>
          <div className='App-content-left'>
            <img className='logo' src={LWWGL} alt="Logo" />
            <SearchBar placeholder={placeholder} />
          </div>
          <div className='App-content-right'>

          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
