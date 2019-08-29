import React, { Component } from 'react';

import Aux from './hoc/Aux';
import Button from './components/Button/Button';
class App extends Component {
  render() {
    return (
      <Aux>
        <Button />
      </Aux>
    );
  }
}

export default App;
