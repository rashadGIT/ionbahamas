import React from 'react';
import '../css/style.css';

class Popup extends React.Component {
    setIcon(num){
        let icon = "fa fa-cog fa-spin";
        switch(num) {
            case "success":
              icon =  "fa fa-check"
              break;
            case "fail":
              icon = "fa fa-times"
              break;
            default:
          }
        return icon;
    }
    render() {
        let num = this.props.countDown;
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <div className='MessageBox'>
                        <div>
                            <i className={this.setIcon(this.props.paymentReceived)} />
                            Payment Received
                        </div>
                        <div>
                            <i className={this.setIcon(this.props.recordInserted)} />
                            Record(s) Stores
                        </div>
                        <div>
                            <i className={this.setIcon(this.props.welcomeEmailSent)} />
                            Email Sent
                        </div>
                        {this.props.startCountDown &&
                          <div>
                            <br />
                            <p><i className="far fa-smile"/> You all set!!</p>
                            <p>Redirecting to homepage in {this.props.countDown}</p>
                          </div>
                        }
                         {/*<button onClick={this.props.closePopup}>close me</button>*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup;
