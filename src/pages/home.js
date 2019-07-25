import React, { Component } from 'react';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button, NavLink } from 'reactstrap';
import { Carousel } from 'react-responsive-carousel';
import InfiniteCarousel from '../components/InfiniteCarousel';
import Membership from '../components/MembershipBoxes';
import img from '../imgs/gala.jpg'
import bowlAThon from '../imgs/Bowl-A-Thon.jpg'
import Golf from '../imgs/Golf.jpg'
import {Link , Link as RRNavLink } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../css/carousel.css'
import '../css/col.css';
import '../css/meeting.css';

const bread = [
  {order : 1, title: "Home", link : "/"},
].sort((a,b) => a.order - b.order);

class home extends Component {
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
    document.title = "ION Bahamas";
  }
  componentDidCatch(error, errorInfo){
    this.setState({err : true})
  }

  
  render() {
    const shortcutLinks = [
      {
        name : "Event Calender",
        link : "/calendar"
      },
      {
        name : "Silent Auction Donation",
        link : "/actionDonation"
      }
    ];
    return (
      <div>
        <div className="highlights">
                  <Carousel
                    showArrows={true}
                    showThumbs={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    useKeyboardArrows={true}
                    stopOnHover={true}
                    interval={10000}
                    transitionTime={350}
                    swipeable={true}
                    dynamicHeight={false}
                    className="carousel"
                  >
                    <div key={"GalaAuction"}>
                      <img alt="" src={img} />
                      <div className="auctionTextContainer">
                        <p className="auctionTextDescription">
                          <h1 className="auctionTextTitle"><center>
                            <i>ION A Taste of Paradise Gala</i>
                            <br /> &amp; Silent Auction
                            </center>
                          </h1>
                          <center>
                            <b>Eat, Drink &amp; Enjoy</b><br /><br />
                            <font size="4">Where: </font><b><a style={{color:'white'}} rel="noopener noreferrer" target="_blank" href="https://goo.gl/maps/1K96gzDvLR2TiDn68">African American Museum of Dallas</a></b><br />
                            <font size="4">When : </font><b>September 21, 2019 <br />7:00pm - 10:00pm</b><br />
                            <Link to="/about">
                              <Button outline={false} style={{color: 'black'}} size="sm" color="warning">Purchase Tickets</Button>
                            </Link>
                            <br />
                            <h6>Semi-Formal Attire &nbsp;&bull;&nbsp; No Tickets Sold at Door &nbsp;&bull;&nbsp; <Link to="/actionDonation" >Make Donations</Link></h6>
                          </center>
                        </p>
                      </div>
                    </div>
                    <div key={"Bowl-A-Thon"}>
                      <img alt="" src={bowlAThon} />
                      <div className="carouselTextContainer">
                      <p className="auctionTextDescription">
                          <h1 className="auctionTextTitle">
                            <i>ION Bowl-A-Thon</i>
                          </h1>
                          <center><b>Strike!!</b></center><br />
                            <font size="4">Where: </font><b>TBA</b><br />
                            <font size="4">When : </font><b>TBA</b><br /><br />
                            <center>
                            {/* <Link to="/about">
                              <Button outline={false} style={{color: 'black'}} size="sm" color="warning">Purchase Tickets</Button>
                            </Link> */}
                          </center>
                        </p>
                      </div>
                    </div>
                    <div key={"Golf Tournament"}>
                      <img alt="" src={Golf} />
                      <div className="carouselTextContainer">
                      <p className="auctionTextDescription">
                          <h1 className="auctionTextTitle">
                            <i>ION Golf Tournament</i>
                          </h1>
                          <center><b>Four!!</b></center><br />
                            <font size="4">Where: </font><b>TBA</b><br />
                            <font size="4">When : </font><b>TBA</b><br /><br />
                            <center>
                            <Link to="/about">
                              <Button outline={false} style={{color: 'black'}} size="sm" color="warning">Purchase Tickets</Button>
                            </Link>
                          </center>
                        </p>
                      </div>
                    </div>
                  </Carousel>
                  {/* <InfiniteCarousel /> */}
                </div>
          <Container fluid={true} style={{paddingTop : '10px'}}>
            <Row noGutters={true} center="xs" >
              <Col xs={12} lg={3} md={{ span: 3, offset: 0 }}>
                <center>
                  <div className="meetingBox">
                    <div className="meetingBoxTitle">Shortcut Links</div>
                    <div  className="meetingBoxDescription">
                      {shortcutLinks.map(x => <NavLink tag={RRNavLink} to={x.link} >{x.name}</NavLink>)}
                    </div>
                  </div>
                </center>
              </Col>
              <Col xs={12} lg={6} md={{ span: 6, offset: 0 }}>
                <Membership />
              </Col>
              <Col xs={12} lg={3} md={{ span:3, offset: 0 }}>
                <div className="meetingBox">
                  <div className="meetingBoxTitle">Quarterly Meetings</div>
                  <div  className="meetingBoxDescription">
                    <p>Quarterly meetings are held and open to the public. Please check calendar for dates and times. Meetings usually open with a meet and greet, followed by a 45 minute business session, with networking opportunities afterwards.</p>
                    <p>General meetings usually include a guest speaker with expertise on various topics that are pertinent to our community, such as:  Motivation, Wealth Building, Immigration, Taxes, Community Service and Outreach, Bahamian events, etc.</p>
                  </div>
                </div>
              </Col>
              {/* <Col xs={12} md={12}><div className="box">{hi}</div></Col>
              <Col xs={12} md={12}><div className="box">{hi}</div></Col>
              <Col xs={12} md={12}><div className="box">{hi}</div></Col>
              <Col xs={12} md={12}><div className="box">{hi}</div></Col>
              <Col xs={12} md={12}><div className="box">{hi}</div></Col>
              <Col xs={12} md={12}><div className="box">{hi}</div></Col> */}
            </Row>
          </Container>
        </div>
    );
  }
}

export default Layout(home);
