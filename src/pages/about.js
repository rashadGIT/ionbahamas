import React, { Component } from 'react';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import { Button, NavLink } from 'reactstrap';
// import Avatar from 'react-avatar';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import '../css/col.css';
import '../css/about.css';

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
    const hi = "This text is the content of the box. We have added a 50px padding, 20px margin and a 15px green border. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const sponsors = [
        // {name:"KFC", link : "https://www.google.com"},
        // {name : "Bahamas Air",link : "https://www.google.com"},
        // {name:"Costco", link : "https://www.google.com"},
        {name : "LPL Financial",link : "https://www.google.com"}
        // {name : "Texas Instruments",link : "https://www.google.com"}
      ];
    const events = [
      {
        name : "Fashion Show", 
        date: new Date("09/21/2019"), 
        time : "10:00am - 2:00pm",
        location: null,
        address: "TBD", 
        mapURL : "", 
        detailsLink: "",
        calendarLink: "http://www.google.com/calendar/event?action=TEMPLATE&dates=20190921T220000Z%2F20190921T230000Z&text=Ion%20Fashion%20Show&location=Outside&details=fpierjnpgifjernpigjnepr"
      },
      {
        name : "Mommy and Tea", 
        date: new Date("09/21/2019"), 
        time : "10:00am - 2:00pm", 
        address: "TBD", 
        mapURL : "", 
        detailsLink: "",
        calendarLink: "http://www.google.com/calendar/event?action=TEMPLATE&dates=20190921T220000Z%2F20190921T230000Z&text=Ion%20Fashion%20Show&location=Outside&details=fpierjnpgifjernpigjnepr"

      }
      // {
      //   name : "Mommy and Tea", 
      //   date: new Date("12/22/1988"), 
      //   time : "10:00am - 2:00pm", 
      //   address: "", 
      //   mapURL : "", 
      //   detailsLink: ""
      // },
      // {
      //   name : "Mommy and Tea", 
      //   date: new Date(), 
      //   time : "10:00am - 2:00pm", 
      //   address: "", 
      //   mapURL : "", 
      //   detailsLink: ""
      // }
    ].sort((a,b) => a.date - b.date);
    const values = [
      {
        title : "Our Mission",
        description : "Bla Bla Bla"
      },
      {
        title : "Our Vision",
        description : "Bla Bla Bla"
      },
      {
        title : "The Purpose",
        description : "Bla Bla Bla"
      },
      {
        title : "he Message",
        description : "Bla Bla Bla"
      },
      {
        title : "Objectives Involved",
        description : "Bla Bla Bla"
      },
      {
        title : "We Believe That",
        description : "Bla Bla Bla"
      },
      {
        title : "We Pledge To You",
        description : "Bla Bla Bla"
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
            <div>
              <h4>{x.title}</h4>
              <p>{x.description}</p>
              {(values.length -1 !== i) ? <hr /> : null}
            </div>
          )}
          </Col>
          <Col xs={12} md={4}>
            <h3>Sponsors &amp; Supporters</h3>
            {sponsors.map((x,i) => <div key={i} className="sponsors"><a href={x.link}>{x.name}</a>{(sponsors.length-1 !== i) ? <span>&nbsp;&bull;&nbsp;</span> : null}</div>)}
            <hr />
            <h3>Events 2019</h3>
            <Table striped bordered hover size="sm" responsive>
              <thead>
                <tr>
                  <th>When</th>
                  <th>Events</th>
                  <th>Location</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {events.map((evt,i) => 
                  <tr key={i}>
                    <td>{evt.date.toDateString()} <br />{evt.time}</td>
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
                    <td>
                      <a href={evt.detailsLink}>Click Here</a>
                    </td>
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
