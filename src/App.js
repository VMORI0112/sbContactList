import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Home from './Views/Home';
import NewContact from './Views/NewContact';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/NewContact" component={NewContact} />
        <Route render={() => {"404 Error, Page not found!"}} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
