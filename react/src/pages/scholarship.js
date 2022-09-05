import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Button } from 'reactstrap';
import axios from 'axios';
import { environment as env } from '../env/env.js';
import '../css/scholarship.css';

class index extends Component {
  constructor(props){
    super(props);
    this.state={
      name : "",
      email : "",
      vidLink : ""
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleLinkChange = this.handleLinkChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }
  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }
  handleLinkChange(event) {
    this.setState({vidLink: event.target.value});
  }

  async handleSubmit(event) {
    let data = await axios.post(`${env.proxy}/scholarship/submit`,{
      email : this.state.email,
      name : this.state.name,
      vidLink : this.state.vidLink
    }).then(x => x.data)
    if(data.accepted.includes(this.state.email)){
      alert(`Your application has been submitted.`);
      window.location.href = "/";
    }
    event.preventDefault();
  }

  componentWillMount(){

  }

  componentDidMount(){

  }
  componentDidCatch(error, errorInfo){
    this.setState({err : true})
  }


  render() {
    return (
      <div className="content">
        <center>
          <h3 className="title">Scholarship <br />Details</h3>
          <p>
            <span className="value">$1,000 college scholarship (6 available)</span><br />
            <span className="upperCase">Drop A link to your Video (2 - 3 mins)</span>
          </p>
          <p className="upperCase">
            Video Should Include:<br />
            &bull;Name 
            &bull;High School graduated from<br />
            &bull;GPA &bull;Extra curricular Activity 
            &bull;College Attending
            &bull;Major<br />
            &bull;Plans After College
            &bull;Community involvement
          </p>
          <p className="upperCase">
            If you could change the world with your degree:<br />
            1. What would you do?<br />
            2. How would you do it?
          </p>
          <p className="upperCase">
            Deadline July 31, 2020
          </p>
          {/* <form onSubmit={this.handleSubmit}>
            <label>
              Name<br />
              <input className="textBox" type="text" value={this.state.name} onChange={this.handleNameChange} />
            </label>
            <br />
            <label>
              Email<br />
              <input className="textBox" type="text" value={this.state.email} onChange={this.handleEmailChange} />
            </label>
            <br />
            <label>
              Submitted Link<br />
              <textarea className="textBox" cols="40" rows="5" value={this.state.vidLink} onChange={this.handleLinkChange}>
                Hello there, this is some text in a text area
              </textarea>
            </label>
            <br />
            <Button color="primary" onClick={this.handleSubmit} >Submit Application</Button>
          </form> */}
          <Button color="primary" mailto="mailto:no-reply@example.com" >Submit Application</Button>
        </center>
      </div>
    );
  }
}
export default index;
// export default Layout(index);
