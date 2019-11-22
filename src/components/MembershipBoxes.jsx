import React, {Component} from 'react';
import family from '../imgs/family.jpg';
import individual from '../imgs/individual.jpg';
import student from '../imgs/student.jpg';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from "react-router-dom";
import formPDF from '../docs/membershipForm.pdf';
import formDOC from '../docs/membershipForm.docx';
import '../css/membership.css';



export default class extends Component{
  render(){
    const membershipTypes = [
      {
        type : "Family",
        img : family,
        description : "This membership type is available to families consisting of husband/ wife and their children.",
        pdf : formPDF,
        doc : formDOC,
        amount : 70

      },
      {
        type : "Individual",
        img : individual,
        description : "This membership type is available to any individual who does not qualify for student membership.",
        pdf : formPDF,
        doc : formDOC,
        amount : 50
      },
      {
        type : "Student",
        img : student,
        description : "This membership type is available to any student enrolled in college or university.",
        pdf : formPDF,
        doc : formDOC,
        amount : 20
      }
    ]
    return(
      <div className="membership">
        <div className="membershipTitle">
          <h5>Membership Categories</h5>
        </div>
          {membershipTypes.map((membership,i) =>
            <div key={i} style={{display: 'inline-block', padding: '5px'}}>
              <div className="card">
                <img 
                  className="imgBox"
                  src={membership.img} 
                  alt="Avatar" />
                <div className="TextContainer">
                  <label>{membership.type} Membership</label> 
                </div>
                <div className="txtDescription" >
                  <div style={{textAlign: 'left'}}>
                    {membership.description}
                  </div><br />
                  <div>
                    {/* <Link to={`/member/${membership.type}`}>  */}
                       ${membership.amount} annual dues
                    {/* </Link> */}
                  </div>
                </div>
              </div>
            </div>)}
            <br />
            <b>Email completed membership forms to <a href="mailto:info@ionbahamas.org?subject=Membership Form">info@ionbahamas.org</a></b>
    </div>
    )
  }
}