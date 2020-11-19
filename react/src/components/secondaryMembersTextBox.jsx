import React, { useEffect, useState } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HashMap from 'hashmap';

export default function secondaryMembersTextBox(props){
  let number = props.num;
  let error = props.error;
  let setSecondaryMembers = props.setSecondaryMembers
  const [name,setName] = useState([])
  const [inputErr,setInputError] = useState(props.inputErr)
    
  useEffect(()=>{
    const [num, key,  val] = name
    if(num === undefined) return;
    let secondaryMembers = props.secondaryMembers;
    if(secondaryMembers[num]){
      secondaryMembers[num].set(key,val);
    } else {
      secondaryMembers[num] = new HashMap([key,val])
    }
    setSecondaryMembers(secondaryMembers)
  },[name])

  return (
    <Row key={`Secondary Member Row ${number}`}>
      <Col>
        <FormGroup key={`Secondary Member ${number}`}>
          <Label for={`Secondary Member ${number}`}>
            Secondary Member <b>{number}</b> Name {(number === 1) && '*'}
          </Label>
          <Container fluid={true}>
            <Row>
              <Col xs={12} md={6} lg={6}>
                <Input
                  type="text"
                  name="text"
                  id="exampleText"
                  style={inputErr.includes(`secfName${number}`) ? error : {}}
                  placeholder={`Member ${number} First Name`}
                  maxLength={20}
                  onChange={e => setName(() => [number, "lName", e.target.value])}
                />
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Input
                  type="text"
                  name="text"
                  id="exampleText"
                  style={inputErr.includes(`seclName${number}`) ? error : {}}
                  placeholder={`Member ${number} Last Name`}
                  maxLength={20}
                  onChange={e => setName(() => [number, "fName", e.target.value])}
                />
                </Col>
              </Row>
            </Container>
          </FormGroup>
        </Col>
      </Row>
    )
  }