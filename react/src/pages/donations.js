import React, { Component } from 'react';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {causes} from '../module/causes'
import Card from '../components/card'
import '../css/donate.css';
import {StyleRoot} from 'radium';
import {styles} from '../module/styles'

const bread = [
  {order : 2, title: "Donate", link : "/donate"},
  {order : 1, title: "Home", link : "/"}
].sort((a,b) => a.order - b.order);

class donations extends Component {
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
      <StyleRoot>
        <div className="container-flex-card" style={styles.slideInLeft}>
          {causes.map(Card)}
        </div>
      </StyleRoot>
    );
  }
}

export default Layout(donations,bread);
