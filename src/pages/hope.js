import React, { Component } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';

class member extends Component {
  constructor(props){
    super(props);
    this.state={
      loading : true,
      err : false,
      value: '',
      anonymous : true,
      name : '',
      email : ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }

  componentWillMount(){

  }

  componentDidMount(){

  }
  componentDidCatch(error, errorInfo){
    this.setState({err : true})
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleCheck(event) {
    this.setState({anonymous: !this.state.anonymous});
    this.setState({
      name: "Anonymous",
      email : ''
    })
  }

  handleName(event) {
    this.setState({name: event.target.value});
  }

  handleEmail(event) {
    this.setState({email: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
    axios.post("http://localhost:3001/account/hope/", { note : this.state.value , email : this.state.email, name : this.state.name})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  
  render() {
    return (
      <div style={{marginTop : '50px'}}>
        <h2>Messages of Hope</h2>
        <form onSubmit={this.handleSubmit}>
          <center>
            <div>
              <input style={{margin : '10px'}} value={this.state.name} placeholder="Name" disabled={!this.state.anonymous} type="text" id="name" name="name" onChange={this.handleName}/>
              <input style={{margin : '10px'}} value={this.state.email} placeholder="Email" disabled={!this.state.anonymous} type="email" id="email" name="email" onChange={this.handleEmail}/>
              <input type="checkbox" id="scales" name="scales" onClick={this.handleCheck}/>
              <label htmlFor="scales">Keep Me Anonymous</label>
            </div>
            <textarea 
              placeholder="Type your message here..." 
              style={{width: '95%', minHeight: '500px', marginBottom : '10px'}} 
              value={this.state.value} 
              onChange={this.handleChange} 
            />
            <br />
            <input style={{width : '95%'}} disabled={this.state.value.length === 0} type="submit" value="Submit" />
          </center>
      </form>
      </div>
    );
  }
}

export default Layout(member);
