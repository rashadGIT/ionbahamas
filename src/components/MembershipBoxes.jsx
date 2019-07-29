import React, {Component} from 'react';
import family from '../imgs/family.jpg';
import individual from '../imgs/individual.jpg';
import student from '../imgs/student.jpg';
import form from '../docs/membershipForm.pdf';
import '../css/membership.css';



export default class extends Component{
  render(){
    const membershipTypes = [
      {
        type : "Family",
        img : family,
        description : "This membership type is available to families consisting of husband/ wife and their children.",
        form : form
      },
      {
        type : "Individual",
        img : individual,
        description : "This membership type is available to any individual who does not qualify for student membership.",
        form : form
      },
      {
        type : "Student",
        img : student,
        description : "This membership type is available to any student enrolled in college or university.",
        form : form
      }
    ]
    return(
      <div className="membership">
        <div className="membershipTitle">
          <h5>Membership Catagories</h5>
        </div>
          {membershipTypes.map(membership =>
            <div style={{display: 'inline-block', padding: '5px'}}>
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
                  </div>
                  <a href={membership.form} download>Download MEMBERSHIP form!</a>
                </div>
              </div>
            </div>)}
            <br />
            <b>Email completed membership forms to <a href="mailto:info@ionbahamas.org">info@ionbahamas.org</a></b>
    </div>
    )
  }
}