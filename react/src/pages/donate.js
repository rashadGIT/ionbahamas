import React, { Component } from 'react';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, FormGroup, Label, Input,} from 'reactstrap';
import { Link as RRNavLink } from "react-router-dom";
import pleaseRead from '../imgs/pleaseRead.gif'
import axios from 'axios';
import { environment as env } from '../env/env.js';
import Calendar from 'react-calendar';
import {causes} from '../module/causes'
import Card from '../components/card'
import { format } from "date-fns";
import Donate from '../components/Donate';
import { square } from '../env/square'
let paymentForm = {};

const bread = [
  {order : 2, title: "Donate", link : "/donate"},
  {order : 1, title: "Home", link : "/"}
].sort((a,b) => a.order - b.order);

class donations extends Component {
  constructor(props){
    super(props);
    this.state={
      date: new Date(),
      range : null,
      start : "",
      end : "",
      members : [],
      loading : true,
      err : false,
      amount : 0
    }
    this.setAmount = this.setAmount.bind(this)
  }

  setAmount = (evt) => {
    let text = evt.target.value
    if(text.length === 0) text = 0;
    this.setState({amount : text})
  }

  async cardNonceResponseReceived(errors, nonce, cardData){
    this.togglePopup();
    var bodyFormData = new FormData();
    bodyFormData.set('amount' , this.state.amount);
    bodyFormData.set('nonce' , nonce);
  }


  componentWillMount(){
    // eslint-disable-next-line no-undef
    paymentForm = new SqPaymentForm({
      applicationId: square.applicationId,
      inputClass: square.inputClass,
      autoBuild: square.autoBuild,
      inputStyles: square.inputStyles,
      cardNumber: square.cardNumber,
      cvv: square.cvv,
      expirationDate: square.expirationDate,
      postalCode: square.postalCode,
      callbacks: { cardNonceResponseReceived: async (errors, nonce, cardData) => {
        this.cardNonceResponseReceived(errors, nonce, cardData)
      }}
    });
  }

  componentDidMount (){

  }
  componentDidCatch(error, errorInfo){
    this.setState({err : true})
  }

  onChange = date => this.setState({ date })

  dateFormat = (date) => format(date, "yyyy-MM-dd");
  
  getRange = async range => {
    let start = this.dateFormat(range[0]);
    let end = this.dateFormat(range[range.length - 1]);
    let data = await axios.post(`${env.proxy}/members/getMemberSignUpBetween`,{
      start : start,
      end : end
    })
    console.log(data.data)
    this.setState({ range, start, end, members : data.data})
  }

  

  render() {
    return (
        <Container fluid={true} style={{padding : '50px 25px 0px 25px'}}>
          <Row>
            <Col>
              <Row>
                <Col xs={12} md={12} lg={12}>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" />{' '}
                        Make me anonymous
                      </Label>
                    </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6} lg={6}>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                  </FormGroup>
                </Col>
                <Col xs={12} md={6} lg={6}>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                  </FormGroup>
                </Col>
              </Row>
              </Col>
              <Col>
                <FormGroup>
                    <Label for="exampleEmail">Donation</Label>
                    <Input type="text" name="email" id="exampleEmail" placeholder="with a placeholder" onChange={this.setAmount}/>
                    <Donate
                      paymentForm = {paymentForm}
                      amount={this.state.amount}
                      />
                </FormGroup>
              </Col>
          </Row>
        </Container>
    );
  }
}

export default Layout(donations,bread);