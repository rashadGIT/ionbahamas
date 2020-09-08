import React from 'react';
import SquareConnect from 'square-connect'
import '../css/mysqpaymentform.css'
import { it } from 'date-fns/esm/locale';

const regex = RegExp('^(\\d+.\\d{0,2})$');

export default class Donate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      paymentForm : this.props.paymentForm
    }

    this.onGetCardNonce = this.onGetCardNonce.bind(this);
  };

  componentWillMount(){
    
  }

  componentDidMount(){
     this.state.paymentForm.build();
  }

  onGetCardNonce(event){
    // Don't submit the form until SqPaymentForm returns with a nonce
    event.preventDefault();
    // Request a nonce from the SqPaymentForm object
    this.props.paymentForm.requestCardNonce();
  }

  getDollar(amount){
    if(amount.length === 0 || isNaN(amount)){
      amount = 0.00
    }
    return Number(amount).toLocaleString("US", {
      style: "currency",
      currency: "USD"
    });
  }

  render() {
      return (
          <div>
              <div id="form-container"></div>
              <div id="sq-card-number"></div>
              <div className="third" id="sq-expiration-date"></div>
              <div className="third" id="sq-cvv"></div>
              <div className="third" id="sq-postal-code"></div>
              <button id="sq-creditcard" className="button-credit-card" onClick={this.onGetCardNonce}>Pay {this.getDollar(this.props.amount)}</button>
          </div>
        )
    }
  }
