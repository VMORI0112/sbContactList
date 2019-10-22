import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import { UserContext } from './UserContext';

import Home from './Views/Home';
import NewContact from './Views/NewContact';
import Edit from './Views/Edit';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
      fetch('https://assets.breatheco.de/apis/fake/contact/agenda/Cohort-V')
      .then(res => res.json())
      .then(data => setData(data));
  },[data])

  const providerValue = useMemo(() => ({ data, setData }), [data, setData]);

  return (
    <>
    <Router>
      <UserContext.Provider value={providerValue}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/NewContact" component={NewContact} />
          <Route path="/edit/:id" component={Edit} />
          <Route render={() => {"404 Error, Page not found!"}} />
        </Switch>
      </UserContext.Provider>
    </Router>
    </>
  );
}

export default App;
