import React, { Component } from 'react';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
// import { Button, NavLink } from 'reactstrap';
import Speech from 'speak-tts'
// import Avatar from 'react-avatar';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import '../css/col.css';
import '../css/about.css';

const speech = new Speech();

const bread = [
  {order : 2, title: "About", link : "/about"},
  {order : 1, title: "Home", link : "/"}
].sort((a,b) => a.order - b.order);

class index extends Component {
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
    const sponsors = [
        // {name:"KFC", link : "https://www.google.com"},
        // {name : "Bahamas Air",link : "https://www.google.com"},
        // {name:"Costco", link : "https://www.google.com"},
        {name : "Carlisle Mott Financial",link : "http://www.carlislemott.com"}
        // {name : "Texas Instruments",link : "https://www.google.com"}
      ];
    const events = [
      {
        name : "A taste of Paradise Gala", 
        date: new Date("09/21/2019"), 
        time : "7:00 pm - 10:00 pm",
        location: "African American Museum of Dallas",
        address: "3536 Grand Ave, Dallas, TX 75210", 
        mapURL : "https://goo.gl/maps/1K96gzDvLR2TiDn68", 
        detailsLink: "",
        calendarLink: "https://www.google.com/calendar/render?action=TEMPLATE&text=A+taste+of+Paradise+Gala&details=African+American+Museum+of+Dallas+-+3536+Grand+Ave%2C+Dallas%2C+TX+75210&location=T3536+Grand+Ave%2C+Dallas%2C+TX+75210BD&dates=20190922T000000Z%2F20190922T030000Z"
      },
      {
        name : "Bowl-A-Thon", 
        date: null, 
        time : "TBD", 
        address: "TBD", 
        mapURL : null, 
        detailsLink: null,
        calendarLink: null

      },
      {
        name : "Golf Tournament", 
        date: null, 
        time : "TBD", 
        address: "TBD", 
        mapURL : null, 
        detailsLink: null
      }
      // {
      //   name : "Mommy and Tea", 
      //   date: new Date(), 
      //   time : "10:00am - 2:00pm", 
      //   address: "", 
      //   mapURL : "", 
      //   detailsLink: ""
      // }
    ]
    .sort((a,b) => {
      if(a.date == null) return 1
      return a.date - b.date
    });

    const values = [
      {
        title : "Our Mission",
        description : (<div>
            <p>ION Bahamas is dedicated to uniting all Bahamians in the Dallas/Fort Worth Metroplex, as well as descendants of The Bahamas to continue expressing our standards of excellence, through our culture while educating, sharing and helping each other reach a common goal.</p>
          </div>)
      },
      {
        title : "Our Vision",
        description : (<div>
              <p>ION Bahamas will become the uniting force for all Bahamians in the Dallas/Fort Worth Metroplex, with an interest in connecting with other Bahamian Associations throughout the United States and Canada.</p>
            </div>)
      },
      {
        title : "The Purpose",
        description : (<div>
            <p>To educate, motivate, inspire and empower each other to a higher level of excellence in achieving our collective and individual goals.  This is done through workshops, seminars, networking events and other social events etc.  Guest speakers are invited to address concerns and issues important to us such as:</p>
          <ol type="I" className="column">
            <li>Immigration</li>
            <li>Taxes</li>
            <li>Financial Consultation</li>
            <li>Credit - Credit repair</li>
            <li>College life as an international student</li>
            <li>Career Planning</li>
          </ol>
        </div>)
      },
      {
        title : "The Message",
        description : (<div><p>ION Bahamas is made up of Bahamians living in the Dallas/Fort Worth Metroplex.</p>
          <p>These members come from a wide range of backgrounds and engage in a very diverse workforce that includes: doctors, lawyers, scientist, architects,
          accountants and students, to name a few. Our members also serve in managing roles in some of the nation’s top corporate and government organizations.</p>
          <p>ION Bahamas is operated by its members, consisting of the Executive Board and Board of Directors. An elected
          Board of Directors determines policies and set goals.  The President presides over all Board Meetings. Members become involved by working on
          committees, which include: Membership Development, Public Relations, Fundraising, and Social Committees.</p>
          <p>But enough about us-let’s talk about you. If you are a Bahamian residing in the Dallas/Fort Worth Metroplex, then ION Bahamas, is your home away from home. Come join us for an unparalleled experience to interact with fellow Bahamians and descendants of the
          Bahamas.</p></div>)
      },
      {
        title : "Objectives Involved",
        description : (<div>
          <ul type="curcle" className="column">
            <li>Promoting opportunities for the interaction and networking of members</li>
            <li>Fostering growth and prosperity of businesses and individuals</li>
            <li>Increasing employment opportunities</li>
            <li>Enhancing the economic stability of the Bahamian community</li>
            <li>Providing educational scholarships for our youth</li>
          </ul>
          <p>We provide quality programs and support to all of our professional, family and student members and are committed to preserving and sharing our culture.
            There is just so much to know about Bahamians, our history and who we are as a people.</p>
          <p>We are highly respected for our unique cultural abilities, educational accomplishments, and political awareness.</p>
          <p>ION Bahamas is currently led by its President, Mr. Carlisle Mott, supported by the Board of Directors.  Our
          Board of Directors is a distinct group of professionals with backgrounds in IT, Finance, Communications, Clinical Science and Engineering, serving in the
          roles of President, Assistant Chairman, Secretary, Treasurer, and Advisors.</p>
          </div>)
      },
      {
        title : "We Believe That",
        description : (<div><ul><li>When we work together and are united as a force, we can bring about changes in our community for the good</li>
          <li>In order to be successful, our members and their respective communities must be fully engaged</li>
          <li>Transparency and accountability are vital to the success of our organization</li>
          <li>Our organization must be based on respect, diligence and commitment</li>
          <li>Education is the key to success and we must propel and guide our youth to those paths</li>
          <li>As responsible citizens we must provide guidance and mentorship to our nationals, especially our youth</li>
          <li>Our organization exists as a connection to our homeland and that we must foster unity to move forward, upward, onward, together</li></ul></div>)
      },
      {
        title : "We Pledge To You",
        description : (<div>
            <ul>
              <li>We will strive to deliver the highest quality of programs always</li>
              <li>We will not take part in any activity that will destroy or degrade the harmony of our values and beliefs</li>
              <li>We will recognize those who contribute to the success of the organization</li>
              <li>We will develop and support programs that encourage members to grow in their individual talents or skills</li>
              <li>We will maintain transparency in the Association’s dealings by preparing annual budgets, maintaining accurate records, and providing membership with quarterly updates on finances</li>
            </ul>
          </div>)
      }
    ]

