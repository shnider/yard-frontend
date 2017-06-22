import React, { Component } from 'react';

import Complexes from './Complexes';
import Header from './Header';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Complexes />
        <Footer />
      </div>
    );
  }
}

export default App;
