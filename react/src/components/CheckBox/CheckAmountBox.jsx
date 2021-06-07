import React, { useEffect, useState }  from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FormGroup, Label, Input } from 'reactstrap';
import { radioBtn, radioBtnButton, radioBtnButtonSelected } from '../../css/input.css'
import { moneyFormat } from '../../module/util'
import { checkBox, checkBoxLabel, title,  } from '../../css/input.css'

export default function CheckAmountBox (val, amount, addGuestPrice) {
    const [isAttending, setIsAttending] = useState(false);
    const [currentAmount, setCurrentAmount] = useState(amount);
    
    return  (
        <Col xs={12} md={12} lg={12} key={val.type}>
            <Row>
                <FormGroup check>
                    {/* <Label check> */}
                        {/* <Input 
                        type="checkbox" 
                        style={checkBox}  
                        checked={isAttending} 
                        onChange={() => {
                            setIsAttending(!isAttending)
                            if(currentAmount < 1){ 
                                setCurrentAmount(1)
                                addGuestPrice({[val.type] : 1})
                            }
                            if(isAttending === false && currentAmount > 0) { 
                                setCurrentAmount(0) 
                                addGuestPrice({[val.type] : 0})
                            }
                        }}/>{' '} */}
                        <span style={checkBoxLabel}>{val.type} - {moneyFormat(val.price)}</span>
                    {/* </Label> */}
                </FormGroup>
                <Input 
                    //   style={inputErr.includes("lName") ? error : {}}
                      type="number" 
                      name="lName" 
                      id="lName"
                      maxLength="20"
                      onChange={(event)=> {
                          if(event.target.value > 0) {
                                setIsAttending(true)
                                setCurrentAmount(event.target.value)
                                addGuestPrice({[val.type] : (val.price * event.target.value)})
                            }
                          else {
                                setIsAttending(false)
                                setCurrentAmount(0)
                                addGuestPrice({[val.type] : 0})
                            }
                        }} value={currentAmount}
                    />
                {/* <FormGroup check>
                    <Label check>
                        <Input 
                            type="radio" 
                            name="radioBtn" 
                            value={val.price}
                            key={val.type}
                            style={radioBtn}
                        />
                        <span style={(moneyFormat(val.price) === moneyFormat(amount)) ? radioBtnButtonSelected : radioBtnButton}>{ !isNaN(val.price) ? `${moneyFormat(val.price)}` : val.price }</span>
                    </Label>
                </FormGroup> */}
            </Row>
        </Col>)
}