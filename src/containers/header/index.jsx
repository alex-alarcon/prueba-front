import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';

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
    const { isNavbarHidden } = this.state;
    this.setState({
      isNavbarHidden: !isNavbarHidden
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

Header.propTypes = {
  loadMenu: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Header;
