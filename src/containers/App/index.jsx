import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';

import { fetchMenu, sendData } from '../../services/api';

import Header from '../header';
import Form from '../../components/Form';
import LightBox from '../../components/LightBox';

class App extends Component {
  state = {
    isLoading: true,
    menu: [],
    lightBox: {
      isVisible: false
    }
  };

  loadMenu = () => {
    fetchMenu().then(res => {
      this.setState({
        menu: res,
        isLoading: false
      });
    });
  };

  handleSubmit = data => {
    sendData(data)
      .then(() => this.toggleLightBox())
      .then(() => setTimeout(this.toggleLightBox, 5000));
  };

  toggleLightBox = () => {
    const {
      lightBox: { isVisible }
    } = this.state;
    this.setState({
      lightBox: {
        isVisible: !isVisible
      }
    });
  };

  render() {
    const loader = <p>Loading...</p>;
    const {
      isLoading,
      menu,
      lightBox: { isVisible }
    } = this.state;

    return (
      <BrowserRouter>
        <div className="App">
          {isLoading && loader}
          <Header links={menu} loadMenu={this.loadMenu} />
          {isVisible && <LightBox />}
        </div>
        <Route
          path="/:plane"
          component={({ match }) => (
            <Form onSubmit={this.handleSubmit} plane={match.params.plane} />
          )}
        />
      </BrowserRouter>
    );
  }
}

export default App;
