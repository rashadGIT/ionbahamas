import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HashMap from 'hashmap';
import { Button, Form, FormGroup, Label, Input, FormText, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
//import {Link, Redirect } from "react-router-dom";
import axios from 'axios';
import { environment as env } from '../env/env.js';
import Payments from './Payments';
import { square } from '../env/square'
import Popup from '../components/Popup';
let paymentForm = {};
let count = 0;
const maxTrySendEmail = 5;
const error = {
  border: '1px solid #eb516d'
}

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
      loaded: false,
      err : [],
      primaryPhone : '',
      secondaryPhone : '',
      membershipTypeId : 1,
      membershipInfo : {},
      emailSent : true,
      showPopup: false,
      paymentReceived: null,
      recordInserted : null,
      welcomeEmailSent : null,
      countDown : 5,
      startCountDown : false
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
    this.handlePrimaryPhone = this.handlePrimaryPhone.bind(this);
    this.handleSecondaryPhone = this.handleSecondaryPhone.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
  }

  togglePopup() {
    this.setState({
         showPopup: !this.state.showPopup
    });
     }

  handlePrimaryPhone(event){
    let primaryPhone = event.target.value;
    if(!isNaN(primaryPhone)){
      this.setState({primaryPhone});
    }
  }

  handleSecondaryPhone(event){
    let secondaryPhone = event.target.value;
    if(!isNaN(secondaryPhone)){
      this.setState({secondaryPhone});
    }
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
              Secondary Member <b>{num}</b> Name {(num === 1) && '*'}
            </Label>
            <Container fluid={true}>
              <Row>
                <Col xs={12} md={6} lg={6}>
                  <Input
                    type="text"
                    name="text"
                    id="exampleText"
                    style={this.state.err.includes(`secfName${num}`) ? error : {}}
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
                    style={this.state.err.includes(`seclName${num}`) ? error : {}}
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
    this.togglePopup()
    //alert(`The generated nonce is:\n${nonce}`);
    //TODO: Replace alert with code in step 2.1
    var bodyFormData = new FormData();
    bodyFormData.set('amount' , this.state.price);
    bodyFormData.set('nonce' , nonce);
    let data = await axios.post(`${env.sever}/php/public/payment/getPayment.php`,bodyFormData, {headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    }})
    .then(x => x.data)
    .catch(err => {
      alert('Payment failed to complete!')
      return {
        'status' : 500,
        'title': 'Payment Failure',
        'result': err.response.text
     };
    });

    if(data.status === 200){
      this.setState({paymentReceived : "success"})
      var memberData = new FormData();
      memberData.set('fName' , this.state.fName);
      memberData.set('lName' , this.state.lName);
      memberData.set('email' , this.state.email);
      // memberData.set('memberInfo' , JSON.stringify(this.state));
      memberData.set('data' , JSON.stringify(data));
      memberData.set('type' , this.state.type);
      memberData.set('address' , this.state.address);
      memberData.set('city' , this.state.city);
      memberData.set('state' , this.state.state);
      memberData.set('zip' , this.state.zip);
      memberData.set('country' , this.state.country);
      memberData.set('primaryPhone' , this.state.primaryPhone);
      memberData.set('secondaryPhone' , this.state.secondaryPhone);
      memberData.set('isPrimary' , true);
      memberData.set('membershipTypeId' , this.state.membershipInfo.id);
      memberData.set('secondaryMembers' , JSON.stringify(this.state.secondaryMembers));

      let insertMembers = await axios.post(`${env.sever}/php/public/members/addMembers.php`,memberData, {headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }})
        .then(x => x.data)
        .catch(err => {
          alert('Email failed to complete!')
          return {
            'status' : 500,
            'title': 'Payment Failure',
            'result': err
         };
        });

      memberData.set('insertedMembers' , JSON.stringify(insertMembers));

      if([500].includes(insertMembers.status)){
        this.setState({recordInserted : "fail"})
        return insertMembers;
      }
      else{
        this.setState({recordInserted : "success"})
      }


      do{
        let emailResult = await axios.post(`${env.sever}/php/public/members/sendMemberWelcomeEmail.php`,memberData, {headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          }})
          .then(x => x.data)
          .catch(err => {
            alert('Email failed to complete!')
            return {
              'status' : 500,
              'title': 'Payment Failure',
              'result': err
          };
          });

          if(typeof emailResult.accepted !== 'undefined'){
            this.setState({emailSent : false})
            this.setState({welcomeEmailSent : "success",
            startCountDown : true
          })
          }
          count++;
      }while(this.state.emailSent && count < maxTrySendEmail);

      if(this.state.startCountDown){
        for(let i = this.state.countDown; i > 0; i--){
          await new Promise(resolve => setTimeout(resolve, 1000));
          this.setState({countDown : i});
        }
        window.location.replace(`${env.sever}${env.port}`)
      }
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
      callbacks: { cardNonceResponseReceived: async (errors, nonce, cardData) => {
        let err = [];
        let secMems = this.state.secondaryMembers;
        this.setState({err})

        if(this.state.fName.trim().length === 0) err.push("fName");

        if(this.state.lName.trim().length === 0) err.push("lName");

        if(this.state.email.trim().length === 0) err.push("email");

        if(this.state.primaryPhone.trim().length === 0) err.push("phone");

        if(this.state.address.trim().length === 0) err.push("address");

        if(this.state.city.trim().length === 0) err.push("city");

        if(this.state.state.trim().length === 0) err.push("state");

        if(this.state.zip.trim().length === 0) err.push("zip");

        if(this.state.country.trim().length === 0) err.push("country");

        if(this.state.isFamily){
          for(let i = 1; i < this.state.secondaryMembers.length; i++){
            let hashMap = this.state.secondaryMembers[i];
            if(typeof hashMap === 'undefined' || hashMap === null) continue;
            let fName = hashMap.get("fName");
            let lName = hashMap.get("lName");

            if(typeof fName !== 'undefined' && fName.trim().length === 0){
              fName = undefined;
            }
            if(typeof lName !== 'undefined' && lName.trim().length === 0){
              lName = undefined;
            }

            if(fName === undefined && typeof lName !== 'undefined'){
              err.push(`secfName${i}`)
            }

            if(lName === undefined && typeof fName !== 'undefined'){
              err.push(`seclName${i}`)
            }

            if(fName === undefined && lName === undefined){
              let temp = this.state.secondaryMembers;
              temp[i] = null;
              secMems = temp;
            }
          }
        }

        var memberData = new FormData();
        memberData.set('email' , this.state.email.trim());
        memberData.set('primaryPhone' , this.state.primaryPhone.trim());
        let alreadyAMember = await axios.post(`${env.sever}/php/public/members/getMemberByEmailOrPhone.php`,memberData, {headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          }})
          .then(x => x.data)
          .catch(err => {
            return {
              'status' : 500,
              'title': 'Payment Failure',
              'result': err
           };
          });

        if(alreadyAMember.email){
          err.push("email");
          alert(`${this.state.email.trim()} is already exist in our system.\nPlease try a different email.`)
        }
        else if(alreadyAMember.phone){
          err.push("phone");
          alert(`${this.state.primaryPhone.trim()} is already exist in our system.\nPlease try a different Primary phone number.`)
        }
        else if(this.state.isFamily && secMems.filter(Boolean).length === 0) {
          err.push(`secfName1`);
          err.push(`seclName1`);
          alert(`At least one secondary Family is required`)

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

    let membershipInfoArray = await axios.get(`/api/members/getMembershipData`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error)
      return [];
    })

    let membershipInfo = membershipInfoArray.find(x => x.Type === this.props.type);
    let price = membershipInfo.Price;

    this.setState({
      state : 'TX',
      country : 'US',
      isFamily : this.props.type === "Family",
      stateList,
      countryList,
      membershipInfo,
      price
    })
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

  render(){
    return (
      <div style={{paddingTop : '10px'}}>
        <h1>{this.props.type} Membership - ${this.state.price}</h1>
        <Form onSubmit={this.handleSubmit}>
          <Container fluid={true}>
            <Row>
              <Col xs={12} md={6} lg={6}>
                <FormGroup>
                  <Label for="First Name">First Name* {(this.state.isFamily) ? <b>(Primary Member)</b> : null}</Label>
                  <Input
                    value={this.state.fName}
                    type="text"
                    name="text"
                    id="exampleText"
                    style={this.state.err.includes("fName") ? error : {}}
                    placeholder="First Name"
                    maxLength={50}
                    onChange={this.handleFirstName} />
                </FormGroup>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <FormGroup>
                  <Label for="Last Name">Last Name*</Label>
                  <Input
                    value={this.state.lName}
                    type="text"
                    name="text"
                    id="exampleText"
                    style={this.state.err.includes("lName") ? error : {}}
                    placeholder="Last Name"
                    maxLength={50}
                    onChange={this.handleLastName} />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
              <FormGroup>
                <Label for="Email">Email*</Label>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>@</InputGroupText>
                    </InputGroupAddon>
                    <Input
                      value={this.state.email}
                      type="email"
                      name="email"
                      id="exampleEmail"
                      style={this.state.err.includes("email") ? error : {}}
                      placeholder="Email"
                      required={false}
                      maxLength={100}
                      onChange={this.handleEmail}
                    />
                  </InputGroup>
              </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6} lg={6}>
                <FormGroup>
                  <Label for="Primary Phone">Primary Phone*</Label>
                  <Input
                    value={this.state.primaryPhone}
                    type="text"
                    name="number"
                    id="exampleText"
                    style={this.state.err.includes("phone") ? error : {}}
                    placeholder="Primary Phone"
                    maxLength={10}
                    onChange={this.handlePrimaryPhone}
                  />
                </FormGroup>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <FormGroup>
                  <Label for="Secondary Phone">Secondary Phone</Label>
                  <Input
                    value={this.state.secondaryPhone}
                    type="text"
                    name="number"
                    id="exampleText"
                    placeholder="Secondary Phone"
                    maxLength={10}
                    onChange={this.handleSecondaryPhone}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="Address">Address*</Label>
                  <Input
                    value={this.state.address}
                    type="text"
                    name="text"
                    id="exampleText"
                    style={this.state.err.includes("address") ? error : {}}
                    placeholder="Address"
                    maxLength={100}
                    onChange={this.handleAddress}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={3} lg={3}>
                <FormGroup>
                  <Label for="City">City*</Label>
                  <Input
                    value={this.state.city}
                    type="text"
                    name="text"
                    id="exampleText"
                    style={this.state.err.includes("city") ? error : {}}
                    placeholder="City"
                    maxLength={50}
                    onChange={this.handleCity}/>
                </FormGroup>
              </Col>
              <Col xs={12} md={3} lg={3}>
                <FormGroup>
                  <Label for="State">State*</Label>
                  <Input
                    value={this.state.state}
                    type="select"
                    name="select"
                    id="exampleSelect"
                    onChange={this.handleState}>
                    {this.state.stateList.map(state => <option key={state.text}>{state.value}</option>)}
                  </Input>
                </FormGroup>
              </Col>
              <Col xs={12} md={3} lg={3}>
                <FormGroup>
                  <Label for="Zip">Zip/Postal Code*</Label>
                  <Input
                    value={this.state.zip}
                    required={false}
                    type="text"
                    name="number"
                    id="exampleText"
                    style={this.state.err.includes("zip") ? error : {}}
                    placeholder="Zip/Postal Code"
                    onChange={this.handleZip}
                    maxLength={5}
                  />
                </FormGroup>
              </Col>
              <Col xs={12} md={3} lg={3}>
                <FormGroup>
                  <Label for="Country">Country*</Label>
                  <Input
                    value={this.state.country}
                    type="select"
                    name="select"
                    id="exampleSelect"
                    onChange={this.handleCountry}
                    disabled={true}>
                    {this.state.countryList.map(country => <option key={country.name}>{country.code}</option>)}
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              {this.state.isFamily &&
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
                  {/*<button onClick={this.togglePopup}> Click To Launch Popup</button>*/}
                  {this.state.showPopup &&
                    <Popup
                              text='Click "Close Button" to hide popup'
                              paymentReceived={this.state.paymentReceived}
                              recordInserted = {this.state.recordInserted}
                              welcomeEmailSent = {this.state.welcomeEmailSent}
                              closePopup={this.togglePopup}
                              startCountDown={this.state.startCountDown}
                              countDown={this.state.countDown}
                    />
                  }
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
