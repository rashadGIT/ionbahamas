import React, { Component } from 'react';
import Layout from '../components/Layout';

class index extends Component {
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
      <h1>mission</h1>
    );
  }
}
export default index;
// export default Layout(index);
