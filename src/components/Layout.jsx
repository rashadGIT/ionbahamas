import React, {Component} from 'react';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import '../css/navbar.css'

function App(InnerComponent,bread) {
  return (class extends Component{
    render(){
      return(
          <div>
            <NavBar />
            {(bread) ? <div style={{paddingBottom : 100}}><Breadcrumbs crumbs={bread}/></div> : null}
            <InnerComponent />
            <Footer />
          </div>
      )
    }
  });
}
export default App;