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
import { textBox } from '../module/textBox'
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import DonationPopUp from '../components/DonationPopUp';
import { number } from 'prop-types';
const delay = ms => new Promise(res => setTimeout(res, ms));

let paymentForm = {};

const bread = [
  {order : 2, title: "Donate", link : "/donate"},
  {order : 1, title: "Home", link : "/"}
].sort((a,b) => a.order - b.order);

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Options = (val) => {
  return (
  <Col key={val}>
    <FormGroup check>
      <Label check>
        <Input 
          type="radio" 
          name="radio1" 
          value={val}
          key={val}
          style={textBox.radioBtn}
          />{' '}
        <span style={textBox.radioBtnTitle}>${val}</span>
      </Label>
    </FormGroup>
  </Col>
  );
};

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
      amount : 0.00,
      fName : '',
      lName : '',
      email : '',
      donation : {},
      showPopup : false,
      isAnonymous : false,
      selectedOption: '',
      showOptionBox : false,
      message : "Processing ..."
    }
    this.setAmount = this.setAmount.bind(this)
    this.handleFName = this.handleFName.bind(this)
    this.handleLName = this.handleLName.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  handleLName = (evt) => {
    this.setState({lName : evt.target.value})
  }

  handleFName = (evt) => {
    this.setState({fName : evt.target.value})
  }

  handleEmail = (evt) => {
    this.setState({email : evt.target.value})
  }

  onChangeValue(evt) {
    let amount = evt.target.value
    let showOptionBox = isNaN(amount);
    this.setState({showOptionBox})
    if(!showOptionBox){
      this.setState({amount})
    }
    else{
      amount = 0;
      this.setState({amount})
    }
  }

  togglePopup = () =>{
    this.setState({showPopup : !this.state.showPopup})
  }

  setAmount = (evt) => {
    let amount = evt.target.value;
    this.setState({amount})
  }

  async cardNonceResponseReceived(errors, nonce, cardData){
    this.togglePopup();
    let data = await axios.post(`${env.proxy}/payment/donate`,
      {
        amount : this.state.amount,
        nonce : nonce,
        donation : this.state.donation,
        fName : this.state.fName,
        lName : this.state.lName,
        email : this.state.email,
        isAnonymous : this.state.isAnonymous
      },
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
    ).then(x => x.data)
    .catch(err => {
      return {
        'status' : err.response.status,
        'title': 'Payment Failure',
        'result': err.response.data.message
     };
    });
    if(data.status === 200){
        this.setState({message : "Success"})
        await delay(3000);
        window.location.href = "/donations";
    }
    this.togglePopup()
  }


  componentWillMount(){
    let tmp = window.location.href;
    const res = tmp.substring(tmp.lastIndexOf('/') + 1, tmp.length);
    let donation = causes.find(x => x.type === res)
    console.log(donation)
    this.setState({donation})

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
        let err = [];
        // const regex = RegExp('^(\\d*\\.)?\\d+$');
        const regex = RegExp('^(\\d+.\\d{0,2})$');
        if(this.state.fName.trim().length === 0) err.push("fName");
        if(this.state.lName.trim().length === 0) err.push("lName");
        if(this.state.email.trim().length === 0) err.push("email");
        if(this.state.amount === 0) err.push("amount");

        if(!regex.test(this.state.amount)){
          err.push("amount");
          alert(`${this.state.amount} is an  invalid amount.`);
        }

        if(err.length > 0){
          this.setState({err})
          return;
        }

        if (errors) {
          console.error('Encountered errors:');
          errors.forEach((error) => console.error('  ' + error.message));
          return;
        }

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
        <div style={{padding : '50px 25px 0px 25px'}}>
          <center>
            <img 
              style={{maxWidth : '400px', paddingBottom : '30px'}}
              alt={"https://i.ytimg.com/vi/5aJPNHnkwjw/maxresdefault.jpg"}
              src={this.state.donation.img} 
            />
            <h3>
              <b>
                <i>
                  {this.state.donation.description}
                </i>
              </b>
            </h3>
          </center>
          <Container fluid={true}>
            <Row>
              <Col>
                <Row>
                  <Col xs={12} md={12} lg={12}>
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" style={textBox.checkBox}  checked={this.state.isAnonymous} onChange={() => this.setState({isAnonymous : !this.state.isAnonymous})}/>{' '}
                          <span style={textBox.checkBoxLabel}>Make me anonymous</span>
                        </Label>
                      </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={12} lg={12}>
                    <FormGroup>
                      <Label for="exampleEmail" style={textBox.title}>First Name</Label>
                      <Input 
                        style={textBox.donate} 
                        required={true} 
                        type="text" 
                        name="fName" 
                        id="fName" 
                        onChange={this.handleFName} value={this.state.fName}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={12} lg={12}>
                    <FormGroup>
                      <Label for="exampleEmail" style={textBox.title}>Last Name</Label>
                      <Input 
                        style={textBox.donate} 
                        type="text" 
                        name="lName" 
                        id="lName" 
                        onChange={this.handleLName} value={this.state.lName} 
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="exampleEmail" style={textBox.title}>Email</Label>
                      <Input style={textBox.donate} type="email" name="email" id="exampleEmail" onChange={this.handleEmail} value={this.state.email} />
                    </FormGroup>
                  </Col>
                </Row>
                </Col>
                <Col style={{paddingTop : '47px'}}>
                  
                  <FormGroup tag="fieldset" onChange={this.onChangeValue}>
                    <Label for="exampleEmail" style={textBox.title}>Donation Amount ($)</Label>
                    <Row>
                      {this.state.donation.suggestedDonations.slice(0,3).map(Options)}
                      <Col>
                        <FormGroup check>
                          <Label check>
                            <Input 
                              type="radio" 
                              name="radio1"
                              key={"other"} 
                              value={"other"}
                              style={textBox.radioBtn}
                            />{' '}
                            <span style={textBox.radioBtnTitle}>Enter Amount</span>
                          </Label>
                        </FormGroup>
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                      {this.state.showOptionBox && <Input style={textBox.donate} type="text" name="donate" id="donateExample" onChange={this.setAmount} value={this.state.amount}/>}
                      <Donate
                        paymentForm = {paymentForm}
                        amount={this.state.amount}
                        />
                  </FormGroup>
                </Col>
            </Row>
          </Container>
          {this.state.showPopup &&
                    <DonationPopUp
                      text='Click "Close Button" to hide popup'
                      processor={this.state.processor}
                      message = {this.state.message}
                      recordInserted = {this.state.recordInserted}
                      welcomeEmailSent = {this.state.welcomeEmailSent}
                      closePopup={this.togglePopup}
                      startCountDown={this.state.startCountDown}
                      countDown={this.state.countDown}
                    />
                  }
        </div>
    );
  }
}

export default Layout(donations,bread);