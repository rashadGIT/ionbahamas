import React, { Component } from 'react';
import Layout from '../components/Layout';
import Membership from '../components/MembershipBoxes'

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
    return (
      <div>
        <h1>Member</h1>
        <Membership />
      </div>
    );
  }
}

export default Layout(member);
