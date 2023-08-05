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
            case "done":
              icon = "fa fa-smile"
              break;
            default:
          }
        return icon;
    }
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <div className='MessageBox'>
                        <div>
                          <center>
                            <i className={this.setIcon(this.props.processor)} />
                          </center>
                          <p>{this.props.message}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup;
