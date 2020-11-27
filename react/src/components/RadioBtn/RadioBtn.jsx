import React from 'react';
import Col from 'react-bootstrap/Col';
import { FormGroup, Label, Input } from 'reactstrap';
import { radioBtn, radioBtnButton, radioBtnButtonSelected } from '../../css/input.css'
import { moneyFormat } from '../../module/util'
import './RadioBtn.css'

export default function RadioButton (val, amount) {
    return  (
        <Col xs={6} md={4} lg={4} key={val}>
            <FormGroup check>
                <Label check>
                <Input 
                    type="radio" 
                    name="radioBtn" 
                    value={val}
                    key={val}
                    style={radioBtn}
                />
                <span style={(val === parseInt(amount)) ? radioBtnButtonSelected : radioBtnButton}>{ !isNaN(val) ? `${moneyFormat(val)}` : val }</span>
                </Label>
            </FormGroup>
        </Col>)
}