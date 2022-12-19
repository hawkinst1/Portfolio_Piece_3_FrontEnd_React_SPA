import React from 'react';
import HomePage from './HomePage';
import AboutMain from './container/AboutMain/AboutMain';
import TourGuide from './container/TourGuide/TourGuide';
import Login from "./container/Login/Login"
import Register from "./container/Register/Register"

import './App.css';
import "./index.css";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App(){
  return(
    <Router>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/aboutExternal" component={AboutMain}/>    
      <Route exact path="/tourGuides" component={TourGuide}/>    
      <Route exact path="/login" component={Login}/>    
      <Route exact path="/registration" component={Register}/>    
    </Switch>
  </Router>
  )
};

export default App;
