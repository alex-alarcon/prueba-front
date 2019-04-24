import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';

import { fetchMenu } from '../../services/api';

import Header from '../header';

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
          component={({ match }) => <p>{match.params.plane}</p>}
        />
      </BrowserRouter>
    );
  }
}

export default App;
