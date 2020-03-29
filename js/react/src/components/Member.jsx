import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HashMap from 'hashmap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Link, Redirect } from "react-router-dom";
import axios from 'axios';
import { environment as env } from '../env/env.js';

//let stateList = []
  // { value: "AK", text: "Alaska" },
  // { value: "AL", text: "Alabama" },
  // { value: "AR", text: "Arkansas" },
  // { value: "AS", text: "American Samoa" },
  // { value: "AZ", text: "Arizona" },
  // { value: "CA", text: "California" },
  // { value: "CO", text: "Colorado" },
  // { value: "CT", text: "Connecticut" },
  // { value: "DC", text: "District of Columbia" },
  // { value: "DE", text: "Delaware" },
  // { value: "FL", text: "Florida" },
  // { value: "GA", text: "Georgia" },
  // { value: "GU", text: "Guam" },
  // { value: "HI", text: "Hawaii" },
  // { value: "IA", text: "Iowa" },
  // { value: "ID", text: "Idaho" },
  // { value: "IL", text: "Illinois" },
  // { value: "IN", text: "Indiana" },
  // { value: "KS", text: "Kansas" },
  // { value: "KY", text: "Kentucky" },
  // { value: "LA", text: "Louisiana" },
  // { value: "MA", text: "Massachusetts" },
  // { value: "MD", text: "Maryland" },
  // { value: "ME", text: "Maine" },
  // { value: "MI", text: "Michigan" },
  // { value: "MN", text: "Minnesota" },
  // { value: "MO", text: "Missouri" },
  // { value: "MS", text: "Mississippi" },
  // { value: "MT", text: "Montana" },
  // { value: "NC", text: "North Carolina" },
  // { value: "ND", text: "North Dakota" },
  // { value: "NE", text: "Nebraska" },
  // { value: "NH", text: "New Hampshire" },
  // { value: "NJ", text: "New Jersey" },
  // { value: "NM", text: "New Mexico" },
  // { value: "NV", text: "Nevada" },
  // { value: "NY", text: "New York" },
  // { value: "OH", text: "Ohio" },
  // { value: "OK", text: "Oklahoma" },
  // { value: "OR", text: "Oregon" },
  // { value: "PA", text: "Pennsylvania" },
  // { value: "PR", text: "Puerto Rico" },
  // { value: "RI", text: "Rhode Island" },
  // { value: "SC", text: "South Carolina" },
  // { value: "SD", text: "South Dakota" },
  // { value: "TN", text: "Tennessee" },
  // { value: "TX", text: "Texas" },
  // { value: "UT", text: "Utah" },
  // { value: "VA", text: "Virginia" },
  // { value: "VI", text: "Virgin Islands" },
  // { value: "VT", text: "Vermont" },
  // { value: "WA", text: "Washington" },
  // { value: "WI", text: "Wisconsin" },
  // { value: "WV", text: "West Virginia" },
  // { value: "WY", text: "Wyoming" }
  // ]
  let countryList = [ 
    {"name": "Afghanistan", "code": "AF"}, 
    {"name": "land Islands", "code": "AX"}, 
    {"name": "Albania", "code": "AL"}, 
    {"name": "Algeria", "code": "DZ"}, 
    {"name": "American Samoa", "code": "AS"}, 
    {"name": "AndorrA", "code": "AD"}, 
    {"name": "Angola", "code": "AO"}, 
    {"name": "Anguilla", "code": "AI"}, 
    {"name": "Antarctica", "code": "AQ"}, 
    {"name": "Antigua and Barbuda", "code": "AG"}, 
    {"name": "Argentina", "code": "AR"}, 
    {"name": "Armenia", "code": "AM"}, 
    {"name": "Aruba", "code": "AW"}, 
    {"name": "Australia", "code": "AU"}, 
    {"name": "Austria", "code": "AT"}, 
    {"name": "Azerbaijan", "code": "AZ"}, 
    {"name": "Bahamas", "code": "BS"}, 
    {"name": "Bahrain", "code": "BH"}, 
    {"name": "Bangladesh", "code": "BD"}, 
    {"name": "Barbados", "code": "BB"}, 
    {"name": "Belarus", "code": "BY"}, 
    {"name": "Belgium", "code": "BE"}, 
    {"name": "Belize", "code": "BZ"}, 
    {"name": "Benin", "code": "BJ"}, 
    {"name": "Bermuda", "code": "BM"}, 
    {"name": "Bhutan", "code": "BT"}, 
    {"name": "Bolivia", "code": "BO"}, 
    {"name": "Bosnia and Herzegovina", "code": "BA"}, 
    {"name": "Botswana", "code": "BW"}, 
    {"name": "Bouvet Island", "code": "BV"}, 
    {"name": "Brazil", "code": "BR"}, 
    {"name": "British Indian Ocean Territory", "code": "IO"}, 
    {"name": "Brunei Darussalam", "code": "BN"}, 
    {"name": "Bulgaria", "code": "BG"}, 
    {"name": "Burkina Faso", "code": "BF"}, 
    {"name": "Burundi", "code": "BI"}, 
    {"name": "Cambodia", "code": "KH"}, 
    {"name": "Cameroon", "code": "CM"}, 
    {"name": "Canada", "code": "CA"}, 
    {"name": "Cape Verde", "code": "CV"}, 
    {"name": "Cayman Islands", "code": "KY"}, 
    {"name": "Central African Republic", "code": "CF"}, 
    {"name": "Chad", "code": "TD"}, 
    {"name": "Chile", "code": "CL"}, 
    {"name": "China", "code": "CN"}, 
    {"name": "Christmas Island", "code": "CX"}, 
    {"name": "Cocos (Keeling) Islands", "code": "CC"}, 
    {"name": "Colombia", "code": "CO"}, 
    {"name": "Comoros", "code": "KM"}, 
    {"name": "Congo", "code": "CG"}, 
    {"name": "Congo, The Democratic Republic of the", "code": "CD"}, 
    {"name": "Cook Islands", "code": "CK"}, 
    {"name": "Costa Rica", "code": "CR"}, 
    {"name": "Cote D\"Ivoire", "code": "CI"}, 
    {"name": "Croatia", "code": "HR"}, 
    {"name": "Cuba", "code": "CU"}, 
    {"name": "Cyprus", "code": "CY"}, 
    {"name": "Czech Republic", "code": "CZ"}, 
    {"name": "Denmark", "code": "DK"}, 
    {"name": "Djibouti", "code": "DJ"}, 
    {"name": "Dominica", "code": "DM"}, 
    {"name": "Dominican Republic", "code": "DO"}, 
    {"name": "Ecuador", "code": "EC"}, 
    {"name": "Egypt", "code": "EG"}, 
    {"name": "El Salvador", "code": "SV"}, 
    {"name": "Equatorial Guinea", "code": "GQ"}, 
    {"name": "Eritrea", "code": "ER"}, 
    {"name": "Estonia", "code": "EE"}, 
    {"name": "Ethiopia", "code": "ET"}, 
    {"name": "Falkland Islands (Malvinas)", "code": "FK"}, 
    {"name": "Faroe Islands", "code": "FO"}, 
    {"name": "Fiji", "code": "FJ"}, 
    {"name": "Finland", "code": "FI"}, 
    {"name": "France", "code": "FR"}, 
    {"name": "French Guiana", "code": "GF"}, 
    {"name": "French Polynesia", "code": "PF"}, 
    {"name": "French Southern Territories", "code": "TF"}, 
    {"name": "Gabon", "code": "GA"}, 
    {"name": "Gambia", "code": "GM"}, 
    {"name": "Georgia", "code": "GE"}, 
    {"name": "Germany", "code": "DE"}, 
    {"name": "Ghana", "code": "GH"}, 
    {"name": "Gibraltar", "code": "GI"}, 
    {"name": "Greece", "code": "GR"}, 
    {"name": "Greenland", "code": "GL"}, 
    {"name": "Grenada", "code": "GD"}, 
    {"name": "Guadeloupe", "code": "GP"}, 
    {"name": "Guam", "code": "GU"}, 
    {"name": "Guatemala", "code": "GT"}, 
    {"name": "Guernsey", "code": "GG"}, 
    {"name": "Guinea", "code": "GN"}, 
    {"name": "Guinea-Bissau", "code": "GW"}, 
    {"name": "Guyana", "code": "GY"}, 
    {"name": "Haiti", "code": "HT"}, 
    {"name": "Heard Island and Mcdonald Islands", "code": "HM"}, 
    {"name": "Holy See (Vatican City State)", "code": "VA"}, 
    {"name": "Honduras", "code": "HN"}, 
    {"name": "Hong Kong", "code": "HK"}, 
    {"name": "Hungary", "code": "HU"}, 
    {"name": "Iceland", "code": "IS"}, 
    {"name": "India", "code": "IN"}, 
    {"name": "Indonesia", "code": "ID"}, 
    {"name": "Iran, Islamic Republic Of", "code": "IR"}, 
    {"name": "Iraq", "code": "IQ"}, 
    {"name": "Ireland", "code": "IE"}, 
    {"name": "Isle of Man", "code": "IM"}, 
    {"name": "Israel", "code": "IL"}, 
    {"name": "Italy", "code": "IT"}, 
    {"name": "Jamaica", "code": "JM"}, 
    {"name": "Japan", "code": "JP"}, 
    {"name": "Jersey", "code": "JE"}, 
    {"name": "Jordan", "code": "JO"}, 
    {"name": "Kazakhstan", "code": "KZ"}, 
    {"name": "Kenya", "code": "KE"}, 
    {"name": "Kiribati", "code": "KI"}, 
    {"name": "Korea, Democratic People\"S Republic of", "code": "KP"}, 
    {"name": "Korea, Republic of", "code": "KR"}, 
    {"name": "Kuwait", "code": "KW"}, 
    {"name": "Kyrgyzstan", "code": "KG"}, 
    {"name": "Lao People\"S Democratic Republic", "code": "LA"}, 
    {"name": "Latvia", "code": "LV"}, 
    {"name": "Lebanon", "code": "LB"}, 
    {"name": "Lesotho", "code": "LS"}, 
    {"name": "Liberia", "code": "LR"}, 
    {"name": "Libyan Arab Jamahiriya", "code": "LY"}, 
    {"name": "Liechtenstein", "code": "LI"}, 
    {"name": "Lithuania", "code": "LT"}, 
    {"name": "Luxembourg", "code": "LU"}, 
    {"name": "Macao", "code": "MO"}, 
    {"name": "Macedonia, The Former Yugoslav Republic of", "code": "MK"}, 
    {"name": "Madagascar", "code": "MG"}, 
    {"name": "Malawi", "code": "MW"}, 
    {"name": "Malaysia", "code": "MY"}, 
    {"name": "Maldives", "code": "MV"}, 
    {"name": "Mali", "code": "ML"}, 
    {"name": "Malta", "code": "MT"}, 
    {"name": "Marshall Islands", "code": "MH"}, 
    {"name": "Martinique", "code": "MQ"}, 
    {"name": "Mauritania", "code": "MR"}, 
    {"name": "Mauritius", "code": "MU"}, 
    {"name": "Mayotte", "code": "YT"}, 
    {"name": "Mexico", "code": "MX"}, 
    {"name": "Micronesia, Federated States of", "code": "FM"}, 
    {"name": "Moldova, Republic of", "code": "MD"}, 
    {"name": "Monaco", "code": "MC"}, 
    {"name": "Mongolia", "code": "MN"}, 
    {"name": "Montenegro", "code": "ME"},
    {"name": "Montserrat", "code": "MS"},
    {"name": "Morocco", "code": "MA"}, 
    {"name": "Mozambique", "code": "MZ"}, 
    {"name": "Myanmar", "code": "MM"}, 
    {"name": "Namibia", "code": "NA"}, 
    {"name": "Nauru", "code": "NR"}, 
    {"name": "Nepal", "code": "NP"}, 
    {"name": "Netherlands", "code": "NL"}, 
    {"name": "Netherlands Antilles", "code": "AN"}, 
    {"name": "New Caledonia", "code": "NC"}, 
    {"name": "New Zealand", "code": "NZ"}, 
    {"name": "Nicaragua", "code": "NI"}, 
    {"name": "Niger", "code": "NE"}, 
    {"name": "Nigeria", "code": "NG"}, 
    {"name": "Niue", "code": "NU"}, 
    {"name": "Norfolk Island", "code": "NF"}, 
    {"name": "Northern Mariana Islands", "code": "MP"}, 
    {"name": "Norway", "code": "NO"}, 
    {"name": "Oman", "code": "OM"}, 
    {"name": "Pakistan", "code": "PK"}, 
    {"name": "Palau", "code": "PW"}, 
    {"name": "Palestinian Territory, Occupied", "code": "PS"}, 
    {"name": "Panama", "code": "PA"}, 
    {"name": "Papua New Guinea", "code": "PG"}, 
    {"name": "Paraguay", "code": "PY"}, 
    {"name": "Peru", "code": "PE"}, 
    {"name": "Philippines", "code": "PH"}, 
    {"name": "Pitcairn", "code": "PN"}, 
    {"name": "Poland", "code": "PL"}, 
    {"name": "Portugal", "code": "PT"}, 
    {"name": "Puerto Rico", "code": "PR"}, 
    {"name": "Qatar", "code": "QA"}, 
    {"name": "Reunion", "code": "RE"}, 
    {"name": "Romania", "code": "RO"}, 
    {"name": "Russian Federation", "code": "RU"}, 
    {"name": "RWANDA", "code": "RW"}, 
    {"name": "Saint Helena", "code": "SH"}, 
    {"name": "Saint Kitts and Nevis", "code": "KN"}, 
    {"name": "Saint Lucia", "code": "LC"}, 
    {"name": "Saint Pierre and Miquelon", "code": "PM"}, 
    {"name": "Saint Vincent and the Grenadines", "code": "VC"}, 
    {"name": "Samoa", "code": "WS"}, 
    {"name": "San Marino", "code": "SM"}, 
    {"name": "Sao Tome and Principe", "code": "ST"}, 
    {"name": "Saudi Arabia", "code": "SA"}, 
    {"name": "Senegal", "code": "SN"}, 
    {"name": "Serbia", "code": "RS"}, 
    {"name": "Seychelles", "code": "SC"}, 
    {"name": "Sierra Leone", "code": "SL"}, 
    {"name": "Singapore", "code": "SG"}, 
    {"name": "Slovakia", "code": "SK"}, 
    {"name": "Slovenia", "code": "SI"}, 
    {"name": "Solomon Islands", "code": "SB"}, 
    {"name": "Somalia", "code": "SO"}, 
    {"name": "South Africa", "code": "ZA"}, 
    {"name": "South Georgia and the South Sandwich Islands", "code": "GS"}, 
    {"name": "Spain", "code": "ES"}, 
    {"name": "Sri Lanka", "code": "LK"}, 
    {"name": "Sudan", "code": "SD"}, 
    {"name": "Suriname", "code": "SR"}, 
    {"name": "Svalbard and Jan Mayen", "code": "SJ"}, 
    {"name": "Swaziland", "code": "SZ"}, 
    {"name": "Sweden", "code": "SE"}, 
    {"name": "Switzerland", "code": "CH"}, 
    {"name": "Syrian Arab Republic", "code": "SY"}, 
    {"name": "Taiwan, Province of China", "code": "TW"}, 
    {"name": "Tajikistan", "code": "TJ"}, 
    {"name": "Tanzania, United Republic of", "code": "TZ"}, 
    {"name": "Thailand", "code": "TH"}, 
    {"name": "Timor-Leste", "code": "TL"}, 
    {"name": "Togo", "code": "TG"}, 
    {"name": "Tokelau", "code": "TK"}, 
    {"name": "Tonga", "code": "TO"}, 
    {"name": "Trinidad and Tobago", "code": "TT"}, 
    {"name": "Tunisia", "code": "TN"}, 
    {"name": "Turkey", "code": "TR"}, 
    {"name": "Turkmenistan", "code": "TM"}, 
    {"name": "Turks and Caicos Islands", "code": "TC"}, 
    {"name": "Tuvalu", "code": "TV"}, 
    {"name": "Uganda", "code": "UG"}, 
    {"name": "Ukraine", "code": "UA"}, 
    {"name": "United Arab Emirates", "code": "AE"}, 
    {"name": "United Kingdom", "code": "GB"}, 
    {"name": "United States", "code": "US"}, 
    {"name": "United States Minor Outlying Islands", "code": "UM"}, 
    {"name": "Uruguay", "code": "UY"}, 
    {"name": "Uzbekistan", "code": "UZ"}, 
    {"name": "Vanuatu", "code": "VU"}, 
    {"name": "Venezuela", "code": "VE"}, 
    {"name": "Viet Nam", "code": "VN"}, 
    {"name": "Virgin Islands, British", "code": "VG"}, 
    {"name": "Virgin Islands, U.S.", "code": "VI"}, 
    {"name": "Wallis and Futuna", "code": "WF"}, 
    {"name": "Western Sahara", "code": "EH"}, 
    {"name": "Yemen", "code": "YE"}, 
    {"name": "Zambia", "code": "ZM"}, 
    {"name": "Zimbabwe", "code": "ZW"} 
    ]

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
      secondaryMembers : new HashMap(),
      isFamily : false,
      type : this.props.type,
      price : 0,
      stateList : [] 
    };

    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleZip = this.handleZip.bind(this);
    this.handleCountry = this.handleCountry.bind(this);
    this.appendData = this.appendData.bind(this);
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

  handleSecondaryMembers(event,num) {
    this.max = Math.max(this.max,this.displayData.length)
    this.state.secondaryMembers.set(num, event.target.value)
    this.setState({secondaryMembers: this.state.secondaryMembers});
  }

  handleRemoveSecondaryMembers(event,num) {
    this.displayData.splice(num-2,1)
    this.state.secondaryMembers.delete(num)
    this.setState({secondaryMembers: this.state.secondaryMembers});
  }

  appendData(num) {
    this.displayData.push(
      <FormGroup key={`Secondary Member ${num}`}>
        <Label for={`Secondary Member ${num}`}>Secondary Member <b>{num}</b> Name</Label>
        {/* <Button onClick={(evt) => this.handleRemoveSecondaryMembers(evt,num)}>Remove</Button> */}
        <Input type="text" name="text" id="exampleText" placeholder={`Member ${num} Name`} maxLength={50} onChange={(evt) => this.handleSecondaryMembers(evt,num)}/>
      </FormGroup>
    );
    this.setState({
       showdata : this.displayData,
       postVal : ""
    });
    this.max = this.max + 1;
 }

  async componentWillMount(){
    let stateList = await axios.get(`${env.sever}/php/public/util/getStates.php`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error)
      return [];
    })
    this.setState({stateList})
  }

  componentDidMount(){
    this.setState({
      state : 'TX',
      country : 'US',
      isFamily : this.props.type === "Family"
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
    if(this.props.type === "Family"){
      this.appendData(2)
    }


  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
    axios.post('https://www.ionbahamas.org/php/ionNode/index.php', this.state)
    .then(x => {
      alert("Thank you for Signing up to become an Ion Member.\nPlease be on the look out for a confirmation Email from Our Automated System.")
      window.location.replace("https://www.ionbahamas.org")         
    })
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
                <Input type="email" name="email" id="exampleEmail" placeholder="Email" required={true} maxLength={100}  onChange={this.handleEmail}/>
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
                    {countryList.map(country => <option key={country.name}>{country.code}</option>)}
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                {this.displayData}
              </Col>
            </Row>
          </Container>
          <Container fluid={true}>
            <Row>
              <Col xs={12} sm={12} md={12} lg={8}>
                {(this.state.isFamily) ? <Button color="secondary" onClick={() => this.appendData(this.max + 2)}>Add Secondary Member</Button> : null}
              </Col>
              <Col sm={12} md={12} lg={2}>
                <Button style={{width : "100%"}} color="primary">Submit</Button>
              </Col>
              <Col sm={12} md={12} lg={2}>
                <Button style={{width : "100%"}} color="danger" onClick={(event) => {
                  event.preventDefault();
                  window.location.replace("https://www.ionbahamas.org")
                }}>Cancel</Button>
              </Col>
            </Row>
          </Container>
        </Form>
      </div>)
  }
}