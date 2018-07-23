import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import Cajon from './components/Cajon';
import Media from './components/Media';
import Footer from './components/Footer';
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
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/cajon' exact component={Cajon} />
            <Route path='/media' exact component={Media} />
          </Switch>          
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
