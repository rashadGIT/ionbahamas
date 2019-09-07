import React from 'react';
import {Link as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
} from 'reactstrap';

import '../css/navbar.css';
import img from '../imgs/ioniconflame.png'


export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.logout = this.logout.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logout() {
    console.log("Logging Out")
    // cookie.remove('adoc');
    // window.location = '/';
  }
  render() {
    return (
      <div className="NavBar">
        <Navbar color="light" light expand="md" fixed={`top`}>
          <NavbarBrand href="/">
            <img style={{position : 'absolute', top : '0%'}}src={img} alt="" width="20" height="40" />
            &nbsp;&nbsp;
            <span style={{paddingLeft : '10px'}}><font  size="3">I</font>ON Bahamas</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              {/* <NavItem>
                <NavLink tag={RRNavLink} to="/" >Home</NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink tag={RRNavLink} to="/about" >About Us</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="/testimonials">Testimonials</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/volunteer">Become a volunteer</NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink tag={RRNavLink} to="/board">Our Board</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/calendar">Calendar</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="#" onClick={(event) => {window.open("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QMC5JV7U8BDNU&source=url");}} >Donate</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="#" onClick={(event) => {window.open("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TP2UXFQ8YDP24&source=url");}} ><b>Hurricane Relief Efforts</b></NavLink>
              </NavItem>
            </Nav>
            {/* <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Rashad
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/">
                      Profile
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/">
                      Security
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/">
                      Settings
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink onClick={this.logout}>
                      Logout
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/Signin">
                  <div style={{display: 'inline-block', paddingRight: '10px'}}>
                    <FontAwesomeIcon 
                      icon="user" 
                      color="#6DB65B"
                      size="lg" />
                  </div>
                  <div style={{display: 'inline-block'}}>
                    {this.props.userName}
                  </div>
                </NavLink>
              </NavItem>
            </Nav> */}
          </Collapse>
        </Navbar>
        </div>
    );
  }
}
