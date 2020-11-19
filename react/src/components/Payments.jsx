import React,{ Component, useEffect, useState, useLayoutEffect } from 'react';
import '../css/mysqpaymentform.css'
import { useSquare } from '../hooks/square';
import { delay } from '../module/util'
import { environment as env } from '../env/env.js';
import { Button, Form, FormGroup, Label, Input, FormText, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux'
import { popupBox, defaultIcon, failIcon, successIcon } from '../css/style.css.js'
import { buildPayments } from '../action/action'
import { membershipCardNonceResponseReceived } from '../module/square';
import { useHistory } from "react-router-dom";

export default function Payments (props) {
  const processingMsg = "Please Wait..."
  const defaultTitle = "Payment Summary"
  const [title, setTitle] = useState(defaultTitle);
  const [message, setMessage] = useState(processingMsg);
  const [icon, setIcon] = useState({symbol : "fa fa-cog fa-spin", style : defaultIcon})
  const [isProcessing, setIsProcessing] = useState(false);
  const [isOpenAnimation, setIsOpenAnimation] = useState(false);
  const [id, setID] = useState(props.formData.id);
  const counter = useSelector(state => state.counter)
  const SqPaymentForm = useSelector(state => state.paymentProcessor)
  const [response, setResponse] = useState({})
  const dispatch = useDispatch();
  const history = useHistory();
  

  useEffect(async () => {
    if(response.isError === true){
      setTitle("Payment Failure")
      setIcon(response.icon)
      setMessage(response.message)
    }else if(response.isError === false){
      setTitle("Success")
      setIcon(response.icon)
      setMessage(response.message)
      await delay(5000);
      setMessage("Confirmation email sent to\\n" + props.formData.email)
      await delay(5000)
      history.push("/");
    }
    console.log(props)
  },[response])

  useEffect(() => {
    Modal.setAppElement('body');
    dispatch(buildPayments(props.cardNonceResponseReceived,props.formData,setResponse))
  },[props.isOpen])

  async function onGetCardNonce(event){
    event.preventDefault();
    setTitle("Processing...")
    setMessage(processingMsg)
    setIcon({symbol : "fa fa-cog fa-spin", style : defaultIcon})
    setIsOpenAnimation(true)
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
        {
          isOpenAnimation && 
          <center>
            <i style={icon.style} className={icon.symbol} /><br />
            <b>{message.split("\\n").map(x => <span>{x}<br/></span>)}</b>
          </center>
        }
        {

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
          disabled={isProcessing}
          className="button-credit-card-cancel"
          color="danger" 
          onClick={() => {
            setTitle(defaultTitle)
            setIsOpenAnimation(false)
            setResponse({})
            SqPaymentForm.destroy()
            props.setIsOpen(false)
            }}>
            Cancel
        </button> 
      </Modal>
    )
}
