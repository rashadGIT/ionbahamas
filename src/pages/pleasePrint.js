import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'reactstrap';
import { Link as RRNavLink } from "react-router-dom";


class member extends Component {
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
        <Container fluid={false} style={{padding : '100px 25px 0px 25px'}}>
          <Row noGutters={false} center="xs" >
            <Col sm="12" md={{ size: 3, offset: 0 }}>
              <h3>Thank you for your purchase.</h3>
              <h3>An email from PayPal "<b>service@paypal.com</b>" will be sent to your inbox.</h3>
              <h3>Please print or screenshot this email and present it at Gala Dinner entrance for entry.</h3> 
              <br />
              <center>
              <Button color="primary" size="lg"  tag={RRNavLink} to="/" block>Return to Home Page</Button>
              </center>
            </Col>
          </Row>
          {/* <Row noGutters={false} center="xs" >
            <Col xs={12} lg={6} md={{ size: 6, offset: 0 }}>
              <center>            
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="CC3B2W6G6WZNW" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
              </form>
              </center>
            </Col>
            <Col xs={12} lg={6} md={{ size: 6, offset: 0 }}>
            fweoifgnerongfo
            </Col>
          </Row> */}
        </Container>
      </div>
    );
  }
}

export default member;