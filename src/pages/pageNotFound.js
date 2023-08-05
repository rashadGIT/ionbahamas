import React, { Component } from 'react';
import Layout from '../components/Layout';
// import pageNotFound from '../imgs/PageNotFound.gif';

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
        <center>
          <h1>404 <br />Page Not Found</h1>
          {/* <img src={pageNotFound} alt="" /> */}
        </center>
      </div>
    );
  }
}
export default member;
// export default Layout(member);
