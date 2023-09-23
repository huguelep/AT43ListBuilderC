import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
          <NavbarBrand tag={Link} to="/">AT-43 List Builder</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
              </NavItem>
              <NavDropdown title="Faction Overview" id="basic-nav-dropdown" className="text-dark">
                <NavDropdown.Item href="/UNA">United Nations of Ava (U.N.A)</NavDropdown.Item>
                <NavDropdown.Item href="/Therians">Therians</NavDropdown.Item>
                <NavDropdown.Item href="/RedBlok">Red Blok</NavDropdown.Item>
                <NavDropdown.Item href="/Karmans">Karmans</NavDropdown.Item>
                <NavDropdown.Item href="/Cogs">The Cogs</NavDropdown.Item>
                <NavDropdown.Item href="/ONI">Okamura Non-Aligned Industries (O.N.I.)</NavDropdown.Item>
              </NavDropdown>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
