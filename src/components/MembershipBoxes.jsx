import React, {Component} from 'react';
import family from '../imgs/family.jpg';
import individual from '../imgs/individual.jpg';
import student from '../imgs/student.jpg';
import '../css/membership.css';



export default class extends Component{
  render(){
    const membershipTypes = [
      {
        type : "Family",
        img : family,
        description : "This membership type is available to families consisting of husband/ wife and their children."
      },
      {
        type : "Individual",
        img : individual,
        description : "This membership type is available to any individual who does not qualify for student membership."
      },
      {
        type : "Student",
        img : student,
        description : "This membership type is available to any student enrolled in college or university."
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
                <div className="txtDescription">
                  {membership.description}
                  {/* <br />
                  <a href="/">Download MEMBERSHIP form!</a> */}
                </div>
              </div>
            </div>)}
    </div>
    )
  }
}