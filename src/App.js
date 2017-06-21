import React, { Component } from 'react';
import GlobalHeader from './GlobalHeader.jsx';
import CompassDevelopmentLogo from './Complexes/CompassDevelopmentLogo.jsx'
import Introduction from './Complexes/Introduction.jsx'
import Cards from './Complexes/Cards.jsx'
import GlobalFooter from './GlobalFooter.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <GlobalHeader />
          <CompassDevelopmentLogo />
          <Introduction />
          <Cards />
          <GlobalFooter />
      </div>
    );
  }
}

export default App;
