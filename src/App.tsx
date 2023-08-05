import './App.css';
import CreateNavItem from './components/devLogo'
import { Button } from 'reactstrap';
import SocialMedia from './components/socialMedia'
import Nav from './components/Navbar/navBar'
import list from './module/socialMedia';
import Layout from './components/Layout'

export default function App(props: any){ 
  return (
    <Layout>
      <div className="App-header" style={{paddingTop : '60px'}}>
        <div className="avatarWrapper" >
          <div>
            <img  className="roundImg" src={require('./images/ION-Logo.jpg')} alt="Avatar" width="250" height="250"/>
            <br />
          </div>
          <div className="container-flex">
            <SocialMedia />
          </div>
        </div>
      </div>
    </Layout>
)
};