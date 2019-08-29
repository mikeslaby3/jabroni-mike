import React, { Component } from 'react';

import Aux from './hoc/Aux';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
class App extends Component {
  state = {
    showModal: false
  }

  buttonClickHandler = () => {
    this.setState({
        showModal: true
    });
  }

  closeModalHandler = () => {
    this.setState({
        showModal: false
    });
  }

  render() {
    return (
      <Aux>
        <Button openModal={this.buttonClickHandler} />
        <Modal show={this.state.showModal} modalClosed={this.closeModalHandler}>
            <p>Hey Im a Baby</p>
        </Modal>
      </Aux>
    );
  }
}

export default App;
