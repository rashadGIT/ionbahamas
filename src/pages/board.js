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
import Maria from '../imgs/board/Maria.jpeg';
import Lestia from '../imgs/board/Lestia.jpeg';
import Renee from '../imgs/board/Renee.jpeg';
import Ancilleno from '../imgs/board/Ancilleno.jpeg';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
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
    const board = [
      {
        name : "Carlisle Mott", 
        bio : (
          <div>
            <p>Carlisle Mott is the principal Financial Advisor at Carlisle Mott Financial, LLC. They provide a range of professional services in financial planning and wealth management for individual investors. Born and raised in The Bahamas, he is a graduate of The College of The Bahamas. He obtained his Bachelor of Science degree in Electrical Engineering from the University of Texas at Dallas and worked at Texas Instruments for 13 years.</p>
            <p>Carlisle and his wife Maria have 3 children. They have a heart for serving and helping others. They have sponsored numerous give-back activities in The Bahamas.</p>
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
                  having worked in various capacities in the telecom, semiconductor, and energy sectors. 
                </p>
                <p>
                  A graduate of Missouri State University, Pargo holds a double major in Accounting and Management with a minor in Spanish.  
                  She earned her MBA in Technology from The University of Dallas, with additional coursework and certifications from both UD and 
                  The University of Texas at Dallas. She currently lives in Dallas with her daughter Payton. Renee has a passion for people and has spent many years 
                  advocating on behalf of children and the elderly.
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
                Italia received her Doctoral degree with a Bachelors in Medicine and a Bachelors in Surgery at The University of the West Indies (UWI),Trinidad and Tobago. 
              </p>
              <p>
                She is also an entrepreneurial visionary and a leadership coach for young adults at a summer program called Leap held yearly on the campus of UCLA. 
                Italia is a wife to a United States veteran, loving daughter and supportive sister. 
                She is passionate about making a positive difference in the lives of young women.
                As the current CEO and founder of a non-profit organization called SOT Sisterhood of Texas, 
                she continues to  prove that she was not only born to make a living but also to make a difference in the lives of others.
              </p>
            </div>), 
        img : Italia, 
        position : "Secretary",
        order : 3
      },
      {
        name: "Maria Mott", 
        bio : (<div>
          <p>Maria was born and raised in El Paso, Texas. She currently resides in the Dallas area with her husband Carlisle and 3 kids. 
            She's a graduate of UT Arlington with a Bachelors degree in Production Quality Management. 
            With over 15 years of experience as a procurement professional, Maria works at a fortune 500 semi-conductor company.</p> 
          <p>Both Maria and her husband are passionate about making a difference in the lives of those around them. 
            Among their favored activities is engaging youth through faith ministry and education.</p>
        </div>), 
        img : Maria, 
        position : "Treasurer",
        order : 4
      },
      {
        name: "Lestia Walker", 
        bio : (<div>
          <p>Dr. Lestia Walker welcomes her appointment to the role of Director of Community Services, 
            in line with her dedication and devotion to humanistic care and community empowerment.</p>
          <p>Born and raised in the Bahamas, she adopted and honed her skills at the Latin American School of Medicine, Havana, graduating with honors.</p>
          <p>She has proactively and repeatedly volunteered to serve various organizations since 2009. 
            Some of her most cherished contributions through volunteerism include organizing community projects and working with Imerman Angels in support of cancer fighters, survivors and caregivers.</p>
        </div>), 
        img : Lestia, 
        position : "Director of Community Services",
        order : 5
      },
      {
        name: "Chantell Jervis Walton", 
        bio : (<div>
            <p>
              Chantel Jervis Walton is a native of northern Illinois, born to Bahamian father Cyril Jervis and Iowa native Julie V. Jervis. 
              Loving mother of three, Chantel has a passion for serving and being a resource in her community and abroad.
            </p> 
            <p>
              She is a certified teacher in the state of Texas where she earned her Bachelor of Arts degree in Liberal Studies and has professionally taught the last 7 years. 
              In addition to teaching, Chantel is also a aspiring real estate agent. She is committed to providing resources and support for others, using her gifts, education, 
              and authentic personality to be an asset to this organization and to those that take part.
            </p></div>), 
        img : Chantell, 
        position : "Director of Education & Resources",
        order : 6
      },
      {
        name: "Sean Smith", 
        bio : (
          <div>
            <p>Sean Smith is a full time Manager at the firm Partners first for The Crowther Group. 
              He has the pleasure of developing, implementing and enforcing policies that impact people’s lives. 
              People are our most important asset, and he is charged with keeping them safe and free from harassment and discrimination.</p>
            <p>As co-owner Of Party DJ Dallas for more than twenty years Sean works hard to provide personalized service, making each event special. </p>
          </div>), 
        img : Sean, 
        position : "Director of Fundraising/Events",
        order : 7
      },
      {
        name: "Ancilleno Solomom", 
        bio : (
            <div>
              <p>
                Ancilleno Solomon is the Chef- Owner of Ice Chef Bahamas Catering and Events, based in Dallas Texas. 
                Born and raised in The Bahamas, he is a graduate of The College of The Bahamas (COB), 
                where he earned an Associate of Arts degree in Culinary Arts. After graduating COB Ancilleno went on to work for a 
                few years in the hospitality and tourism sector of the Bahamas.</p>
              <p>
                As a food and culture enthusiast for the Bahamas Ancilleno later moved to Texas where he is considered 'The Bahamian Food Whisperer'. 
                Ancilleno currently is employed by Hyatt Hotel as the Chef De Cuisine for banquets at the Hyatt Regency Dallas.
              </p>
            </div>), 
        img : Ancilleno, 
        position : "Director of Public Relations",
        order : 8
      },
      {
        name: "Rashad Barnett", 
        bio : (<div>
          <p>
            Rashad Barnett was born in Freeport, Grand Bahama, Bahamas. He graduated from Florida State University in Tallahssee, FL. 
            After receiving his education, Rashad moved to the Dallas/Fort Worth Metroplex to pursue his career. 
            Rashad currently works as a Software Developer at a fortune 500 company.
          </p>
          <p>Rashad is a loving son, supportive brother and lifelong friend to many. 
            He is passionate about making a positive difference in the lives of others through his talents and drive. 
            The only this he loves more than Bahamian culture is sharing that culture with those around him.
          </p>
          </div>), 
        img : Rashad, 
        position : "Director of Technology & Logistics",
        order : 9
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
                {board.map((x,i) => {
                  return(<tr key={i}>
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
