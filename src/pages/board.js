import React, { Component } from 'react';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Avatar from 'react-avatar';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import '../css/col.css';

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
        name: "Rashad Barnett", 
        bio : hi, 
        img : "https://ih0.redbubble.net/image.425076440.0717/flat,550x550,075,f.u1.jpg", 
        position : "Director of Technology"
      },
      {
        name: "Rashad Barnett", 
        bio : hi, 
        img : "https://ih0.redbubble.net/image.425076440.0717/flat,550x550,075,f.u1.jpg", 
        position : "Director of Technology"
      },
      {
        name: "Rashad Barnett", 
        bio : hi, 
        img : "https://ih0.redbubble.net/image.425076440.0717/flat,550x550,075,f.u1.jpg", 
        position : "Director of Technology"
      },
      {
        name: "Rashad Barnett", 
        bio : hi, 
        img : "https://ih0.redbubble.net/image.425076440.0717/flat,550x550,075,f.u1.jpg", 
        position : "Director of Technology"
      },
      {
        name: "Rashad Barnett", 
        bio : hi, 
        img : "https://ih0.redbubble.net/image.425076440.0717/flat,550x550,075,f.u1.jpg", 
        position : "Director of Technology"
      }
    ];
    return (
      <Container fluid={true}>
        <Row>
        <h3>Our Board</h3>
          <Table striped bordered size="sm" responsive>
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
                              round="0px"
                              color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} 
                              src={x.img}/>
                            </div>
                        </Col>
                        <Col xs={12} md={9}>
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
    );
  }
}

export default Layout(member);
