import React from 'react';
import Footer from './Footer'
import '../css/navbar.css'
import NavTopBar from './navTopBar'
import ScrollUpButton from "react-scroll-up-button";

 export default function Layout(props){
  return <div key="layout">
    <ScrollUpButton />
    <NavTopBar />
    {props.children}
    <Footer />
  </div>
  }