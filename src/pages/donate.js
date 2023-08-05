import React, { useEffect, useState }  from 'react';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormGroup, Label, Input,} from 'reactstrap';
import { getCause } from '../module/causes'
import { checkBox, checkBoxLabel, title,  } from '../css/input.css'
import Payments from '../components/Payment/Payments';
import { moneyFormat } from '../module/util'
import { donationCardNonceResponseReceived } from '../module/square';
import { isValidDonation } from '../module/validator'
import { error } from '../css/style.css.js'
import RadioButton from '../components/RadioBtn/RadioBtn'

const donationInputBox = { marginBottom : '10px'}

export default function DonationForm (props) {
  const [donationType, setDonationType] = useState(props.match.params.type);
  const [cause, setDonation] = useState(getCause(donationType));
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [showOptionBox, setShowOptionBox] = useState(false);
  const [amount, setAmount] = useState(0);
  const [moneyFormatStr, setMoneyFormatStr] = useState(moneyFormat(amount))
  const [inputErr,setInputError] = useState([])
  
  useEffect(() => {
    setDonationType(props.match.params.type)
  });

  useEffect(() => {
    setDonation(getCause(donationType))
  },[donationType])

  useEffect(() => {
    showOptionBox && setAmount(0)
  },[showOptionBox])

  useEffect(() => {
    if(!isNaN(amount)){
      setMoneyFormatStr(moneyFormat(amount))
    }
  },[amount])
  
  return (
    <Layout>
      <div style={{padding : '50px 25px 0px 25px'}}>
        <center>
          <img 
            style={{maxWidth : '300px', paddingBottom : '30px'}}
            alt={"https://i.ytimg.com/vi/5aJPNHnkwjw/maxresdefault.jpg"}
            src={cause.img} 
          />
          <h4>
            <b>
              <i>
                {cause.description}
              </i>
            </b>
          </h4>
        </center>
        <FormGroup check>
          <Label check>
            <Input 
              type="checkbox" 
              style={checkBox}  
              checked={isAnonymous} 
              onChange={() => setIsAnonymous(!isAnonymous)}/>{' '}
              <span style={checkBoxLabel}>Make me anonymous</span>
          </Label>
        </FormGroup>
        <Container fluid={true} style={{paddingTop : '30px'}}>
          <Row>
            <Col xs={12} md={6} lg={8}>
              <Row>
                <Col xs={12} md={6} lg={6}>
                  <FormGroup>
                    <Label for="exampleEmail" style={title}>First Name</Label>
                    <Input 
                      style={inputErr.includes("fName") ? error : {}}
                      required={true} 
                      type="text" 
                      name="fName" 
                      id="fName" 
                      maxLength="20"
                      onChange={(event) => setFName(event.target.value)} 
                      value={fName}
                    />
                  </FormGroup>
                </Col>
                <Col xs={12} md={6} lg={6}>
                  <FormGroup>
                    <Label for="exampleEmail" style={title}>Last Name</Label>
                    <Input 
                      style={inputErr.includes("lName") ? error : {}}
                      type="text" 
                      name="lName" 
                      id="lName"
                      maxLength="20"
                      onChange={(event)=> setLName(event.target.value)} value={lName} 
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12} lg={12}>
                  <FormGroup>
                    <Label for="exampleEmail" style={title}>Email</Label>
                    <Input 
                      style={inputErr.includes("email") ? error : {}}
                      type="email" 
                      name="email" 
                      id="exampleEmail"
                      maxLength="50" 
                      onChange={(event) => setEmail(event.target.value)} 
                      value={email} 
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Row>
                <Col style={{paddingTop : '0px'}}>
                  <center>
                    <FormGroup tag="fieldset" onChange={(event) => {
                      setShowOptionBox(isNaN(event.target.value))
                      setAmount(event.target.value)
                    }}>
                    <Label for="exampleEmail" style={title}>Donation Amount ($)</Label>
                    <Input 
                      style={inputErr.includes("amount") ? {...error,...donationInputBox} : donationInputBox}
                      type="text" 
                      name="donate" 
                      maxLength="8"
                      id="donateExample" 
                      onChange={(event) => setAmount(event.target.value)} 
                      value={amount}
                    />
                    <Row style={{display: 'flex', justifyContent: 'center'}}>
                        {cause.suggestedDonations.slice(0,3).map((x) => RadioButton(x,amount))}
                    </Row>
                    </FormGroup>
                  </center>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col  xs={12} md={12} lg={12}>
              <Payments
                id={10}
                btnText={`Donate ${moneyFormatStr} with card`}
                validator={isValidDonation}
                setInputError={setInputError}
                cardNonceResponseReceived={donationCardNonceResponseReceived}
                formData={{
                    amount : amount,
                    isAnonymous : isAnonymous,
                    fName : fName,
                    lName : lName,
                    email : email,
                    donation : cause
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}