// import React, { useEffect, useState } from 'react';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import { Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
// import { environment as env } from '../env/env.js';
// import useAxios from 'axios-hooks'
// import Payments from '../components/Payment/Payments';
// import SecondaryMembersTextBox from '../components/secondaryMembersTextBox';
// import { membershipCardNonceResponseReceived } from '../module/square';
// import { isValidMember } from '../module/validator'
// import { error } from '../css/style.css.js'

// const maxNumOfFamily = 4;

// export default function MemberForm(props) {
//   const [ memberTypeResponse, refetchMemberType ] = useAxios(`${env.proxy}/members/getMembershipData`)
//   const [ stateListResponse, refetchStateData ] = useAxios(`${env.proxy}/util/getStates`)
//   const [ countryListResponse, refetchCountryData ] = useAxios(`${env.proxy}/util/getCountry`)
//   const [memberType, setMemberType] = useState(props.match.params.type);
//   const [id, setId] = useState(0);
//   const [price, setPrice] = useState(0);
//   const [isFamily, setIsFamily] = useState(false)
//   const [fName,setFName] = useState('')
//   const [lName,setLName] = useState('')
//   const [inputErr,setInputError] = useState([])
//   const [email,setEmail] = useState('')
//   const [primaryPhone,setPrimaryPhone] = useState('')
//   const [secondaryPhone,setSecondaryPhone] = useState('')
//   const [address,setAddress] = useState('')
//   const [city,setCity] = useState('')
//   const [state,setState] = useState('TX')
//   const [zip,setZip] = useState('')
//   const [country,setCountry] = useState('US')
//   const [secondaryMembers,setSecondaryMembers] = useState({})


//   useEffect(() => {
//     setMemberType(props.match.params.type);
//   });

