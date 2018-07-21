import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Media from './components/Media';
import {
  BrowserRouter,
  Route,
  Switch
 } from "react-router-dom";
 

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Header />
        <Home />
        <Media />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
