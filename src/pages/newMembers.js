// import React, { Component } from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { Button } from 'reactstrap';
// import { Link as RRNavLink } from "react-router-dom";
// import pleaseRead from '../imgs/pleaseRead.gif'
// import axios from 'axios';
// import { environment as env } from '../env/env.js';
// import Calendar from 'react-calendar';
// import { format } from "date-fns";

// class member extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       date: new Date(),
//       range : null,
//       start : "",
//       end : "",
//       members : [],
//       loading : true,
//       err : false
//     }
//   }

//   componentWillMount(){

//   }

//   componentDidMount (){

//   }
//   componentDidCatch(error, errorInfo){
//     this.setState({err : true})
//   }

//   onChange = date => this.setState({ date })

//   dateFormat = (date) => format(date, "yyyy-MM-dd");
  
//   getRange = async range => {
//     let start = this.dateFormat(range[0]);
//     let end = this.dateFormat(range[range.length - 1]);
//     let data = await axios.post(`${env.proxy}/members/getMemberSignUpBetween`,{
//       start : start,
//       end : end
//     })
//     console.log(data.data)
//     this.setState({ range, start, end, members : data.data})
//   }

  

//   render() {
//     return (
//       <div>
//         <Container fluid={false} style={{padding : '100px 25px 0px 25px'}}>
//           <Row>
//             <Col>
//               <Calendar
//                 onChange={this.getRange}
//                 returnValue={"range"}
//                 selectRange={true}
//                 calendarType={"US"}
//               />
//               {this.state.members.map(x => <h1>{`${x.Fname} - ${x.record_created}`}</h1>)}
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     );
//   }
// }

// export default member;