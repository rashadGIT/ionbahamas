import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../css/carousel.css'
import 'mysqpaymentform.css';

export default class extends Component{
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount(){
    // Create and initialize a payment form object
    const paymentForm = new SqPaymentForm({
      // Initialize the payment form elements
      
      //TODO: Replace with your sandbox application ID
      applicationId: "sandbox-sq0idb-4BIn2NFF6UL8jHgLxzah4g",
      inputClass: 'sq-input',
      autoBuild: false,
      // Customize the CSS for SqPaymentForm iframe elements
      inputStyles: [{
          fontSize: '16px',
          lineHeight: '24px',
          padding: '16px',
          placeholderColor: '#a0a0a0',
          backgroundColor: 'transparent',
      }],
      // Initialize the credit card placeholders
      cardNumber: {
          elementId: 'sq-card-number',
          placeholder: 'Card Number'
      },
      cvv: {
          elementId: 'sq-cvv',
          placeholder: 'CVV'
      },
      expirationDate: {
          elementId: 'sq-expiration-date',
          placeholder: 'MM/YY'
      },
      postalCode: {
          elementId: 'sq-postal-code',
          placeholder: 'Postal'
      },
      // SqPaymentForm callback functions
      callbacks: {
          /*
          * callback function: cardNonceResponseReceived
          * Triggered when: SqPaymentForm completes a card nonce request
          */
          cardNonceResponseReceived: function (errors, nonce, cardData) {
          if (errors) {
              // Log errors from nonce generation to the browser developer console.
              console.error('Encountered errors:');
              errors.forEach(function (error) {
                  console.error('  ' + error.message);
              });
              alert('Encountered errors, check browser developer console for more details');
              return;
          }
             alert(`The generated nonce is:\n${nonce}`);
             //TODO: Replace alert with code in step 2.1
          }
      }
    });
    
    paymentForm.build();

    //TODO: paste code from step 1.1.4
  }
       //TODO: paste code from step 1.1.5
     // onGetCardNonce is triggered when the "Pay $1.00" button is clicked
    onGetCardNonce = (event) => {
      // Don't submit the form until SqPaymentForm returns with a nonce
      event.preventDefault();
      // Request a nonce from the SqPaymentForm object
      paymentForm.requestCardNonce();
    }


  render(){
    return(
          <div>
            <div id="form-container">
              <div id="sq-card-number"></div>
              <div class="third" id="sq-expiration-date"></div>
              <div class="third" id="sq-cvv"></div>
              <div class="third" id="sq-postal-code"></div>
              <button id="sq-creditcard" class="button-credit-card" onclick="onGetCardNonce(event)">Pay $1.00</button>
            </div> 
            {/* <!-- end #form-container --> 
            <!-- TODO: Add script from step 1.1.3 --> */}
          </div>
    )
  }
}