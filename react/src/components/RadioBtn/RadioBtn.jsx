import React from 'react';
import Col from 'react-bootstrap/Col';
import { FormGroup, Label, Input } from 'reactstrap';
import { textBox } from '../../module/textBox'
import { moneyFormat } from '../../module/util'

export default function RadioButton (val) {
    return  (
        <Col xs={3} md={3} lg={3} key={val}>
            <FormGroup check>
                <Label check>
                    <Input 
                        type="radio" 
                        name="radio1" 
                        value={val}
                        key={val}
                        style={textBox.radioBtn}
                        />
                        {' '}
                    <span style={textBox.radioBtnTitle}>{ !isNaN(val) ? `${moneyFormat(val)}` : val }</span>
                </Label>
            </FormGroup>
        </Col>)
}