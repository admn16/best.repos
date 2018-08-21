import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from 'views/Home/Home';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        <Route exact path="/" component={Home} />
      </p>
    </div>
  </Router>
);

export default App;
