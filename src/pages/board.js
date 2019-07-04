import React, { Component } from 'react';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Avatar from 'react-avatar';
import Rashad from '../imgs/board/Rashad.jpg';
import Carlisle from '../imgs/board/Carlisle.jpg';
import Sean from '../imgs/board/Sean.jpg';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import '../css/col.css';
import '../css/board.css';

const bread = [
  {order : 2, title: "Our Board", link : "/board"},
  {order : 1, title: "Home", link : "/"}
].sort((a,b) => a.order - b.order);

const carlisleBio = (
<div>
  <p>
    Carlisle Mott is the principal Financial Advisor at Carlisle Mott Financial, LLC. 
    Prior to forming his own firm, he was a Financial Advisor at Edward Jones, since January 2007.
    Born and raised in The Bahamas, he is a graduate of The College of The Bahamas (COB), where he earned an Associate of Arts degree in Electrical Power Technology.
  </p>
  <p>
    Carlisle and his wife Maria were married in December 1993, and have 3 children, - Carlisle, Anissa, and Belicia (Bella).
    They enjoy traveling, hunting, fishing, and the many Concerts and Band Activities the kids are involved in.
  </p>
</div>);
const seanBio = (
<div>
  <p>
    I grew up in a family of eight girls and worked my way through college as a busboy in restaurants. 
    I grew up in the Bahamas and understand the importance of diversity. 
    My family taught me to inspire people quietly and remember that listening is often more important than offering advice.
  </p>
  <p>
    I have had the opportunity to impress that philosophy upon members of my Crowther Group family, especially as I meet with on-site crew members to make sure all construction workers are following established safety regulations. 
    The other key thing I learned growing up was, the worst thing that happen is you can fail, but you can’t fail or succeed if you don’t try.
  </p>
</div>);

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
        bio : carlisleBio, 
        img : Carlisle, 
        position : "Chairman of the Board/President",
        order : 1
      },
      {
        name: "Renee Pargo", 
        bio : hi, 
        img : "https://ih0.redbubble.net/image.425076440.0717/flat,550x550,075,f.u1.jpg", 
        position : "Assistant Chairman of the Board",
        order : 2
      },
      {
        name: "Italia Wakefield", 
        bio : hi, 
        img : "https://ih0.redbubble.net/image.425076440.0717/flat,550x550,075,f.u1.jpg", 
        position : "Secretary",
        order : 3
      },
      {
        name: "Maria Mott", 
        bio : hi, 
        img : "https://ih0.redbubble.net/image.425076440.0717/flat,550x550,075,f.u1.jpg", 
        position : "Treasurer",
        order : 4
      },
      {
        name: "Lestia Walker", 
        bio : hi, 
        img : "https://ih0.redbubble.net/image.425076440.0717/flat,550x550,075,f.u1.jpg", 
        position : "Director of Community Services",
        order : 5
      },
      {
        name: "Chantell", 
        bio : hi, 
        img : "https://ih0.redbubble.net/image.425076440.0717/flat,550x550,075,f.u1.jpg", 
        position : "Director of Education & Resources",
        order : 6
      },
      {
        name: "Sean Smith", 
        bio : seanBio, 
        img : Sean, 
        position : "Director of Fundraising/Events",
        order : 7
      },
      {
        name: "Ancilleno Solomom", 
        bio : hi, 
        img : "https://ih0.redbubble.net/image.425076440.0717/flat,550x550,075,f.u1.jpg", 
        position : "Director of Public Relations",
        order : 8
      },
      {
        name: "Rashad Barnett", 
        bio : "Rashad is a Software Developer. He has over 10 years of technology experience with small and large businesses in a variety of industries. He held a variety of leadership positions throughout his career.", 
        img : Rashad, 
        position : "Director of Technology & Logistics",
        order : 9
      },
      {
        name: "Donald Glass", 
        bio : hi, 
        img : "https://ih0.redbubble.net/image.425076440.0717/flat,550x550,075,f.u1.jpg", 
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
