import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Applist from './components/list';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';




function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path = "/" component={Home} />
        <Route path="/About" component={About} />
      </div>
    </Router>
  );
}

export default App;
