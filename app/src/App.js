import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import About from './component/About';
import Portfolio from './component/Portfolio';
import Home from './component/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import Api from "./component/Api";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/api">
          <Api />
        </Route>
      </Switch>
      <Footer />
    </Router>

  )
}

export default App
