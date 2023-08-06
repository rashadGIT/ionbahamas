import '../styles/App.css';
import SocialMedia from '../components/socialMedia'
import Layout from '../components/Layout'

export default function Homepage(props: any){ 
  return (
    <Layout>
      <div className="App-header" style={{paddingTop : '60px'}}>
        <div className="avatarWrapper" >
          <div>
            <img  className="roundImg" src={require('../images/ION-Logo.jpg')} alt="Avatar" width="250" height="250"/>
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