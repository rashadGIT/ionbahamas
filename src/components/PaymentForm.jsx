import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
require('dotenv').config()

const styles = {
  name: {
  },
  leftCenter: {
    float: "left",
    textAlign: "center"
  },
  blockRight: {
    display: "block",
    float: "right"
  },
  center: {
    textAlign: "center"
  },
  textbox : {
    border: '1px solid #ced4da',
    borderRadius: '.25rem'
  },
  button :{
    color : 'white',
    width : '100%',
    padding : '16px',
    backgroundColor: '#0069d9',
    margin: '0.375rem',
    textTransform: 'uppercase',
    cursor: 'pointer',
    border: 0,
    borderRadius: '0.125rem'
  }
};

export default class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardBrand: "",
      nonce: undefined,
      googlePay: false,
      applePay: false,
      masterpass: false,
      price : 0
    };
    this.requestCardNonce = this.requestCardNonce.bind(this);
  }

  requestCardNonce() {
    this.paymentForm.requestCardNonce();
  }

  componentDidMount() {
    const config = {
      applicationId: "sandbox-sq0idb-4BIn2NFF6UL8jHgLxzah4g",
      //locationId: "GMT96A77XABR1",
      inputClass: "sq-input",
      autoBuild: false,
      inputStyles: [
        {
          fontSize: "16px",
          fontFamily: "Helvetica Neue",
          padding: "16px",
          color: "#373F4A",
          backgroundColor: "transparent",
          lineHeight: "1.15em",
          placeholderColor: "#000",
          _webkitFontSmoothing: "antialiased",
          _mozOsxFontSmoothing: "grayscale"
        }
      ],
      applePay: {
        elementId: "sq-apple-pay"
      },
      masterpass: {
        elementId: "sq-masterpass"
      },
      googlePay: {
        elementId: "sq-google-pay"
      },
      cardNumber: {
        elementId: "sq-card-number",
        // placeholder: "• • • •  • • • •  • • • •  • • • •"
        placeholder: "Card Number"
      },
      cvv: {
        elementId: "sq-cvv",
        placeholder: "CVV"
      },
      expirationDate: {
        elementId: "sq-expiration-date",
        placeholder: "MM/YY"
      },
      postalCode: {
        elementId: "sq-postal-code",
        placeholder: "Zip"
      },
      callbacks: {
        methodsSupported: methods => {
          if (methods.googlePay) {
            this.setState({
              googlePay: methods.googlePay
            });
          }
          if (methods.applePay) {
            this.setState({
              applePay: methods.applePay
            });
          }
          if (methods.masterpass) {
            this.setState({
              masterpass: methods.masterpass
            });
          }
          return;
        },
        createPaymentRequest: () => {
          return {
            requestShippingAddress: false,
            requestBillingInfo: true,
            currencyCode: "USD",
            countryCode: "US",
            total: {
              label: "MERCHANT NAME",
              amount: "100",
              pending: false
            },
            lineItems: [
              {
                label: "Subtotal",
                amount: "100",
                pending: false
              }
            ]
          };
        },
        cardNonceResponseReceived: (errors, nonce, cardData) => {
          if (errors) {
            // Log errors from nonce generation to the Javascript console
            console.log("Encountered errors:");
            errors.forEach(function(error) {
              console.log("  " + error.message);
            });

            return;
          }
          this.setState({
            nonce: nonce
          });

          fetch('/payment/process-payment', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              nonce: nonce,
              amount: this.props.price
            })
          })
          .catch(err => {
            alert('Network error: ' + err);
          })
          .then(response => {
            if (!response.ok) {
              return response.text().then(errorInfo => Promise.reject(errorInfo));
            }
            return response.text();
          })
          .then(data => {
            console.log(JSON.stringify(data));
            alert('Payment complete successfully!\nCheck browser developer console for more details');
          })
          .catch(err => {
            console.error(err);
            alert('Payment failed to complete!\nCheck browser developer console for more details');
          });
        },
        unsupportedBrowserDetected: () => {},
        inputEventReceived: inputEvent => {
          switch (inputEvent.eventType) {
            case "focusClassAdded":
              break;
            case "focusClassRemoved":
              break;
            case "errorClassAdded":
              document.getElementById("error").innerHTML =
                "Please fix card information errors before continuing.";
              break;
            case "errorClassRemoved":
              document.getElementById("error").style.display = "none";
              break;
            case "cardBrandChanged":
              if (inputEvent.cardBrand !== "unknown") {
                this.setState({
                  cardBrand: inputEvent.cardBrand
                });
              } else {
                this.setState({
                  cardBrand: ""
                });
              }
              break;
            case "postalCodeChanged":
              break;
            default:
              break;
          }
        },
        paymentFormLoaded: function() {
          document.getElementById("name").style.display = "inline-flex";
        }
      }
    };
    this.paymentForm = new this.props.paymentForm(config);
    this.paymentForm.build();
  }

  render() {
    return (
      <div className="container">
        <div id="form-container">
          <div id="sq-walletbox">
            <button
              style={{ display: this.state.applePay ? "inherit" : "none" }}
              className="wallet-button"
              id="sq-apple-pay"
            />
            <button
              style={{ display: this.state.masterpass ? "block" : "none" }}
              className="wallet-button"
              id="sq-masterpass"
            />
            <button
              style={{ display: this.state.googlePay ? "inherit" : "none" }}
              className="wallet-button"
              id="sq-google-pay"
            />
            <hr />
          </div>

          <div id="sq-ccbox">
            <Input
              id="name"
              style={styles.textbox}
              type="text"
              placeholder="Full Name"
            />
            <br />
            <br />
            <p>
              {/* <span style={styles.leftCenter}>Enter Card Info Below </span> */}
              <span style={styles.blockRight}>
                {this.state.cardBrand.toUpperCase()}
              </span>
            </p>
            <br />
            <div id="cc-field-wrapper">
              <div style={styles.textbox}>
                <div id="sq-card-number" />
              </div>
              <input type="hidden" id="card-nonce" name="nonce" />
              <br />
              <div style={{display : 'flex'}}>
                <div style={{paddingRight : '10px'}}>
                  <div style={styles.textbox}>
                    <div id="sq-expiration-date" />
                  </div>
                </div>
                <br />
                <div style={{paddingLeft : '10px'}}>
                  <div style={styles.textbox}>
                    <div id="sq-cvv" />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div style={styles.textbox}>
              <div id="sq-postal-code" />
            </div>
          </div>
          <br />
          {/* <Button 
            style={{width : "100%"}} 
            color="primary" 
            className="button-credit-card"
            onClick={this.requestCardNonce} >
              Pay ${this.props.price}
          </Button> */}
          <button
            style={styles.button}
            className="button-credit-card"
            onClick={this.requestCardNonce}
          >
            Pay ${this.props.price}
          </button>
        </div>
        <p style={styles.center} id="error" />
      </div>
    );
  }
}
