import '../css/welcome.css';
import SocialMedia from '../components/socialMedia'
import Layout from '../components/Layout'
import Time from '../components/Time'

export default function Homepage(props: any){ 
  return (
    <Layout>
      <div className="landing-page">
      <header className="header">
        <img className="roundImg" style={{marginTop : '20px'}} src={require('../images/ION-Logo.jpg')} alt="Avatar" width="250" height="250"/>
        {/* <h1 className="title">EmpowerChange</h1> */}
        <p className="slogan">Serving Communities, Shaping Futures</p>
      </header>
      <section className="section aquamarine-bg">
        <div className="content">
          <h2>Our Mission</h2>
          <p>
          Our mission is to be of assistance to and enhance the lives of Bahamians and those with a connection to the Bahamas either at home or abroad via education and civic engagement.
          </p>
        </div>
      </section>
      <section className="section gold-bg">
        <div className="content">
          <h2>What We Believe</h2>
          <p>
            We believe in united community action, engaged members, transparency, respect, education, and guiding mentorship.
          </p>
        </div>
      </section>
      <section className="section aquamarine-bg">
        <div className="content">
          <h2>Our Impact</h2>
          <p>
            With the support of generous individuals like you, we've been able to positively impact countless lives and communities.
          </p>
        </div>
      </section>
      <section className="section social-media gold-bg">
        <div className="content">
          <h2>Connect with Us</h2>
          <SocialMedia />
        </div>
      </section>
      <section className="section donate aquamarine-bg">
        <div className="content">
          <h2>Donate Today</h2>
          <p>Your support can make a difference. Contribute to our cause and be a part of something great.</p>
          {/* <button className="donate-button">Donate</button> */}
        </div>
      </section>
      <section className="section time-section gold-bg">
        <div className="content">
          <h3>Current Time in Nassau, Bahamas</h3>
          <Time 
            message={''}
            timezone={'America/Nassau'}
            format={'h:mm:ss A'}
          />
        </div>
      </section>
      {/* <footer className="footer aquamarine-bg">
        <p>&copy; {new Date().getFullYear()} EmpowerChange. All rights reserved.</p>
      </footer> */}
    </div>
    </Layout>
)
};