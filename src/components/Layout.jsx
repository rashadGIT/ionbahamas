import React, {Component} from 'react';
import Footer from '../components/Footer'
import '../css/navbar.css'
import NavTopBar from '../components/navTopBar'

function App(InnerComponent) {
  return (class extends Component{
    render(){
      return(
          <div key="layout">
            <NavTopBar />
            <InnerComponent />
            <Footer />
          </div>
      )
    }
  });
}
export default App;