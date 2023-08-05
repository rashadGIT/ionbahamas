import {
    NavItem,
    NavLink,
  } from 'reactstrap';
  import {Link as RRNavLink } from "react-router-dom";

  export default function NavigationItem({ href, text, className='', site } : {href : string, text: string, className?: string, site?: string }){
    return <NavItem key={text}>
      <NavLink 
        tag={RRNavLink}
        to={href} 
        onClick={() => site && window.open(site)} 
        className={className}>{text}</NavLink>
    </NavItem>
};