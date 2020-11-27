import React, { Component, useState, useEffect } from 'react';
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
import '../css/Header.css';

const links = [
  { href: '/', text: 'Home' },
  { href: '/about', text: 'About Us' },
  { href: '/board', text: 'Our Board' },
  { href: '/calendar', text: 'Calendar' },
  { href: '/donations', text: 'Donate' }
];

const createNavItem = ({ href, text, className }) => (
  <NavItem key={text}>
    <NavLink tag={RRNavLink} to={href} className={className}>{text}</NavLink>
  </NavItem>
);

export default function NavBar(props){
  const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <div className="logo-img">
          <a href="/">
            <img className="logo" src={logo} alt="" />
          </a>
        </div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
          <img 
                className='header__logo'
                src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'
                // src={require('../imgs/ioniconflame.png')}
                alt=''
              />
            {/* <img id="bannerLogo" style={{position : 'absolute', top : '0%'}} src={img} alt="" width="20" height="40" /> */}
          </NavbarBrand>
          <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {links.map(createNavItem)}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  // }
}
