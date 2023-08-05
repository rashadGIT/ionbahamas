import React from 'react';
import '../css/navbar.css'
import Nav from './Navbar/navBar'

 export default function Layout(props: any){
  return (
    <div key="layout">
      <header>
        <Nav />
      </header>
      {props.children}
    </div>
  )
  }