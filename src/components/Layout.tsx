import React from 'react';
import '../css/navbar.css'
import Nav from './Navbar/navBar'
import Footer from '../components/Footer';

 export default function Layout(props: any){
  return (
    <div key="layout">
      <header>
        <Nav />
      </header>
      <div style={{paddingTop : '57px'}}>
        {props.children}
      </div>
      <Footer />
      {/* <footer className="footer aquamarine-bg">
        <p>&copy; {new Date().getFullYear()} EmpowerChange. All rights reserved.</p>
      </footer> */}
    </div>
  )
  }