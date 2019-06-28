import React, {Component} from 'react';
import family from '../imgs/family.jpg';
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
        img : 'https://hbculifestyle.com/wp-content/uploads/2015/02/5-startegies-for-finding-a-dream-job.jpg',
        description : "This membership type is available to any individual who does not qualify for student membership."
      },
      {
        type : "Student",
        img : 'https://uael.edu.ht/wp-content/uploads/2013/10/Black-College-Student-2.jpg',
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
                  <br />
                  <a href="/">Download MEMBERSHIP form!</a>
                </div>
              </div>
            </div>)}
    </div>
    )
  }
}