//   useEffect(() => {
//     setIsFamily(memberType === "Family");
//     if (memberTypeResponse.data !== undefined) {
//       let typeData = memberTypeResponse.data[memberType];
//       setPrice(typeData.price);
//       setId(typeData.id);
//     }
//   },[memberType, memberTypeResponse.data]);
  
 
//     return (
//     <div>
//       <div style={{paddingTop : '10px'}}>
//         <h1>{memberType} Membership - ${price}</h1>
//         <Form >
//           <Container fluid={true}>
//             <Row>
//               <Col xs={12} md={6} lg={6}>
//                 <FormGroup>
//                   <Label for="First Name">First Name* {(isFamily) && <b>(Primary Member)</b>}</Label>
//                   <Input
//                     value={fName}
//                     type="text"
//                     name="text"
//                     id="exampleText"
//                     style={inputErr.includes("fName") ? error : {}}
//                     placeholder="First Name"
//                     maxLength={50}
//                     onChange={ e => setFName(e.target.value) } 
//                   />
//                 </FormGroup>
//               </Col>
//               <Col xs={12} md={6} lg={6}>
//                 <FormGroup>
//                   <Label for="Last Name">Last Name*</Label>
//                   <Input
//                     value={lName}
//                     type="text"
//                     name="text"
//                     id="exampleText"
//                     style={inputErr.includes("lName") ? error : {}}
//                     placeholder="Last Name"
//                     maxLength={50}
//                     onChange={e => setLName(e.target.value) } 
//                   />
//                 </FormGroup>
//               </Col>
//             </Row>
//             <Row>
//               <Col>
//               <FormGroup>
//                 <Label for="Email">Email*</Label>
//                 <InputGroup>
//                     <InputGroupAddon addonType="prepend">
//                       <InputGroupText>@</InputGroupText>
//                     </InputGroupAddon>
//                     <Input
//                       value={email}
//                       type="email"
//                       name="email"
//                       id="exampleEmail"
//                       style={inputErr.includes("email") ? error : {}}
//                       placeholder="Email"
//                       required={false}
//                       maxLength={100}
//                       onChange={e => setEmail(e.target.value)}
//                     />
//                   </InputGroup>
//               </FormGroup>
//               </Col>
//             </Row>
//             <Row>
//               <Col xs={12} md={6} lg={6}>
//                 <FormGroup>
//                   <Label for="Primary Phone">Primary Phone*</Label>
//                   <Input
//                     value={primaryPhone}
//                     type="text"
//                     name="number"
//                     id="exampleText"
//                     style={inputErr.includes("phone") ? error : {}}
//                     placeholder="Primary Phone"
//                     maxLength={10}
//                     onChange={e => setPrimaryPhone(e.target.value)}
//                   />
//                 </FormGroup>
//               </Col>
//               <Col xs={12} md={6} lg={6}>
//                 <FormGroup>
//                   <Label for="Secondary Phone">Secondary Phone</Label>
//                   <Input
//                     value={secondaryPhone}
//                     type="text"
//                     name="number"
//                     id="exampleText"
//                     placeholder="Secondary Phone"
//                     maxLength={10}
//                     onChange={e => setSecondaryPhone(e.target.value)}
//                   />
//                 </FormGroup>
//               </Col>
//             </Row>
//             <Row>
//               <Col>
//                 <FormGroup>
//                   <Label for="Address">Address*</Label>
//                   <Input
//                     value={address}
//                     type="text"
//                     name="text"
//                     id="exampleText"
//                     style={inputErr.includes("address") ? error : {}}
//                     placeholder="Address"
//                     maxLength={100}
//                     onChange={e => setAddress(e.target.value)}
//                   />
//                 </FormGroup>
//               </Col>
//             </Row>
//             <Row>
//               <Col xs={12} md={3} lg={3}>
//                 <FormGroup>
//                   <Label for="City">City*</Label>
//                   <Input
//                     value={city}
//                     type="text"
//                     name="text"
//                     id="exampleText"
//                     style={inputErr.includes("city") ? error : {}}
//                     placeholder="City"
//                     maxLength={50}
//                     onChange={e => setCity(e.target.value)}
//                   />
//                 </FormGroup>
//               </Col>
//               <Col xs={12} md={3} lg={3}>
//                 <FormGroup>
//                   <Label for="State">State*</Label>
//                   <Input
//                     value={state}
//                     type="select"
//                     name="select"
//                     id="exampleSelect"
//                     onChange={e => setState(e.target.value)}>
//                     {!stateListResponse.loading && stateListResponse.data.map(state => <option key={state.abbreviation}>{state.abbreviation}</option>)}
//                   </Input>
//                 </FormGroup>
//               </Col>
//               <Col xs={12} md={3} lg={3}>
//                 <FormGroup>
//                   <Label for="Zip">Zip/Postal Code*</Label>
//                   <Input
//                     value={zip}
//                     required={false}
//                     type="text"
//                     name="number"
//                     id="exampleText"
//                     style={inputErr.includes("zip") ? error : {}}
//                     placeholder="Zip/Postal Code"
//                     onChange={e => setZip(e.target.value)}
//                     maxLength={5}
//                   />
//                 </FormGroup>
//               </Col>
//               <Col xs={12} md={3} lg={3}>
//                 <FormGroup>
//                   <Label for="Country">Country*</Label>
//                   <Input
//                     value={country}
//                     type="select"
//                     name="select"
//                     id="exampleSelect"
//                     onChange={e => setCountry(e.target.value)}
//                     disabled={false}>
//                     {!countryListResponse.loading && countryListResponse.data.map(country => <option key={country.code}>{country.code}</option>)}
//                   </Input>
//                 </FormGroup>
//               </Col>
//             </Row>
//             <Row>
//               {isFamily &&
//                 <Col xs={12} md={7} lg={7}>
//                   {[...Array(maxNumOfFamily).keys()].map(i => 
//                     <SecondaryMembersTextBox
//                       key={`Family Mamber ${i}`}
//                       num={i+1}
//                       error={error}
//                       inputErr={inputErr}
//                       secondaryMembers={secondaryMembers}
//                       setSecondaryMembers={setSecondaryMembers}
//                     />
//                   )}
//                 </Col>
//               }
//               <Col xs={12} md={12} lg={12}>
//                 <Payments
//                   id={id}
//                   btnText={"Pay With Card"}
//                   cardNonceResponseReceived={membershipCardNonceResponseReceived}
//                   validator={isValidMember}
//                   setInputError={setInputError}
//                   formData={{
//                     amount : price,
//                     fName : fName,
//                     lName : lName,
//                     email : email,
//                     type : memberType,
//                     address : address,
//                     city : city,
//                     state : state,
//                     zip : zip,
//                     country : country,
//                     primaryPhone : primaryPhone,
//                     secondaryPhone : secondaryPhone,
//                     isPrimary : true,
//                     id : id,
//                     secondaryMembers : secondaryMembers,
//                     isFamily : isFamily
//                   }}
//                 />
//               </Col>
//             </Row>
//           </Container>
//         </Form>
//       </div>
//     </div>)
// }
