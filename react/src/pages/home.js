import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {NavLink } from 'reactstrap';
import { Carousel } from 'react-responsive-carousel';
import Thanksgiving from '../imgs/thanksgiving.jpg'
import {Link as RRNavLink } from "react-router-dom";
import { Button } from 'reactstrap';
import { shortcutLinks } from '../module/shortcuts'
import { environment as env } from '../env/env.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../css/carousel.css'
import '../css/col.css';
import '../css/meeting.css';
import useAxios from 'axios-hooks'
import { membershipTypes } from '../module/membershipTypes';
import {StyleRoot} from 'radium';
import MembershipBox from '../components/MembershipBox'
import {styles} from '../module/styles'

const collegeMsgBox = "Texas College Student Relief Efforts";
const smileLink = "https://smile.amazon.com/ch/84-2453440";

const home = () => {
  const [{ data, loading, error, response }, refetch] = useAxios(`${env.proxy}/members/getMembershipData`)
  const [memberType, setMemberType] = useState({});

  useEffect(() => {
    document.title = "ION Bahamas";
  },[]);

  useEffect(() => {
    document.title = "ION Bahamas";
    if(data !== undefined){
      for(let val in membershipTypes){
        membershipTypes[val].amount = data[membershipTypes[val].type].price;
      }
      setMemberType(membershipTypes);
    }
  },[data]);

  return <Layout>
  <StyleRoot>
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
                {/* <div key={"Thanksgiving"}>
                  <img alt="" src={Thanksgiving} />
                  <div className="carouselTextContainerThanksgiving">
                    <div className="auctionTextDescriptionThanksgiving">
                      <h1 className="auctionTextTitleThanksgiving">
                        <center><i>Thanksgiving Gift Card <br />Giveaway</i></center>
                      </h1>
                      <center>
                        <b>ION Bahamas is giving away thanksgiving gift cards to 5 families!</b>
                        <p>
                          Gift Card Drawing : <b>FRIDAY NOVEMBER 13TH</b>
                        </p>
                        <div>Application closes :  <b>Thursday NOVEMBER 12TH at midnight</b></div>
                      </center>
                      <center>
                        <Button 
                          onClick={(event) => window.open("https://docs.google.com/forms/d/e/1FAIpQLScxDh1Y8zt2kvsifeNKt82sNhN-lETK1NQ8RbCprdSVRHb1qg/viewform?usp=sf_link")}
                          outline={false} 
                          style={{color: 'black'}} 
                          size="lg" 
                          color="warning">
                            Application Today!
                        </Button>
                      </center>
                    </div>
                  </div>
                </div> */}
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
                        <RRNavLink 
                          to={{
                            pathname: `/donate/Agriculture`
                        }}
                        
                        // to="/donate/Agriculture"
                        >
                          <Button outline={false} style={{color: 'black'}} size="sm" color="warning">Donate</Button>
                        </RRNavLink>
                      </center>
                    </div>
                  </div>
                </div>
                <div key={"Smile"}>
                  <img alt="" src="https://sierrapto.org/cms/wp-content/uploads/2015/08/Amazon-smiles-2.png" />
                  <a href={smileLink} target="_blank" rel="noopener noreferrer" >
                    <div className="text">
                      <div className="support-wrapper">
                        <div className="support" style={{fontSize: '40px', lineHeight: '1.6',marginTop: '3px', marginBottom: '1.5px'}}>
                          Support <br />
                          Igniting Our Nation Bahamas
                        </div>
                      </div>
                      <br />
                      <br/>
                      <p className="when-shop">When you shop at <b>smile.amazon.com,</b></p>
                      <p className="donates">Amazon donates.</p>
                    </div>
                  </a>
                </div>
              </Carousel>
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
                        <NavLink tag={RRNavLink} to="/donate/Agriculture">
                          Support Bahamian Agriculture
                        </NavLink>
                        <NavLink 
                          tag={RRNavLink} 
                          to="#" 
                          onClick={(event) => window.open("https://docs.google.com/forms/d/e/1FAIpQLScxDh1Y8zt2kvsifeNKt82sNhN-lETK1NQ8RbCprdSVRHb1qg/viewform?usp=sf_link")}
                        >
                          Thanksgiving Gift Card Giveaway
                        </NavLink>
                        <NavLink tag={RRNavLink} to="/donate/StudentRelief">
                          <b>{collegeMsgBox}</b>
                        </NavLink>
                      </div>
                    </div>
                  </center>
                </Col>
                <Col xs={12} lg={6} md={{ span:6, offset: 0 }}>
                  <div className="meetingBox">
                    <div className="meetingBoxTitle">Disaster Relief Efforts</div>
                    <div  className="meetingBoxDescription">
                      <p>As we’re all aware by now, Hurricane Dorian, a severe category 5 storm, has inflicted catastrophic damage on the northern Bahamas. Many are left in its wake without shelter and basic needs and we know that the road to recovery will be a long and difficult one.</p>
                      <p>ION Bahamas will facilitate a monetary donation drive, with 100% of proceeds directly benefiting survivors of Dorian’s wrath.</p>
                      <p>Please follow the following link to our website and hit the Hurricane Dorian Relief Efforts button to donate.</p>
                      <p>We appreciate any help you can provide. We are our brothers’ keepers.</p>
                      <center>
                        <RRNavLink to="/donate/DisasterRelief">
                          <Button outline={false} style={{color: 'black'}} size="sm" color="warning">Donate to Disaster Relief Fund</Button>
                        </RRNavLink>
                      </center>
                    </div>
                  </div>
                </Col>
                <Col xs={12} lg={12} md={12}>
                  <div className="membership">
                    <div className="membershipTitle">
                      <center>
                        <h4>Membership Categories</h4>
                      </center>
                    </div>
                    <div style={styles.slideInLeft}>
                      {Object.keys(memberType).map((i) => 
                        <MembershipBox
                          key={membershipTypes[i].type}
                          type={membershipTypes[i].type}
                          img={membershipTypes[i].img}
                          description={membershipTypes[i].description}
                          amount={membershipTypes[i].amount}
                        />)}
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </StyleRoot>
        </Layout>
}
export default home;
