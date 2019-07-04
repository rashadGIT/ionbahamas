import React, { Component } from 'react';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../css/donate.css';

const bread = [
  {order : 2, title: "Donate", link : "/donate"},
  {order : 1, title: "Home", link : "/"}
].sort((a,b) => a.order - b.order);

class donate extends Component {
  constructor(props){
    super(props);
    this.state={
      loading : true,
      err : false
    }
  }

  componentWillMount(){

  }

  componentDidMount(){

  }
  componentDidCatch(error, errorInfo){
    this.setState({err : true})
  }

  
  render() {
    return (
      <div>
        <Container fluid={true} style={{paddingTop : '10px'}}>
          <Row noGutters={false} center="xs" >
            <Col xs={12} lg={6} md={{ span: 6, offset: 0 }}>
            <img 
              className="supportImg"
              width="100%"
              alt="" 
              src='https://d3ayyz93zozlya.cloudfront.net/uploaded-images/articlemainimage/microvolunteering-making-a-difference-in-a-matter-of-minutes-588a3926ecd2b.jpeg' />
            <h1>Your donations make a difference</h1>
            <center>
              <a 
                href="/about"
                style={{border: 'none'}} >
                  <img 
                    alt="Make your payments with PayPal. It is free, secure, effective."
                    src={"https://jaschoolsupport.org/wp-content/uploads/2018/02/paypal-credit-card-images1.jpg"} />
              </a>
            </center>
            <p>
              If you would like to send a check , please send to:
              <br />
              <h5><b>123 Main St <br />Dallas TX, 12345
              </b><br /></h5>
                Our programs — and the kids they support — cannot succeed without your generosity. Every donation, no matter how small or how large, can make a difference. Most of our funding comes from individuals like you; those who understand how an education increases a child’s opportunities.
              </p>
              <h4>Short on cash; Donate your time.</h4>
              <p>
                SignUp to become a <a href="/about">Volunteer</a>
              </p>
                </Col>
                <Col xs={12} lg={6} md={{ span: 6, offset: 0 }}>
            <h1>What you are supporting.</h1>
            {[1,2,3,4,5].map(x => <h3>Support {x}</h3>)}
                </Col>
              </Row>
            </Container>
      </div>
    );
  }
}

export default Layout(donate,bread);
