import React from 'react';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import sponsors from '../module/about'
import { events } from '../module/events'
import { dateFormat } from '../module/util'
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faBriefcase, faHome, faBook, faCheck  } from '@fortawesome/free-solid-svg-icons';
import '../css/col.css';
import '../css/about.css';

export default function about(props: any){
    return (
      <Layout>
        <div className="about-us-page">
      <header className="header">
        <h1 className="title">About Us</h1>
        <p className="slogan">Empowering Positive Change</p>
      </header>
      <section className="about-us-section alt">
        <div className="content">
          <h2>Our History</h2>
          <p>
            Founded in 2018, ION Bahamas has been committed to creating positive change through various projects and initiatives.
          </p>
        </div>
      </section>
      <section className="about-us-section">
        <div className="content">
          <h2>Our Mission</h2>
          <p>
            Our mission is to be of assistance to and enhance the lives of Bahamians and 
            those with a connection to the Bahamas either at home or abroad via education 
            and civic engagement.
          </p>
        </div>
      </section>
      <section className="about-us-section alt">
        <div className="content">
          <h2>The Message</h2>
          <p>
            ION Bahamas thrives through its members, including the Executive Board and Board of Directors. Elected directors shape policies and ambitions. The President leads board gatherings. Engagement blooms through committees: Membership, PR, Fundraising, and Social Committees. Our diverse workforce arises from varied backgrounds.
          </p>
          <p>
            But let's focus on you. If you're a local Bahamian, ION Bahamas is your haven. Join us for unparalleled connections among Bahamians and descendants. If you're a Bahamas enthusiast or friend, we invite you warmly.
          </p>
        </div>
      </section>
      <section className="about-us-section">
        <div className="content">
          <h2>We Believe That</h2>
          <ul className="values-list">
            <li>
              <FontAwesomeIcon icon={faCheck} className="icon icon-check-yellow" />
              Unifying our efforts for positive community change
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="icon icon-check-yellow" />
              Engaging members and communities for success
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="icon icon-check-yellow" />
              Prioritizing transparency and accountability
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="icon icon-check-yellow" />
              Built on respect, diligence, and commitment
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="icon icon-check-yellow" />
              Nurturing success through education and support
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="icon icon-check-yellow" />
              Guiding responsible citizenship with mentorship
            </li>
          </ul>
        </div>
      </section>
      <section className="about-us-section alt">
        <div className="content">
          <h2>Objectives</h2>
          <ul className="values-list">
            <li>
              <FontAwesomeIcon icon={faHandshake} className="icon" />
              Facilitating Meaningful Interaction and Networking Opportunities
            </li>
            <li>
              <FontAwesomeIcon icon={faBriefcase} className="icon" />
              Expanding Pathways to Meaningful Employment
            </li>
            <li>
              <FontAwesomeIcon icon={faHome} className="icon" />
              Enhancing the economic stability of our community
            </li>
            <li>
              <FontAwesomeIcon icon={faBook} className="icon" />
              Enriching Through Educational Advantages
            </li>
          </ul>
        </div>
      </section>
      <section className="about-us-section">
        <div className="content">
          <h2>Our Pledge to You</h2>
          <ul className="values-list">
              <li>
                <FontAwesomeIcon icon={faCheck} className="icon icon-check-blue" />
                We will consistently deliver top-tier programs.
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="icon icon-check-blue" />
                We will uphold values, fostering harmony, and integrity.
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="icon icon-check-blue" />
                We will honor contributors to organizational success
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="icon icon-check-blue" />
                We will ensure transparency through budgets, records, and updates.
              </li>
            </ul>
        </div>
      </section>
      <section className="about-us-section alt">
        <div className="content">
          <h2 className="section-title">Our Sponsors</h2>
          <div className="sponsor-list">
            {sponsors.map((x,i) => 
              <a 
                href={x.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="sponsor-link">
                <img src={x.img} alt="Sponsor 1" className="sponsor-logo" />
                <p style={{paddingTop: '10px'}}>{x.name}</p>
              </a>)
            }
          </div>
        </div>
      </section>
    </div>



      {/* <h1 style={{paddingLeft : '15px'}}>About Us</h1>
      <Container fluid={true}style={{paddingLeft : '30px'}}>
        <Row noGutters={false}>
          <Col xs={12} md={8}>
          <h4><b>Our Mission</b></h4>
          <p>
            Our mission is to be of assistance to and enhance the lives of Bahamians and 
            those with a connection to the Bahamas either at home or abroad via education 
            and civic engagement.
          </p>
          <hr />
          <h4><b>The Message</b></h4>
          <p>
            ION Bahamas is made up of Bahamians living in the Dallas/Fort Worth Metroplex.
          </p>
          <p>
            ION Bahamas is operated by its members, consisting of the Executive Board and 
            Board of Directors. An elected Board of Directors determines policies and sets goals. 
            The President presides over all Board Meetings. Members become involved by working on 
            committees, which include: Membership Development, Public Relations, Fundraising, and 
            Social Committees. These members come from a wide range of backgrounds and engage in a 
            very diverse workforce.
          </p>
          <p>
            But enough about us-let’s talk about you. If you are a Bahamian residing in the Dallas/Fort 
            Worth Metroplex, then ION Bahamas, is your home away from home. Come join us for an 
            unparalleled experience to interact with fellow Bahamians and descendants of the Bahamas. 
            Additionally, if you are a friend of The Bahamas or a friend of any Bahamian, we welcome you.
          </p>
          <hr />
          <h4><b>Objectives</b></h4>
          <ul className="column">
            <li>Promoting opportunities for interaction and networking</li>
            <li>Increasing employment opportunities</li>
            <li>Enhancing the economic stability of our community</li>
            <li>Providing educational benefits</li>
          </ul>
          <p>
            We provide quality programs and support to all of our professional, family and student members 
            and are committed to preserving and sharing our culture.
            There is just so much to know about Bahamians, our history and who we are as a people.
          </p>
          <p>
            ION Bahamas is currently led by its President, Mr. Carlisle Mott, supported by the Board of Directors.  Our
            Board of Directors is a distinct group of professionals with backgrounds in IT, Finance, Communications, Clinical Science and Engineering, serving in the
            roles of President, Assistant Chairman, Secretary, Treasurer, and Advisors.
          </p>
          <hr />
          <h4><b>We Believe That</b></h4>
          <ul>
            <li>When we work together and are united as a force, we can bring about changes in our community for the good</li>
            <li>In order to be successful, our members and their respective communities must be fully engaged</li>
            <li>Transparency and accountability are vital to the success of our organization</li>
            <li>Our organization must be based on respect, diligence and commitment</li>
            <li>Education is the key to success and we must propel and guide each other along those paths</li>
            <li>As responsible citizens we must provide guidance and mentorship</li>
          </ul>
          <hr />
          <h4><b>We Pledge To You</b></h4>
          <ul>
              <li>We will strive to deliver the highest quality of programs always</li>
              <li>We will not take part in any activity that will destroy or degrade the harmony of our values and beliefs</li>
              <li>We will recognize those who contribute to the success of the organization</li>
              <li>We will develop and support programs that encourage members to grow in their individual talents or skills</li>
              <li>We will maintain transparency in the Association’s dealings by preparing annual budgets, maintaining accurate records, and providing membership with quarterly updates on finances</li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h3>Sponsors &amp; Supporters</h3>
            {sponsors.map((x,i) => <div key={i} className="sponsors"><a target="_blank" rel="noopener noreferrer" href={x.link}>{x.name}</a>{(sponsors.length-1 !== i) ? <span>&nbsp;&bull;&nbsp;</span> : null}</div>)}
            
            {(events.length > 0) && <div>
              <hr />
              <h3>Upcoming Events</h3>
              <Table striped bordered hover size="sm" responsive>
                <thead>
                  <tr>
                    <th>When</th>
                    <th>Events</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  {events
                  .map((evt,i) => {
                    return <tr key={i}>
                      <td>{`${dateFormat(evt.startDate)}`}<br />{`${evt.startTime} - ${evt.endTime}`}</td>
                      <td>
                        {evt.title}
                        <br />
                        {(evt.calendarLink) ? 
                          <a rel="noopener noreferrer" target="_blank" href={evt.calendarLink}>
                            <img alt="" src={"https://www.google.com/calendar/images/ext/gc_button1_en.gif"} />
                          </a> : null}
                      </td>
                      <td>
                        {(evt.location !== null && evt.mapURL !== null) ?
                          <a rel="noopener noreferrer" target="_blank" href={evt.mapURL}>
                            {evt.location}
                          </a> : <div>TBD</div>
                        }
                      </td>
                    </tr>
                    })}
                </tbody>
              </Table>
            </div>}
          </Col>
        </Row>
      </Container> */}
      </Layout>
    );
};
