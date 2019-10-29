import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import ProfilePageContainer from './containers/ProfilePageContainer'

class App extends Component {
  render() {
    return (
      <ProfilePageContainer />
    );
  }
}

export default App;