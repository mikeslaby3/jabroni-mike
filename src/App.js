import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home/Home';
import HappyBirthday from './pages/HappyBirthday/HappyBirthday';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/happybirthday" component={HappyBirthday} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
