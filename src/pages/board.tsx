import React, { Component } from 'react';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import board from '../module/boardData'
// import Avatar from 'react-avatar';
// import Rashad from '../imgs/board/Rashad.jpg';
// import Cardell from '../imgs/board/Cardell.jpg';
// import Carlisle from '../images/board/Carlisle.jpeg';
// import Italia from '../imgs/board/Italia.jpeg'
// import Sean from '../imgs/board/Sean.jpg';
// import Chantel from '../imgs/board/Chantel.jpeg';
// import Maria from '../imgs/board/Maria.jpeg';
// import Lestia from '../imgs/board/Lestia.jpeg';
// import Renee from '../imgs/board/Renee.jpeg';
// import Ancilleno from '../imgs/board/Ancilleno.jpeg';
import '../css/col.css';
import '../css/board.css';



export default function Board(props: any){
    const boardMembers = [
    {
      name: 'John Doe',
      position: 'Chairperson',
      summary: 'Experienced leader with a passion for community development.',
      photo: '/john-doe-photo.jpg', // Replace with photo path
    },
    {
      name: 'Jane Smith',
      position: 'Vice Chair',
      summary: 'Advocate for education and empowering the next generation.',
      photo: '/jane-smith-photo.jpg', // Replace with photo path
    },
    // Add more board members
  ];
  
  return (
      <Layout style={{width : '90%', margin: 'auto'}}>
    <div className="board-members-page">
      <header className="header">
        <h1 className="title">Board Members</h1>
        <p className="slogan">Guiding Our Vision</p>
      </header>
      <section className="board-members-section">
        <div className="board-members-list">
          {board.map((member, index) => (
            <div className="board-member" key={index}>
              <img src={member.img} alt={member.name} className="board-member-photo" />
              <h2 className="board-member-name">{member.name}</h2>
              <p className="board-member-position">{member.position}</p>
              {/* <p className="board-member-summary">gfingoir</p> */}
            </div>
          ))}
        </div>
      </section>
    </div>


        {/* <Container fluid={true} style={{paddingTop: '100px'}}>
          <Row>
            <Table
              borderless
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
                              <img  className="roundImg" src={x.img} alt="Avatar" width="250" height="250"/>
                            </div>
                          </Col>
                          <Col xs={12} md={9} style={{}}>
                            <h5 className="bioTitle"><b>{x.name}</b></h5>
                            <div className="bioTitle">{x.position}</div>
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
        </Container> */}
      </Layout>
    );
}
