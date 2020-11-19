import React, { useEffect, useState, useLayoutEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HashMap from 'hashmap';
import Modal from 'react-modal';
import { Button, Form, FormGroup, Label, Input, FormText, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
//import {Link, Redirect } from "react-router-dom";
import axios from 'axios';
import { environment as env } from '../env/env.js';
import useAxios from 'axios-hooks'
import Payments from '../components/Payments';
import { square } from '../env/square'
import Popup from '../components/Popup';
import { useAxiosGet, useAxiosPost } from '../hooks/axios';
//import { useSquare } from '../hooks/square'
import SecondaryMembersTextBox from '../components/secondaryMembersTextBox';
import { useSelector, useDispatch } from 'react-redux'
import { membershipCardNonceResponseReceived } from '../module/square';
// import useFetch from "../hooks/useFetch";
// import { incrument, buildPayments } from '../action/action'
let paymentForm = {};
let count = 0;
const maxTrySendEmail = 5;
const error = {
  border: '1px solid #eb516d'
}

export default function MemberForm(props) {
  const [ memberTypeResponse, refetchMemberType ] = useAxios(`${env.proxy}/members/getMembershipData`)
  const [ stateListResponse, refetchStateData ] = useAxios(`${env.proxy}/util/getStates`)
  const [ countryListResponse, refetchCountryData ] = useAxios(`${env.proxy}/util/getCountry`)
  const [memberType, setMemberType] = useState(props.match.params.type);
  // const [SqPaymentForm, setSqPaymentForm] = useState(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(0);
  const [price, setPrice] = useState(0);
  const [isFamily, setIsFamily] = useState(false)
  const [fName,setFName] = useState('')
  const [lName,setLName] = useState('')
  const [inputErr,setInputError] = useState([])
  const [email,setEmail] = useState('')
  const [primaryPhone,setPrimaryPhone] = useState('')
  const [secondaryPhone,setSecondaryPhone] = useState('')
  const [address,setAddress] = useState('')
  const [city,setCity] = useState('')
  const [state,setState] = useState('TX')
  const [zip,setZip] = useState('')
  const [country,setCountry] = useState('US')
  const [secondaryMembers,setSecondaryMembers] = useState({})


  useEffect(() => {
    setMemberType(props.match.params.type);
  });

  useEffect(() => {
    setIsFamily(memberType === "Family");
    if (memberTypeResponse.data !== undefined) {
      let typeData = memberTypeResponse.data[memberType];
      setPrice(typeData.price);
      setId(typeData.id);
    }
  },[memberType, memberTypeResponse.data]);
  
 
    return (
      <div>
        <Payments
          id={id}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          cardNonceResponseReceived={membershipCardNonceResponseReceived}
          // setInputError={setInputError}
          formData={{
            amount : price,
            fName : fName,
            lName : lName,
            email : email,
            type : memberType,
            address : address,
            city : city,
            state : state,
            zip : zip,
            country : country,
            primaryPhone : primaryPhone,
            secondaryPhone : secondaryPhone,
            isPrimary : true,
            id : id,
            secondaryMembers : secondaryMembers,
            isFamily : isFamily
          }}
        />
      <div style={{paddingTop : '10px'}}>
        {/* <button onClick={() => props.history.goBack()}>Back</button> */}
        <h1>{memberType} Membership - ${price}</h1>
        <Form >
          <Container fluid={true}>
            <Row>
              <Col xs={12} md={6} lg={6}>
                <FormGroup>
                  <Label for="First Name">First Name* {(isFamily) && <b>(Primary Member)</b>}</Label>
                  <Input
                    value={fName}
                    type="text"
                    name="text"
                    id="exampleText"
                    style={inputErr.includes("fName") ? error : {}}
                    placeholder="First Name"
                    maxLength={50}
                    onChange={ e => setFName(e.target.value) } 
                  />
                </FormGroup>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <FormGroup>
                  <Label for="Last Name">Last Name*</Label>
                  <Input
                    value={lName}
                    type="text"
                    name="text"
                    id="exampleText"
                    style={inputErr.includes("lName") ? error : {}}
                    placeholder="Last Name"
                    maxLength={50}
                    onChange={e => setLName(e.target.value) } 
                  />
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
                      value={email}
                      type="email"
                      name="email"
                      id="exampleEmail"
                      style={inputErr.includes("email") ? error : {}}
                      placeholder="Email"
                      required={false}
                      maxLength={100}
                      onChange={e => setEmail(e.target.value)}
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
                    value={primaryPhone}
                    type="text"
                    name="number"
                    id="exampleText"
                    style={inputErr.includes("phone") ? error : {}}
                    placeholder="Primary Phone"
                    maxLength={10}
                    onChange={e => setPrimaryPhone(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <FormGroup>
                  <Label for="Secondary Phone">Secondary Phone</Label>
                  <Input
                    value={secondaryPhone}
                    type="text"
                    name="number"
                    id="exampleText"
                    placeholder="Secondary Phone"
                    maxLength={10}
                    onChange={e => setSecondaryPhone(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="Address">Address*</Label>
                  <Input
                    value={address}
                    type="text"
                    name="text"
                    id="exampleText"
                    style={inputErr.includes("address") ? error : {}}
                    placeholder="Address"
                    maxLength={100}
                    onChange={e => setAddress(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={3} lg={3}>
                <FormGroup>
                  <Label for="City">City*</Label>
                  <Input
                    value={city}
                    type="text"
                    name="text"
                    id="exampleText"
                    style={inputErr.includes("city") ? error : {}}
                    placeholder="City"
                    maxLength={50}
                    onChange={e => setCity(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col xs={12} md={3} lg={3}>
                <FormGroup>
                  <Label for="State">State*</Label>
                  <Input
                    value={state}
                    type="select"
                    name="select"
                    id="exampleSelect"
                    onChange={e => setState(e.target.value)}>
                    {!stateListResponse.loading && stateListResponse.data.map(state => <option key={state.abbreviation}>{state.abbreviation}</option>)}
                  </Input>
                </FormGroup>
              </Col>
              <Col xs={12} md={3} lg={3}>
                <FormGroup>
                  <Label for="Zip">Zip/Postal Code*</Label>
                  <Input
                    value={zip}
                    required={false}
                    type="text"
                    name="number"
                    id="exampleText"
                    style={inputErr.includes("zip") ? error : {}}
                    placeholder="Zip/Postal Code"
                    onChange={e => setZip(e.target.value)}
                    maxLength={5}
                  />
                </FormGroup>
              </Col>
              <Col xs={12} md={3} lg={3}>
                <FormGroup>
                  <Label for="Country">Country*</Label>
                  <Input
                    value={country}
                    type="select"
                    name="select"
                    id="exampleSelect"
                    onChange={e => setCountry(e.target.value)}
                    disabled={false}>
                    {!countryListResponse.loading && countryListResponse.data.map(country => <option key={country.code}>{country.code}</option>)}
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              {isFamily &&
                <Col xs={12} md={7} lg={7}>
                  {[...Array(4).keys()].map(i => 
                    <SecondaryMembersTextBox
                      num={i+1}
                      error={error}
                      inputErr={inputErr}
                      secondaryMembers={secondaryMembers}
                      setSecondaryMembers={setSecondaryMembers}
                    />
                  )}
                </Col>
              }
              <Col xs={12} md={12} lg={12}>
                  <button 
                    id="sq-creditcard"
                    className="button-credit-card"
                    onClick={async (event) => {
                      event.preventDefault();
                      let err = [];
                      if(fName.trim().length === 0) err.push("fName");
                      if(lName.trim().length === 0) err.push("lName");
                      if(email.trim().length === 0) err.push("email");
                      if(primaryPhone.trim().length === 0) err.push("phone");
                      if(address.trim().length === 0) err.push("address");
                      if(city.trim().length === 0) err.push("city");
                      if(state.trim().length === 0) err.push("state");
                      if(zip.trim().length === 0) err.push("zip");
                      if(country.trim().length === 0) err.push("country");
                      if(isFamily){
                        for(let key in secondaryMembers){
                          let hashMap = secondaryMembers[key];
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
                            err.push(`secfName${key}`)
                          }

                          if(lName === undefined && typeof fName !== 'undefined'){
                            err.push(`seclName${key}`)
                          }

                          if(fName === undefined && lName === undefined){
                              secondaryMembers[key] = null;
                          }
                        }
                      }

                      let alreadyAMember = await axios.post(`${env.sever}/members/getMemberByEmailOrPhone`,{email,primaryPhone})
                      .then(x => {
                        if(x.data){ return x.data}
                        return x;
                      })
                      .catch(err => {
                        console.log(err.message)
                        return err
                      });

                      if(alreadyAMember.email && alreadyAMember.email === email.toUpperCase()){
                        err.push("email");
                        alert(`${email.trim()} is already exist in our system.\nPlease try a different email.`)
                      }
                      else if(alreadyAMember.phone && alreadyAMember.phone === parseInt(primaryPhone)){
                        err.push("phone");
                        alert(`${primaryPhone.trim()} is already exist in our system.\nPlease try a different Primary phone number.`)
                      }
                      
                      if(isFamily && secondaryMembers.filter(Boolean).length === 0) {
                        err.push(`secfName1`);
                        err.push(`seclName1`);
                        alert(`At least one secondary Family is required`)

                      }

                      if(err.length > 0){
                        setInputError(err)
                        return;
                      }

                      setIsOpen(true) 
                      return;
                  }}>Submit</button>
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
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
      </div>)
  // }
}
