import React, { Component } from 'react';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Avatar from 'react-avatar';
import Rashad from '../imgs/board/Rashad.jpg';
import Carlisle from '../imgs/board/Carlisle.jpg';
import Italia from '../imgs/board/Italia.jpeg'
import Sean from '../imgs/board/Sean.jpg';
import Chantell from '../imgs/board/Chantell.jpeg';
import Renee from '../imgs/board/Renee.jpeg';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import '../css/col.css';
import '../css/board.css';

const bread = [
  {order : 2, title: "Our Board", link : "/board"},
  {order : 1, title: "Home", link : "/"}
].sort((a,b) => a.order - b.order);

class member extends Component {
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
    const board = [
      {
        name: "Carlisle Mott", 
        bio : (
          <div>
            <p>Carlisle Mott is the principal Financial Advisor at Carlisle Mott Financial, LLC. They provide a range of professional services in financial planning and wealth management for individual investors. Born and raised in The Bahamas, he is a graduate of The College of The Bahamas. He obtained his Bachelor of Science in Electrical Engineering from the University of Texas at Dallas and worked at Texas Instruments for 13 years.</p>
            <p>Carlisle and his wife Maria have 3 children. They have a heart for serving and helping others. They have sponsored numerous "Give Back" activities in The Bahamas.</p>
          </div>), 
        img : Carlisle, 
        position : "Chairman of the Board/President",
        order : 1
      },
      {
        name: "Renee Pargo", 
        bio : (<div>
                <p>
                  Renee Pargo, a native of Nassau, Bahamas, is a financial professional with more than twenty years of experience in the technology space, 
                  having worked in various capacities in the telecom, semiconductor, and energy sectors. Renee has a passion for people and has spent many years 
                  advocating on behalf of children and the elderly. 
                  A graduate of Missouri State University, Pargo holds a double major in Accounting and Management with a minor in Spanish.  
                  She earned her MBA in Technology from The University of Dallas, with additional coursework and certifications from both UD and 
                  The University of Texas at Dallas. She currently lives in Dallas with her daughter Payton.
                </p>
            </div>), 
        img : Renee, 
        position : "Assistant Chairman of the Board",
        order : 2
      },
      {
        name: "Italia Wakefield", 
        bio : (<div>
              <p>
                Dr. Italia Hutchinson-Wakefield is a confident, passionate Bahamian medical doctor, currently employed at a medical facility in Dallas, Texas. 
                Italia received her Doctoral degree with a Bachelor in Medicine and a Bachelor in Surgery at UWI,Trinidad and Tobago. 
                She is also an entrepreneurial visionary and a leadership coach for young adults at a summer program called Leap held yearly on the campus of UCLA, Los Angeles, California. 
                Italia is a wife to a United State veteran, loving daughter, supportive sister. 
                She is passionate about making a positive difference in the lives of young women. 
                As the current CEO and founder of a non-profit organization called SOT Sisterhood of Texas, she continue to  prove that she was not only born to make a living but also to make a difference in the life's of others.
              </p>
            </div>), 
        img : Italia, 
        position : "Secretary",
        order : 3
      },
      {
        name: "Maria Mott", 
        bio : null, 
        img : null, 
        position : "Treasurer",
        order : 4
      },
      {
        name: "Lestia Walker", 
        bio : null, 
        img : null, 
        position : "Director of Community Services",
        order : 5
      },
      {
        name: "Chantell", 
        bio : null, 
        img : Chantell, 
        position : "Director of Education & Resources",
        order : 6
      },
      {
        name: "Sean Smith", 
        bio : (
          <div>
            <p>I have been a DJ for over 20 years in the Dallas Fort Worth area and counting. Being raised in the Bahamas where music is the life blood of the country; gives me my LOVE of music. I’ve collected tens of thousands of songs over the years. Every event to me is once-in-a-lifetime and I love making people happy.  I want to bring personalized service to make each event special.</p>
            <p>As the Partners First Program Manager for The Crowther Group. The most exciting part of my job is coordinating our safety and affirmative action programs. I have had the pleasure of developing, implementing and enforcing policies that impact people’s lives. </p>
              {/* <p>I work directly with the jobsite personnel to ensure they have proper training and follow accident prevention policies. People are our most important asset, and I am charged to keep them safe and free from harassment and discrimination.  </p> */}
          </div>), 
        img : Sean, 
        position : "Director of Fundraising/Events",
        order : 7
      },
      {
        name: "Ancilleno Solomom", 
        bio : null, 
        img : null, 
        position : "Director of Public Relations",
        order : 8
      },
      {
        name: "Rashad Barnett", 
        bio : (<div>
          <p>Rashad Barnett was born in Freeport, Ganad Bahama, Bahamas.  He graduated from Florida State University in Tallahssee, FL. After receiving his education, Rashad moved to to Dallas/Fort Worth Metroplex to pursue his career.  Rashad currently works as a Software Developer at Texas Instruments Incorporated.</p>
          <p>Rashad is a loving son, supportive brother and lifelong friend to many people. He is passionate about making a positive difference in the lives of other through his talents and drive. The only this he love more than is Bahamian culture is sharing that culture with those around him.</p>
          </div>), 
        img : Rashad, 
        position : "Director of Technology & Logistics",
        order : 9
      },
      {
        name: "Donald Glass", 
        bio : null, 
        img : null, 
        position : "Director of Membership",
        order : 10
      }
    ].sort((a, b) => a.order - b.order);
    return (
      <div style={{width : '90%', margin: 'auto'}}>
        <Container fluid={true}>
          <Row>
            <Table 
              // striped 
              // bordered 
              size="sm" 
              responsive>
              <tbody>
                {board.map(x => {
                  return(<tr>
                    <td>
                      <Container fluid={true}>
                        <Row noGutters={false}>
                          <Col xs={12} md={3}>
                            <div className="board">
                              <Avatar 
                                name={x.name} 
                                size={200} 
                                maxInitials={2}
                                round={true}
                                color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} 
                                src={x.img}
                                />
                              </div>
                          </Col>
                          <Col xs={12} md={9} style={{}}>
                            <h5 className="bioTitle"><b>{x.name}</b></h5>
                            <div className="bioTitle"><font size="3" color="black">{x.position}</font></div>
                            <div className="bio">{x.bio}</div>
                            </Col>
                        </Row>
                      </Container>
                    </td>
                  </tr>
                  )
                })}
              </tbody>
            </Table>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Layout(member, bread);
