import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Layout from '../components/Layout';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import { Button } from 'reactstrap';
import {Link } from "react-router-dom";
import '../css/calendar.css'
import {events, upComingEvents } from '../module/events'
import { format } from "date-fns";

// const localizer = momentLocalizer(moment)
const dateFormat = (date) => format(date, "EEE LLL do, yyyy");
const color = (num) => (num & 1) ? '#e6e6e6' : 'white'
const getEventDate = (event) => {
  if( !event.endDate || (event.startDate && event.endDate && event.startDate.getTime() === event.endDate.getTime())){ 
    return `${dateFormat(event.startDate)}`
  } else{
    return `${dateFormat(event.startDate)} - ${dateFormat(event.endDate - 1)}`
  }
}
const donate = (props) => {

  const [open,setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [event, setEvent] = useState(events[0]);
  
  useEffect(() => {
  },[]);

  return (<div>Hello World</div>)

  // return (
  //   <Layout>
  //     {event && <Modal open={open} onClose={() => setOpen(!open)} center>
  //       <h5 style={{paddingRight : 60}}>{event.title}</h5>
  //       <div>When : {getEventDate(event)}</div>
  //       <div>Time : {`${event.startTime} - ${event.endTime}`}</div>
  //       <div>Location : {event.location}</div>
  //       <div>{event.description}</div>
  //       <center>
  //         <Button color="link" onClick={() => window.open(event.calendarLink)} >&#43; Add event to Google Calendar</Button>
  //       </center>
  //     </Modal>
  //     }
  //     <Container fluid={true}>
  //       <Row>
  //         <Col 
  //           xs={{size :6, order : 2 }} 
  //           md={{size :6 , order : 1}} 
  //           className="bigCalendar"
  //         >
  //           <div style={{padding : '20px 0px 0px 20px'}}>
  //             <Calendar
  //               style={{height : 600}}
  //               localizer={localizer}
  //               events={events}
  //               culture='en-GB'
  //               views={['month']}
  //               startAccessor="startDate"
  //               endAccessor="endDate"
  //               onSelectEvent={event => {
  //                   setEvent(event)
  //                   setOpen(!open);
  //               }}
  //               onNavigate={(date) => setSelectedDate(date)}
  //               toolbar={true}
  //               // step={60}
  //               // onView={() => {}}
  //               date={selectedDate}
  //               // onNavigate={date => this.setState({ date })}
  //             />
  //           </div>
  //         </Col>
  //         <Col xs={{size :6 , order: 1 }} md={{size: 6 , order : 2}}>
  //           <div style={{padding : '15px 0px 0px 0px'}}>
  //             <center>
  //             <h2 style={{paddingBottom : '5px'}}>Upcoming Events</h2>
  //             </center>
  //             <List style={{
  //               paddingBottom: '0px',
  //               paddingTop: '0px',
  //               borderStyle: 'solid', 
  //               borderColor :color(1)}}>
  //               {events
  //               .filter(x => x.endDate >= new Date().setHours(0,0,0,0))
  //               .sort((a,b) => a.startDate - b.startDate)
  //               .map((x,i) => {
  //                 return <div key={i}>
  //                   <ListItem 
  //                     alignItems="flex-start" 
  //                     style={{
  //                       backgroundColor : color(i), 
  //                       cursor: 'pointer'
  //                     }} >
  //                     {(x.startDate) && <div>
  //                       <IosAddCircleOutline  
  //                       onClick={() => {
  //                         setOpen(!open);
  //                         setEvent(x);
  //                       }} 
  //                       fontSize="40px" 
  //                       color="#000000" 
  //                       className="eventPlus" 
  //                       style={{
  //                         color : 'balck', 
  //                         position: 'absolute', 
  //                         left : 20, 
  //                         top: '50%', 
  //                         msTransform: 'translateY(-50%)', 
  //                         'transform': 'translateY(-50%)'
  //                       }}
  //                       />
  //                     </div>}
  //                     <ListItemText
  //                       className="listItemText"
  //                       primary={`${x.title} ${x.cancelled ? "(Cancelled)" : ""}`}
  //                       secondary={
  //                         <React.Fragment>
  //                           <Typography
  //                             component="span"
  //                             variant="body2"
  //                             color="textPrimary"
  //                           >
  //                             <div>Date : {getEventDate(x)}</div>
  //                             <div>Time : {x.startTime} - {x.endTime}</div>
  //                           </Typography>
  //                           {(x.mapURL !== null && x.location !== null) && 
  //                             <Link style={{paddingBottom : '10px'}} onClick={() => window.open(x.mapURL)}>{x.location}</Link>
                            
  //                           }
  //                           <div>{x.description}</div>
  //                           {x.virtualEventLink && 
  //                             <Link style={{paddingBottom : '10px'}} onClick={() => window.open(x.virtualEventLink)}>ZOOM LINK</Link>
                            
  //                           }
  //                           {x.calendarLink &&
  //                           <center>
  //                             <Button color="link" onClick={(event) => {window.open(x.calendarLink);}} >&#43; Add event to Google Calendar</Button>
  //                           </center>}
  //                         </React.Fragment>
  //                         }
  //                         onClick={() => setSelectedDate(x.startDate)}
  //                     />
  //                   </ListItem>
  //                   </div>
  //                 })}
  //             </List>
  //           </div>
  //         </Col>
  //       </Row>
  //       </Container> 
  //     </Layout>
  //     );
}
export default donate;
// export default Layout(donate);
