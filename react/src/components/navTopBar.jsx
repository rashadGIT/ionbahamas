import React, { Component } from 'react';
import {Link as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import logo from '../imgs/logo.jpg';
import img from '../imgs/ioniconflame.png'
import '../css/navbar.css'

const links = [
  { href: '/', text: 'Home' },
  { href: '/about', text: 'About Us' },
  { href: '/board', text: 'Our Board' },
  { href: '/calendar', text: 'Calendar' },
  // { href: '/scholarship', text: 'Apply For Scholarship'}
];

const createNavItem = ({ href, text, className }) => (
  <NavItem key={text}>
    <NavLink tag={RRNavLink} to={href} className={className}>{text}</NavLink>
  </NavItem>
);

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <div className="logo-img">
          <a href="/">
            <img className="logo" src={logo} alt="" />
          </a>
        </div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <img id="bannerLogo" style={{position : 'absolute', top : '0%'}} src={img} alt="" width="20" height="40" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {links.map(createNavItem)}
              <NavItem>
                <NavLink tag={RRNavLink} to="/donations">Donate</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink tag={RRNavLink} to="/donate/StudentRelief"><b>Texas College Student Relief Efforts</b></NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