    return (
      <Container fluid={true}>
        <Row>
          <Col xs={12} md={12}>
          <h1>About Us</h1>
          </Col>
        </Row>
        <Row noGutters={false}>
          <Col xs={12} md={8}>
          {values.map((x,i) => 
            <div key={i}>
              <h4><b>{x.title}</b></h4>
              {x.description}
              {(values.length -1 !== i) ? <hr /> : null}
            </div>
          )}
          </Col>
          <Col xs={12} md={4}>
            <h3>Sponsors &amp; Supporters</h3>
            {sponsors.map((x,i) => <div key={i} className="sponsors"><a target="_blank" href={x.link}>{x.name}</a>{(sponsors.length-1 !== i) ? <span>&nbsp;&bull;&nbsp;</span> : null}</div>)}
            <hr />
            <h3>Events 2019</h3>
            <Table striped bordered hover size="sm" responsive>
              <thead>
                <tr>
                  <th>When</th>
                  <th>Events</th>
                  <th>Location</th>
                  {/* <th>Details</th> */}
                </tr>
              </thead>
              <tbody>
                {events.map((evt,i) => 
                  <tr key={i}>
                    <td>{(evt.date) ? evt.date.toDateString() : "TBD"} <br />{evt.time}</td>
                    <td>
                      {evt.name}
                      <br />
                      {(evt.calendarLink) ? 
                        <a rel="noopener noreferrer" target="_blank" href={evt.calendarLink}>
                          <img alt="" border="0" src={"https://www.google.com/calendar/images/ext/gc_button1_en.gif"} />
                        </a> : null}
                    </td>
                    <td>
                      {(evt.location) ? <span><label>{evt.location}</label><br /></span> : null}
                      <a rel="noopener noreferrer" target="_blank" href={evt.mapURL}>
                        {evt.address}
                      </a>
                    </td>
                    {/* <td>
                      <a href={evt.detailsLink}>Click Here</a>
                    </td> */}
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
        {/* <Row noGutters={true}>
          <Col xs={12} md={4}><div className="box">{hi}</div></Col>
          <Col xs={12} md={4}><div className="box">{hi}</div></Col>
          <Col xs={12} md={4}><div className="box">{hi}</div></Col>
        </Row>
        <Row>
          <Col xs={12} md={12}><div className="box">{hi}</div></Col>
          <Col xs={12} md={12}><div className="box">{hi}</div></Col>
          <Col xs={12} md={12}><div className="box">{hi}</div></Col>
          <Col xs={12} md={12}><div className="box">{hi}</div></Col>
          <Col xs={12} md={12}><div className="box">{hi}</div></Col>
          <Col xs={12} md={12}><div className="box">{hi}</div></Col>
        </Row> */}
      </Container>
    );
  }
}

export default Layout(index,bread);
