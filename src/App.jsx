import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Complexes from './Complexes/List';
import Complex from './Complexes/Show';
import Header from './Header';
import Footer from './Footer';
import './App.css';

const App = () =>
  (<Router>
    <div>
      <Header />
      <Route exact path="/" component={Complexes} />
      <Route path="/complex/:id" component={Complex} />
      <Footer />
    </div>
  </Router>);

export default App;
