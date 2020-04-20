import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import GameHub from './Pages/games/GameHub';
import Profile from './components/profile';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <Route exact path = "/" component={Home} />
        <Route exact path = "/GameHub" component={GameHub} />
        <Route path="/About" component={About} />
        <Route path="/Profile" component={Profile} />
      </div>
    </Router>

  );
}

export default App;
