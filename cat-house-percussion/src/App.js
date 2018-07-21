import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Media from './components/Media';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Media />
        <Footer />
      </div>
    );
  }
}

export default App;
