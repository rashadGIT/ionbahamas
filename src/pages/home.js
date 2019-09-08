import React, { Component } from 'react';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {NavLink } from 'reactstrap';
import { Carousel } from 'react-responsive-carousel';
import Membership from '../components/MembershipBoxes';
import img from '../imgs/gala.jpg'
import banner from '../imgs/banner.jpg'
import bowlAThon from '../imgs/Bowl-A-Thon.jpg'
import Golf from '../imgs/Golf.jpg'
import youTube from '../imgs/youTubeLogo.png';
import dorian from '../imgs/Dorian.png';
import {Link as RRNavLink } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../css/carousel.css'
import '../css/col.css';
import '../css/meeting.css';

const hurricaneMsg ="Hurricane Dorian Relief Efforts"

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
        name : "Event Calendar",
        link : "/calendar"
      },
      // {
      //   name : "Silent Auction Donation",
      //   link : "/actionDonation"
      // }
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
                    <div key={"Hurricane"}>
                      <img alt="" src={dorian} />
                      <div className="bannerTextContainer">
                        <div className="bannerTextDescription">
                          <h1 className="bannerTextTitle"><center>
                            <i style={{color : 'white'}}>{hurricaneMsg}</i>
                            </center>
                          </h1>
                          <center>
                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                              <input type="hidden" name="cmd" value="_s-xclick" />
                              <input type="hidden" name="hosted_button_id" value="TP2UXFQ8YDP24" />
                              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                              <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                            </form>
                          </center>
                        </div>
                      </div>
                    </div>
                    <div key={"intro"}>
                      <img alt="" src={banner} />
                      <div className="bannerTextContainer">
                        <div className="bannerTextDescription">
                          <h1 className="bannerTextTitle"><center>
                            <i>Introduction to ION Bahamas Video</i>
                            </center>
                          </h1>
                          <center>
                            <a href="https://youtu.be/0NXalyzcDj8" target="_blank" rel="noopener noreferrer">
                              <div>
                                <h3 style={{color : 'black'}}>Watch Now on YouTube</h3>
                                <img alt="" src={youTube} style={{width:300, height: 150}}/>
                                <h3 style={{color : 'black'}}>Like&nbsp;&bull;&nbsp;Share&nbsp;&bull;&nbsp;Subscribe</h3>
                              </div>
                            </a>
                          </center>
                        </div>
                      </div>
                    </div>
                    <div key={"GalaAuction"}>
                      <img alt="" src={img} />
                      <div className="auctionTextContainer">
                        <div className="auctionTextDescription">
                          <h1 className="auctionTextTitle"><center>
                            <i>ION A Taste of Paradise Gala Dinner</i>
                            <br /> &amp; Silent Auction
                            </center>
                          </h1>
                          <center>
                            <b>Eat, Drink &amp; Enjoy</b><br />
                            <font size="4">Where: </font><b><a style={{color:'white'}} rel="noopener noreferrer" target="_blank" href="https://goo.gl/maps/1K96gzDvLR2TiDn68">African American Museum at Fair Park</a></b><br />
                            <font size="4">When : </font><b>September 21, 2019 <br />7:00pm - 10:00pm</b><br /><font size="3">Tickets $40</font>
                            <h1 style={{color: 'red'}}>Sold Out</h1>
                            {/* <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                              <input type="hidden" name="cmd" value="_s-xclick" />
                              <input type="hidden" name="hosted_button_id" value="JX33NTNBH52QQ" />
                              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                              <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                            </form> */}
                            {/* <Link to="/about">
                              <Button outline={false} style={{color: 'black'}} size="sm" color="warning">Purchase Tickets</Button>
                            </Link> */}
                            <h6>Semi-Formal Attire &nbsp;&bull;&nbsp; No Tickets Sold at Door &nbsp;</h6>
                          </center>
                        </div>
                      </div>
                    </div>
                    <div key={"Bowl-A-Thon"}>
                      <img alt="" src={bowlAThon} />
                      <div className="carouselTextContainer">
                      <div className="auctionTextDescription">
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
                        </div>
                      </div>
                    </div>
                    <div key={"Golf Tournament"}>
                      <img alt="" src={Golf} />
                      <div className="carouselTextContainer">
                        <div className="auctionTextDescription">
                          <h1 className="auctionTextTitle">
                            <i>ION Golf Tournament</i>
                          </h1>
                          <center><b>Four!!</b></center><br />
                            <font size="4">Where: </font><b>TBA</b><br />
                            <font size="4">When : </font><b>TBA</b><br /><br />
                            <center>
                            {/* <Link to="/about">
                              <Button outline={false} style={{color: 'black'}} size="sm" color="warning">Purchase Tickets</Button>
                            </Link> */}
                          </center>
                        </div>
                      </div>
                    </div>
                  </Carousel>
                  {/* <InfiniteCarousel /> */}
                </div>
          <Container fluid={true} style={{paddingTop : '10px'}}>
            <Row noGutters={true} center="xs" >
              <Col xs={12} lg={6} md={{ span: 6, offset: 0 }}>
                <center>
                  <div className="meetingBox">
                    <div className="meetingBoxTitle">Shortcut Links</div>
                    <div  className="meetingBoxDescription">
                      {shortcutLinks.map((x,i) => <NavLink key={i} tag={RRNavLink} to={x.link} >{x.name}</NavLink>)}
                      <NavLink tag={RRNavLink} to="#" onClick={(event) => window.open("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=JX33NTNBH52QQ")}>
                        Order Gala Dinner Tickets
                      </NavLink>
                      <NavLink tag={RRNavLink} to="#" onClick={(event) => window.open("https://youtu.be/0NXalyzcDj8")}>
                        Introduction to ION Bahamas Video
                      </NavLink>
                      <NavLink tag={RRNavLink} to="#" onClick={(event) => window.open("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TP2UXFQ8YDP24&source=url")}>
                        <b>{hurricaneMsg}</b>
                      </NavLink>
                    </div>
                  </div>
                </center>
              </Col>
              <Col xs={12} lg={6} md={{ span:6, offset: 0 }}>
                <div className="meetingBox">
                  <div className="meetingBoxTitle">Quarterly Meetings</div>
                  <div  className="meetingBoxDescription">
                    <p>Quarterly meetings are held and open to the public. Please check calendar for dates and times. Meetings usually open with a meet and greet, followed by a 45 minute business session, with networking opportunities afterwards.</p>
                    <p>General meetings usually include a guest speaker with expertise on various topics that are pertinent to our community, such as:  Motivation, Wealth Building, Immigration, Taxes, Community Service and Outreach, Bahamian events, etc.</p>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={10} md={{ span: 12, offset: 0 }}>
                <Membership />
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
