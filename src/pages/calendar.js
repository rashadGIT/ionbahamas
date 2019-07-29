import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Layout from '../components/Layout';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import {
  Calendar,
  DateLocalizer,
  momentLocalizer,
  globalizeLocalizer,
  move,
  Views,
  Navigate,
  components,
} from 'react-big-calendar'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Modal from 'react-responsive-modal';
import { Button } from 'reactstrap';
import {Link } from "react-router-dom";
import plus from '../imgs/Plus-icon.png'
import { maxWidth } from '@material-ui/system';
import '../css/calendar.css'
import IosAddCircleOutline from 'react-ionicons/lib/IosAddCircleOutline'

const bread = [
  {order : 2, title: "Calendar", link : "/calendar"},
  {order : 1, title: "Home", link : "/"}
].sort((a,b) => a.order - b.order);

const localizer = momentLocalizer(moment)

const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

const events = [
  {
    allDay: false,
    startDate: new Date("09/21/2019"),
    endDate: new Date("09/21/2019"),
    startTime : "7:00pm",
    endTime : "10:00pm",
    title: 'A Taste of Paradise Fundraising Gala Dinner & Silent Auction',
    description : (<div><p>(Featuring a Uniquely Bahamian Mini Fashion Show)</p></div>),
    calendarLink: "https://www.google.com/calendar/render?action=TEMPLATE&text=A+Taste+of+Paradise+Gala+Dinner&details=African+American+Museum+of+Dallas+-+3536+Grand+Ave%2C+Dallas%2C+TX+75210&location=3536+Grand+Ave%2C+Dallas%2C+TX+75210&dates=20190922T000000Z%2F20190922T030000Z",
    mapURL : "https://goo.gl/maps/1K96gzDvLR2TiDn68",
    location : (<div>African American Museum At Fair Park</div>)

  },
  {
    allDay: false,
    startDate: null,
    endDate: null,
    title: 'Bowl-A-Thon',
    description : null
  },
  {
    allDay: false,
    startDate: null,
    endDate: null,
    title: 'Golf Tournament',
    description : null
  },
  
  ].filter(x => {
      if(x.startDate === null) return true;
      return x.startDate > new Date(Date.now() - (1000 * 60 * 60 * 24 * 30))
    })
  .sort((a,b) => a.startDate - b.startDate)
  ;

  
  class donate extends Component {
    constructor(props){
      super(props);
      this.state={
        loading : true,
        err : false,
        selectedDate : new Date(),
        date: new Date(),
        width: 500,
        open: false,
        event : null
      }
    }

    componentWillMount(){

    }

    componentDidMount(){
      window.addEventListener("resize", () => {
        this.setState({
          width: window.innerWidth,
          height: window.innerHeight
        });
      });

    }
    componentDidCatch(error, errorInfo){
      this.setState({err : true})
    }

    color = (num) => {
      if(num & 1) {
        return '#e6e6e6'
      }
      else {
        return  'white'
      }
    }

    onOpenModal = () => {
      this.setState({ open: true });
    };
   
    onCloseModal = () => {
      this.setState({ open: false });
    };

    render() {
      return (
        <div>
          <Modal open={this.state.open} onClose={this.onCloseModal} center>
            <h5 style={{paddingRight : 60}}>{(this.state.event) ? this.state.event.title : null}</h5>
            <div>When : {(this.state.event) ? this.state.event.startDate.toLocaleDateString("en-US", options) : null}</div>
            <div>Time : {(this.state.event) ? this.state.event.startTime : null} - {(this.state.event) ? this.state.event.endTime : null}</div>
            <div>Location : {(this.state.event) ? <Link style={{display : 'inline-block'}} onClick={() => window.open(this.state.event.mapURL)}>{this.state.event.location}</Link> :  null}</div>
            <div>{(this.state.event) ? this.state.event.description : null}</div>
            <center>
              <Button color="link" onClick={(event) => {window.open(this.state.event.calendarLink);}} >&#43; Add event to Google Calendar</Button>
            </center>
          </Modal>
          <Container fluid={true}>
            <Row>
              <Col xs={{size :6, order : 2 }} md={{size :6 , order : 1}} className="bigCalendar">
                <div style={{padding : '20px 0px 0px 20px'}}>
                  <Calendar
                    style={{height : 600}}
                    localizer={localizer}
                    events={events}
                    culture='en-GB'
                    views={['month']}
                    startAccessor="startDate"
                    endAccessor="endDate"
                    onSelectEvent={x => this.setState({ 
                        open : !this.state.open,
                        event : x
                      })}
                    onNavigate={(date) => this.setState({ selectedDate: date })}
                    toolbar={true}
                    // step={60}
                    // onView={() => {}}
                    date={this.state.selectedDate}
                    // onNavigate={date => this.setState({ date })}
                  />
                </div>
              </Col>
              <Col xs={{size :6 , order: 1 }} md={{size: 6 , order : 2}}>
                <div style={{padding : '0px 0px 0px 0px'}}>
                  <center>
                    <h2>Events 2019</h2>
                  </center>
                  <List style={{borderStyle: 'solid', borderColor :this.color(1)}}>
                    {events
                    .filter(x => x.endDate >= new Date().setHours(0,0,0,0))
                    .sort((a,b) => a.startDate - b.startDate)
                    .map((x,i) => {
                      return <div key={i}>
                        <ListItem alignItems="flex-start" style={{backgroundColor : this.color(i), cursor: 'pointer'}} >
                          {(x.startDate) ? <div>
                            <IosAddCircleOutline  onClick={() => 
                            this.setState({ 
                              open : !this.state.open,
                              event : x
                            })} fontSize="40px" color="#000000" 
                            className="eventPlus" style={{color : 'balck', position: 'absolute', left : 20, top: '50%', msTransform: 'translateY(-50%)', 'transform': 'translateY(-50%)'}}
                            />
                          </div> : null}
                          <ListItemText
                            className="listItemText"
                            primary={x.title}
                            secondary={
                              <React.Fragment>
                                <Typography
                                  component="span"
                                  variant="body2"
                                  color="textPrimary"
                                >
                                  <div>Date : {x.startDate.toLocaleDateString("en-US", options)}</div>
                                  <div>Time : {x.startTime} - {x.endTime}</div>
                                </Typography>
                                <Link onClick={() => window.open(x.mapURL)}>{x.location}</Link>
                                {x.description}
                                <center>
                                  <Button color="link" onClick={(event) => {window.open(x.calendarLink);}} >&#43; Add event to Google Calendar</Button>
                                </center>
                              </React.Fragment>
                              }
                              onClick={() => this.setState({selectedDate: x.startDate})}
                          />
                        </ListItem>
                        </div>
                      })}
                  </List>
                  <br />
                  
                  <h4>Upcoming Events</h4>
                    
                  <List style={{borderStyle: 'solid', borderColor :this.color(1)}}>
                    {events
                      .filter(x => x.startDate === null)
                      .sort((a,b) => {
                        if(a.startDate) return -1;
                        return a.startDate - b.startDate;
                      })
                      .map((x,i) => {
                        return <div key={i}>
                          <ListItem alignItems="flex-start" style={{backgroundColor : this.color(i)}} >
                            {(x.startDate) ? <div>
                              <IosAddCircleOutline  onClick={() => 
                              this.setState({ 
                                open : !this.state.open,
                                event : x
                              })} fontSize="40px" color="#000000" 
                              className="eventPlus" style={{color : 'balck', position: 'absolute', left : 20, top: '50%', msTransform: 'translateY(-50%)', 'transform': 'translateY(-50%)'}}
                              />
                            </div> : null}
                            <ListItemText
                              className="listItemText"
                              primary={x.title}
                              secondary={
                                <React.Fragment>
                                  <Typography
                                    component="span"
                                    variant="body2"
                                    color="textPrimary"
                                  >
                                    {(x.startDate) ? x.startDate.toLocaleDateString("en-US", options) : x.startDate}
                                  </Typography>
                                  {x.description}
                                </React.Fragment>
                                }
                                onClick={() => {if(x.startDate) this.setState({selectedDate: x.startDate})}}
                            />
                          </ListItem>
                          </div>
                        })}
                    </List>
                </div>
              </Col>
            </Row>
            </Container>
          </div>
      );
    }
}

export default Layout(donate,bread);
