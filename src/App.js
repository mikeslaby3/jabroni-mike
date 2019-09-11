import React, { Component } from 'react';

// import Aux from './hoc/Aux';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import GotYourAss from './components/GotYourAss/GotYourAss';
// import Music from './containers/Music/Music';
class App extends Component {
  state = {
    showModal: false,
  }

  buttonClickHandler = () => {
    this.setState({
        showModal: true,
    });
  }

  closeModalHandler = () => {
    this.setState({
        showModal: false,
    });
  }

  render() {
    const background = process.env.PUBLIC_URL + "/images/regal.png";

    const style = {
      backgroundImage: `url(${background})`,
      height: '100vh'
    }

    return (
      <div style={style}>
        <Button openModal={this.buttonClickHandler} />
        <Modal show={this.state.showModal} modalClosed={this.closeModalHandler}>
          <GotYourAss />
        </Modal>
      </div>
    );
  }
}

export default App;
