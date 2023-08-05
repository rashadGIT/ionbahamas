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
    return (
      <Layout style={{width : '90%', margin: 'auto'}}>
        <Container fluid={true} style={{paddingTop: '100px'}}>
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
        </Container>
      </Layout>
    );
}
