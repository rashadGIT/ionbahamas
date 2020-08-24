import React, { Component } from 'react';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {NavLink } from 'reactstrap';
import { Carousel } from 'react-responsive-carousel';
import Membership from '../components/MembershipBoxes';
import banner from '../imgs/banner.jpg'
import bowlAThon from '../imgs/Bowl-A-Thon.jpg'
import Farm from '../imgs/Farm.jpg';
import logo from '../imgs/logo.jpg';
import Smiles from '../imgs/Amazon-smiles.png';
import youTube from '../imgs/youTubeLogo.png';
import dorian from '../imgs/Dorian Aftermath.jpeg';
import {Link as RRNavLink } from "react-router-dom";
import { Button } from 'reactstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../css/carousel.css'
import '../css/col.css';
import '../css/meeting.css';

const hurricaneMsg =<font>Hurricane Dorian <br />Relief Efforts</font>;
const hurricaneMsgBox = "Hurricane Dorian Relief Efforts";
const collegeMsg =<font>Texas College Student <br />Relief Efforts</font>;
const collegeMsgBox = "Texas College Student Relief Efforts";
const smileLink = "https://smile.amazon.com/ch/84-2453440";
const farmPayPalLink = "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PBJXGQZCLPDDS&source=url";

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
                    <div key={"Agriculture"}>
                      <img alt="" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthetribune.media.clients.ellingtoncms.com%2Fimg%2Fphotos%2F2012%2F11%2F13%2Fcubaagro_t670.jpg%3Fb3f6a5d7692ccc373d56e40cf708e3fa67d9af9d&f=1&nofb=1" />
                      <div className="carouselTextContainer">
                        <div className="auctionTextDescription">
                          <h1 className="auctionTextTitle">
                            <center><i>Support Bahamian <br />Agriculture</i></center>
                          </h1>
                          <center>
                            <b>Join Us in the fight against food <br />insecurity in the Bahamas</b>
                          </center><br />
                          <center>
                          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                            <input type="hidden" name="cmd" value="_s-xclick" />
                            <input type="hidden" name="hosted_button_id" value="PBJXGQZCLPDDS" />
                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                          </form>
                            {/* <Link to="/about">
                              <Button outline={false} style={{color: 'black'}} size="sm" color="warning">Purchase Tickets</Button>
                            </Link> */}
                          </center>
                        </div>
                      </div>
                    </div>
                    <div key={"Smile"}>
                      <img alt="" src="https://sierrapto.org/cms/wp-content/uploads/2015/08/Amazon-smiles-2.png" />
                      <a href={smileLink} target="_blank">
                        <div className="text">
                          <div className="support-wrapper">
                            <div className="support" style={{'font-size': '40px', 'line-height': '1.6','margin-top': '3px', 'margin-bottom': '1.5px'}}>
                              Support <br />
                              Igniting Our Nation Bahamas
                            </div>
                          </div>
                          <br /> <br/>
                          <p className="when-shop">When you shop at <b>smile.amazon.com,</b></p>
                          <p className="donates">Amazon donates.</p>
		                    </div>
                        </a>

                      {/* <div className="carouselTextContainer">
                        <div className="auctionTextDescription">
                        <div id="amznCharityBannerInner">

                          </div>
                          <h1 className="auctionTextTitle">
                            <center><i>Support Bahamian <br />Agriculture</i></center>
                          </h1>
                          <center>
                            <div dangerouslySetInnerHTML={{__html: test}} />
                            <b>Join Us in the fight against food <br />insecurity in the Bahamas</b>
                          </center><br />
                          <center>
                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                              <input type="hidden" name="cmd" value="_s-xclick" />
                              <input type="hidden" name="hosted_button_id" value="CJDB7WWHEMGLA" />
                              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                              <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                            </form>
                            {/* <Link to="/about">
                              <Button outline={false} style={{color: 'black'}} size="sm" color="warning">Purchase Tickets</Button>
                            </Link> ///}
                          </center>
                        </div>
                      </div> */}
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
                      <NavLink tag={RRNavLink} to="#" onClick={(event) => window.open("https://youtu.be/0NXalyzcDj8")}>
                        Introduction to ION Bahamas Video
                      </NavLink>
                      <NavLink tag={RRNavLink} to="#" onClick={(event) => window.open(smileLink)}>
                        Amazon Smile
                      </NavLink>
                      <NavLink tag={RRNavLink} to="#" onClick={(event) => window.open(farmPayPalLink)}>
                        Support Bahamian Agriculture
                      </NavLink>
                      {/* <NavLink tag={RRNavLink} to="/scholarship">
                        Apply For Scholarship
                      </NavLink> */}
                      <NavLink tag={RRNavLink} to="#" onClick={(event) => window.open("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CJDB7WWHEMGLA&source=url")}>
                        <b>{collegeMsgBox}</b>
                      </NavLink>
                    </div>
                  </div>
                </center>
              </Col>
              <Col xs={12} lg={6} md={{ span:6, offset: 0 }}>
                <div className="meetingBox">
                  <div className="meetingBoxTitle">Hurricane Dorian Relief Efforts</div>
                  <div  className="meetingBoxDescription">
                    <p>As we’re all aware by now, Hurricane Dorian, a severe category 5 storm, has inflicted catastrophic damage on the northern Bahamas. Many are left in its wake without shelter and basic needs and we know that the road to recovery will be a long and difficult one.</p>
                    <p>ION Bahamas will facilitate a monetary donation drive, with 100% of proceeds directly benefiting survivors of Dorian’s wrath.</p>
                    <p>Please follow the following link to our website and hit the Hurricane Dorian Relief Efforts button to donate.</p>
                    <p>We appreciate any help you can provide. We are our brothers’ keepers.</p>
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
