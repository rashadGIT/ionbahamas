import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
} from 'reactstrap';
import links from '../../module/navBar'
import NavigationItem from './NavigationItem';



export default () =>  {
  const [isOpen, setIsOpen] = useState(false);  
    return (
        <Navbar fixed="top" color="light" light expand="md">
          <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              {links.map(({href, text }) => <NavigationItem href={href} text={text} />)}
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
