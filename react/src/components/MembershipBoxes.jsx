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
import axios from 'axios';
import { environment as env } from '../env/env.js';
import {StyleRoot} from 'radium';
import {styles} from '../module/styles'

let membershipTypes = [{
  type : "Family",
  img : family,
  description : "This membership type is available to families consisting of husband/ wife and their children.",
  pdf : formPDF,
  doc : formDOC,
  amount : 0
},
{
  type : "Individual",
  img : individual,
  description : "This membership type is available to any individual who does not qualify for student membership.",
  pdf : formPDF,
  doc : formDOC,
  amount : 0
},
{
  type : "Student",
  img : student,
  description : "This membership type is available to any student enrolled in college or university.",
  pdf : formPDF,
  doc : formDOC,
  amount : 0
}]

export default class extends Component{
  constructor(props) {
    super(props);
    this.state = {
      info : [],
      membershipTypes : []
    };
    this.getInfo = this.getInfo.bind(this);
  }
  async componentWillMount(){
    let info = await axios.get(`${env.proxy}/members/getMembershipData`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error)
      return [];
    });
    this.setState({info})

    // console.log(this.state.membershipTypes.map(x => {
    //     let value = x;
    //     let data = this.getInfo(value.Type);
    //     console.log(data)
    //     if(data === undefined) return "fe"
    //
    //     console.log(value)
    //     return x;
    //   }
    // ))

  }

  getInfo(type) {
    return this.state.info.find(x => {
      //console.log(x.Type === type)
      return (x.Type === type)
    });
  }

  render(){
    //let val = this.getInfo("Family")
    // console.log(val)
    return(
      <StyleRoot className="membership">
        <div className="membershipTitle">
          <h5>Membership Categories</h5>
        </div>
        <div style={styles.slideInLeft}>
          {membershipTypes.map((membership,i) =>{
            let val = this.getInfo(membership.type)
            if(val !== undefined) {
              membership.amount = val.Price
              }
             return <div key={i} style={{display: 'inline-block', padding: '5px'}}>
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
                    <Link to={`/member/${membership.type}`}>
                       ${membership.amount} annual dues
                    </Link>
                  </div>
                </div>
              </div>
            </div>})}
            </div>
            <br />
            <b>Email completed membership forms to <a href="mailto:info@ionbahamas.org?subject=Membership Form">info@ionbahamas.org</a></b>
    </StyleRoot>
    )
  }
}
