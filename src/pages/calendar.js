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
    title: 'A taste of Paradise Gala',
    description : 'ifonfoirenoigferognoer'
  },
  {
    allDay: false,
    startDate: null,
    endDate: null,
    title: 'Bowl-A-Thon',
    description : 'ifonfoirenoigferognoer'
  },
  {
    allDay: false,
    startDate: null,
    endDate: null,
    title: 'Golf Tournament',
    description : 'ifonfoirenoigferognoer'
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
        open: false
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
            <h2>Simple centered modal</h2>
          </Modal>
          <Container fluid={true}>
            <Row>
              <Col xs={{size :6, order : 2 }} md={{size :6 , order : 1}}>
                <div style={{padding : '20px 0px 0px 20px'}}>
                  <Calendar
                    style={{minHeight : 600}}
                    localizer={localizer}
                    events={events}
                    culture='en-GB'
                    views={['month']}
                    startAccessor="startDate"
                    endAccessor="endDate"
                    onSelectEvent={event => this.setState({ open : !this.state.open})}
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
                    <h2>UpComing Events</h2>
                  </center>
                  <List style={{borderStyle: 'solid', borderColor :this.color(1)}}>
                    {events
                    .filter(x => {
                      if(x.startDate === null) return true;
                      return x.endDate >= new Date().setHours(0,0,0,0)
                    })
                    .slice(0,7)
                    .sort((a,b) => {
                      if(a.startDate) return -1;
                      return a.startDate - b.startDate;
                    })
                    .map((x,i) => {
                      return <div key={i}>
                        <ListItem alignItems="flex-start" style={{backgroundColor : this.color(i), cursor: 'pointer'}} >
                          <ListItemText 
                            primary={x.title}
                            secondary={
                              <React.Fragment>
                                <Typography
                                  component="span"
                                  variant="body2"
                                  color="textPrimary"
                                >
                                  {(x.startDate) ? x.startDate.toLocaleDateString("en-US", options) : "TBD"}
                                </Typography>
                                {' - '+x.description}
                                
                               {/* <Button color="link">Add Event to my Google Calendar</Button> */}
                              </React.Fragment>
                              }
                              onClick={() => {if(x.startDate) this.setState({ selectedDate: x.startDate})}}
                          />
                          <Link style={{position: 'absolute', left : '70%', top: '50%', '-ms-transform': 'translateY(-50%)', 'transform': 'translateY(-50%)'}}>&#43; Add to Google Calendar</Link>
                          {/* <button onClick={this.onOpenModal}>Open modal</button> */}
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
