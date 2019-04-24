import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import './index.css';

class Header extends Component {
  state = {
    isNavbarHidden: true
  };

  componentDidMount() {
    const { loadMenu } = this.props;
    loadMenu();
  }

  handleToggleNav = () => {
    this.setState({
      isNavbarHidden: !this.state.isNavbarHidden
    });
  };

  render() {
    const { isNavbarHidden } = this.state;
    const { links } = this.props;
    const navItemClasses = classnames({
      Navbar__items: true,
      'Navbar__items--mobileHidden': isNavbarHidden
    });
    return (
      <header className="Navbar">
        <div className="Navbar__link Navbar__link-brand">Website title</div>
        <div
          className="Navbar__link Navbar__link-toggle"
          onClick={this.handleToggleNav}
        >
          <i className="fas fa-bars" />
        </div>
        <nav className={navItemClasses}>
          {links.map(link => (
            <Link to={link.name} className="Navbar__link" key={link.id}>
              {link.name}
            </Link>
          ))}
        </nav>
      </header>
    );
  }
}

export default Header;
