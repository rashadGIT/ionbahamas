import React, {Component} from 'react';
import Footer from '../components/Footer'
import '../css/navbar.css'
import NavTopBar from '../components/navTopBar'
import ScrollUpButton from "react-scroll-up-button";

const Layout = (InnerComponent) => {
  return (class extends Component{
    render(){
      return(
          <div key="layout">
            <ScrollUpButton />
            <NavTopBar />
            <InnerComponent />
            <Footer />
          </div>
      )
    }
  });
}
export default Layout;