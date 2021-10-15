import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';

class Switcher extends React.Component {
  render() {
    return (
      <Switch>
        <Route to="/" component={ Login } />
      </Switch>
    );
  }
}

export default Switcher;
