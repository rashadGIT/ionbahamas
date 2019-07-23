import React, { Component } from 'react';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import payPal from '../imgs/payPal.jpg';

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
        <Container fluid={false} style={{padding : '10px 25px 0px 25px'}}>
          <Row noGutters={false} center="xs" >
            <Col sm="12" md={{ size: 3, offset: 0 }}>
            fjiwoegfpoerjgpi fjoewjfpre foirejpgoir epog erjpig jproe gjpoerjgpeg
            gjeijgipe goi ejgpoier jgorejogk;reactgjeipjgoipegjeirpjg
            gejriognjoietg jippterjgpiojtieopjgp terjgoetrjpogjprtejgipkrnje gjioprj eiopgjreipjgpjrepjgper
            gejriognjoietgegoijeroipjgpoerjgpoiejtroginjioerg
            rejgoi erjgoijropiejgpojreopijgpoierjgl;jerpg ergrjkeojgprejipg er gjerpijgpregjoiperjpgre
            greijngioperlpjgnpierjpgejoip
            </Col>
          </Row>
          <Row noGutters={false} center="xs" >
            <Col xs={12} lg={6} md={{ size: 6, offset: 0 }}>
            <center>
              <img src={payPal} alt=""/>
            </center>
            </Col>
            <Col xs={12} lg={6} md={{ size: 6, offset: 0 }}>
            fweoifgnerongfo
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Layout(member);