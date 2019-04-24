import React, { Component } from 'react';
import './index.css';
import { fetchMenu } from '../../services/api';

class App extends Component {
  state = {
    isLoading: true,
    menu: []
  };

  componentDidMount() {
    this.loadMenu();
  }

  loadMenu() {
    fetchMenu().then(res => {
      this.setState({
        menu: res,
        isLoading: false
      });
    });
  }

  render() {
    const loader = <p>Loading...</p>;
    const { isLoading } = this.state;
    if (isLoading) {
      return loader;
    }
    return <div className="App" />;
  }
}

export default App;
