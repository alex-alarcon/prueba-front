import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';

import { fetchMenu, sendData } from '../../services/api';

import Header from '../header';
import Form from '../../components/Form';

class App extends Component {
  state = {
    isLoading: true,
    menu: []
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
    sendData(data).then(() => console.log('OK'));
  };

  render() {
    const loader = <p>Loading...</p>;
    const { isLoading, menu } = this.state;

    return (
      <BrowserRouter>
        <div className="App">
          {isLoading && loader}
          <Header links={menu} loadMenu={this.loadMenu} />
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
