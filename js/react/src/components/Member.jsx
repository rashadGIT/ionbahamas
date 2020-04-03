import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HashMap from 'hashmap';
import { Button, Form, FormGroup, Label, Input, FormText, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import {Link, Redirect } from "react-router-dom";
import axios from 'axios';
import { environment as env } from '../env/env.js';
import Payments from './Payments';
import { square } from '../env/square'
let paymentForm = {};

export default class MemberForm extends React.Component {
  constructor(props) {
    super(props);
    this.displayData = [];
    this.max = 0;
    this.state = {
      fName: '',
      lName : '',
      email : '',
      address : '',
      city : '',
      state : '',
      zip : '',
      country : '',
      showdata : this.displayData,
      postVal : "",
      secondaryMembers : [],
      isFamily : false,
      type : this.props.type,
      price : 0,
      stateList : [],
      countryList : [],
      loaded: false
    };

    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleZip = this.handleZip.bind(this);
    this.handleCountry = this.handleCountry.bind(this);
    // this.appendData = this.appendData.bind(this);
    this.handleSecondaryMembers = this.handleSecondaryMembers.bind(this);
    this.handleRemoveSecondaryMembers = this.handleRemoveSecondaryMembers.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstName(event) {
    this.setState({fName: event.target.value});
  }

  handleLastName(event) {
    this.setState({lName: event.target.value});
  }

  handleEmail(event) {
    this.setState({email: event.target.value});
  }

  handleAddress(event) {
    this.setState({address: event.target.value});
  }

  handleCity(event) {
    this.setState({city: event.target.value});
  }

  handleState(event) {
    this.setState({state: event.target.value});
  }

  handleZip(event) {
    let zip = event.target.value;
    if(!isNaN(zip)){
      this.setState({zip: zip});
    }
  }

  handleCountry(event) {
    this.setState({country: event.target.value});
  }

  handleSecondaryMembers(event,num,whichName) {
    let secondaryMembers = this.state.secondaryMembers;
    if(secondaryMembers[num]){
      secondaryMembers[num].set(whichName,event.target.value);
    }
    else{
      secondaryMembers[num] = new HashMap([whichName,event.target.value])
    }
    this.setState({secondaryMembers});
  }

  handleRemoveSecondaryMembers(event,num) {
    this.displayData.splice(num-2,1)
    this.state.secondaryMembers.delete(num)
    this.setState({secondaryMembers: this.state.secondaryMembers});
  }

//   appendData(num) {
//     this.displayData.push(
//       <FormGroup key={`Secondary Member ${num}`}>
//         <Label for={`Secondary Member ${num}`}>Secondary Member <b>{num}</b> Name</Label>
//         {/* <Button onClick={(evt) => this.handleRemoveSecondaryMembers(evt,num)}>Remove</Button> */}
//         <Input type="text" name="text" id="exampleText" placeholder={`Member ${num} Name`} maxLength={50} onChange={(evt) => this.handleSecondaryMembers(evt,num)}/>
//       </FormGroup>
//     );
//     this.setState({
//        showdata : this.displayData,
//        postVal : ""
//     });
//     this.max = this.max + 1;
//  }
  secondaryMembersTextBox(num){
    return (
      <Row key={`Secondary Member Row ${num}`}>
        <Col>
          <FormGroup key={`Secondary Member ${num}`}>
            <Label for={`Secondary Member ${num}`}>
              Secondary Member <b>{num}</b> Name
            </Label>
            <Container fluid={true}>
              <Row>
                <Col xs={12} md={6} lg={6}>
                  <Input
                    type="text"
                    name="text"
                    id="exampleText"
                    placeholder={`Member ${num} First Name`}
                    maxLength={20}
                    onChange={(evt) => this.handleSecondaryMembers(evt,num,"fName")}
                  />
                </Col>
                <Col xs={12} md={6} lg={6}>
                  <Input
                    type="text"
                    name="text"
                    id="exampleText"
                    placeholder={`Member ${num} Last Name`}
                    maxLength={20}
                    onChange={(evt) => this.handleSecondaryMembers(evt,num,"lName")}
                  />
                  </Col>
                </Row>
              </Container>
            </FormGroup>
          </Col>
        </Row>
    )
  }

  async cardNonceResponseReceived(errors, nonce, cardData){
    if (errors) {
        console.error('Encountered errors:');
        errors.forEach((error) => console.error('  ' + error.message));
        return;
    }

    alert(`The generated nonce is:\n${nonce}`);
    //TODO: Replace alert with code in step 2.1
    var bodyFormData = new FormData();
    bodyFormData.set('amount' , this.state.price);
    bodyFormData.set('nonce' , nonce);
    let data = await axios.post(`${env.sever}/php/public/payment/getPayment.php`,bodyFormData, {headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    }})
    .then(x => x.data)
    .catch(err => alert('Payment failed to complete!'));

    if(data.title.toUpperCase() === "Payment Successful".toUpperCase()){
      console.log('Hello World')
    }
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
      callbacks: { cardNonceResponseReceived: (errors, nonce, cardData) => this.cardNonceResponseReceived(errors, nonce, cardData)}
    });
  }

  async componentDidMount(){
    let stateList = await axios.get(`${env.sever}/php/public/util/getStates.php`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error)
      return [];
    })
    let countryList = await axios.get(`${env.sever}/php/public/util/getCountry.php`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error)
      return [];
    })

    this.setState({
      state : 'TX',
      country : 'US',
      isFamily : this.props.type === "Family",
      stateList,
      countryList
    })

    switch(this.props.type.toUpperCase()) {
      case 'FAMILY':
        this.setState({price : 70})
        break;
      case 'STUDENT':
          this.setState({price : 20})
        break;
      case 'INDIVIDUAL':
          this.setState({price : 50})
      break;
      default:
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
    // axios.post(`${env.sever}/php/ionNode/index.php`, this.state)
    // .then(x => {
    //   alert("Thank you for Signing up to become an Ion Member.\nPlease be on the look out for a confirmation Email from Our Automated System.")
    //   window.location.replace(`${env.sever}${env.port}`)
    // })
  }

  render() {
    return (
      <div style={{paddingTop : '10px'}}>
        <h1>{this.props.type} Membership - ${this.state.price}</h1>
        <Form onSubmit={this.handleSubmit}>
          <Container fluid={true}>
            <Row>
              <Col xs={12} md={6} lg={6}>
                <FormGroup>
                  <Label for="First Name">First Name {(this.state.isFamily) ? <b>(Primary Member)</b> : null}</Label>
                  <Input value={this.state.value} type="text" name="text" id="exampleText" placeholder="First Name" maxLength={50} onChange={this.handleFirstName} />
                </FormGroup>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <FormGroup>
                  <Label for="Last Name">Last Name</Label>
                  <Input type="text" name="text" id="exampleText" placeholder="Last Name" maxLength={50} onChange={this.handleLastName} />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
              <FormGroup>
                <Label for="Email">Email</Label>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>@</InputGroupText>
                    </InputGroupAddon>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Email" required={true} maxLength={100}  onChange={this.handleEmail}/>
                  </InputGroup>
              </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="Address">Address</Label>
                  <Input type="text" name="text" id="exampleText" placeholder="Address" maxLength={100} onChange={this.handleAddress}/>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={3} lg={3}>
                <FormGroup>
                  <Label for="City">City</Label>
                  <Input type="text" name="text" id="exampleText" placeholder="City" maxLength={50} onChange={this.handleCity}/>
                </FormGroup>
              </Col>
              <Col xs={12} md={3} lg={3}>
                <FormGroup>
                  <Label for="State">State</Label>
                  <Input value={this.state.state} type="select" name="select" id="exampleSelect" onChange={this.handleState}>
                    {this.state.stateList.map(state => <option key={state.text}>{state.value}</option>)}
                  </Input>
                </FormGroup>
              </Col>
              <Col xs={12} md={3} lg={3}>
                <FormGroup>
                  <Label for="Zip">Zip/Postal Code</Label>
                  <Input value={this.state.zip} required={true} type="text" name="number" id="exampleText" placeholder="Zip/Postal Code" onChange={this.handleZip} maxLength={5}/>
                </FormGroup>
              </Col>
              <Col xs={12} md={3} lg={3}>
                <FormGroup>
                  <Label for="Country">Country</Label>
                  <Input value={this.state.country} type="select" name="select" id="exampleSelect" onChange={this.handleCountry} disabled={true}>
                    {this.state.countryList.map(country => <option key={country.name}>{country.code}</option>)}
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              {this.props.type.toUpperCase() === "Family".toUpperCase() &&
              <Col xs={12} md={7} lg={7}>
                {[...Array(5).keys()].map(i => this.secondaryMembersTextBox(i+1))}
              </Col>
              }
              <Col xs={12} md={5} lg={5}>
                  <Payments
                    paymentForm = {paymentForm}
                    amount={this.state.price}
                  />
                  <button
                    id="sq-creditcard"
                    className="button-credit-card-cancel"
                    onClick={(event) => {
                      event.preventDefault();
                      window.location.replace(`${env.sever}${env.port}`)
                    }}
                    >
                    Cancel
                  </button>
                  {/* <Button style={{width : "100%"}} color="danger" onClick={(event) => {
                  event.preventDefault();
                  window.location.replace(`${env.sever}${env.port}`)
                }}>Cancel</Button> */}
              </Col>
            </Row>
          </Container>
          {/* <Container fluid={true}>
            <Row>
              {/* <Col xs={12} sm={12} md={12} lg={8}>
                {(this.state.isFamily) ? <Button color="secondary" onClick={() => this.appendData(this.max + 2)}>Add Secondary Member</Button> : null}
              </Col>
              <Col sm={12} md={12} lg={{ size: 2, offset: 8 }}>
                <Button style={{width : "100%"}} color="primary">Submit</Button>
              </Col>
              <Col sm={12} md={12} lg={2}>
                <Button style={{width : "100%"}} color="danger" onClick={(event) => {
                  event.preventDefault();
                  window.location.replace(`${env.sever}${env.port}`)
                }}>Cancel</Button>
              </Col>
            </Row>
          </Container> */}
        </Form>
      </div>)
  }
}
