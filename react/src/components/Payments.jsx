import React,{ Component, useEffect, useState, useLayoutEffect } from 'react';
import '../css/mysqpaymentform.css'
import { useSquare } from '../hooks/square';
import { delay } from '../module/util'
import { environment as env } from '../env/env.js';
import { Button, Form, FormGroup, Label, Input, FormText, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux'
import { popupBox, defaultIcon, failIcon } from '../css/style.css.js'
import { buildPayments } from '../action/action'
import { membershipCardNonceResponseReceived } from '../module/square';

export default function Payments (props) {
  const processingMsg = "Please Wait..."
  const [title, setTitle] = useState("Payment Summary");
  const [message, setMessage] = useState(processingMsg);
  const [icon, setIcon] = useState({symbol : "fa fa-cog fa-spin", style : defaultIcon})
  const [isProcessing, setIsProcessing] = useState(false);
  const [id, setID] = useState(props.formData.id);
  const counter = useSelector(state => state.counter)
  const SqPaymentForm = useSelector(state => state.paymentProcessor)
  const [response, setResponse] = useState({})
  const dispatch = useDispatch();
  

  useEffect(async () => {
    if(isProcessing){
      setMessage(processingMsg)
      setIcon({symbol : "fa fa-cog fa-spin", style : defaultIcon})
      await delay(5000) 
    }
    
    if(!response.isError) {
      // setIsProcessing(response.isError)
    } else {
      
      setIcon({symbol : "fa fa-times", style : failIcon})
      setMessage(response.message)
    }

    await delay(5000)
    setIsProcessing(response.isError)
    console.log(response)
  },[response])

  useEffect(() => {
    Modal.setAppElement('body');
    dispatch(buildPayments(props.cardNonceResponseReceived,props.formData,setResponse))
  },[props.isOpen])

  async function onGetCardNonce(event){
    event.preventDefault();
    setIsProcessing(true)
    SqPaymentForm.requestCardNonce();
  }

  return (
      <Modal
        isOpen={props.isOpen}
        // isOpen={true}
        onAfterOpen={() => SqPaymentForm.build()}
        style={popupBox}
        contentLabel="Example Modal"
      >
        <h4>{title}</h4>
        <h5>powered by Square{counter}</h5>
        {
          isProcessing && 
          <center>
            <i style={icon.style} className={icon.symbol} /><br />
            <b>{message.split("\\n").map(x => <span>{x}<br/></span>)}</b>
          </center>
        }
        {/* {response && <div>{response}</div>} */}
        {/* <div>{message.split("\\n").map(x => <span>{x}<br/></span>)}</div> */}
      
        {/* <div id="form-container"></div>     */}
        {/* {console.log(response)} */}
        <hr />
        <div id="sq-card"></div>

        <button 
          id="sq-creditcard" 
          className="button-credit-card" 
          onClick={onGetCardNonce}>
            Pay ${props.formData.amount}
        </button>
        <button 
          className="button-credit-card-cancel"
          color="danger" 
          onClick={() => {
            setIsProcessing(false)
            setResponse({})
            SqPaymentForm.destroy()
            props.setIsOpen(false)
            }}>
            Cancel
        </button> 
      </Modal>
    )
}
