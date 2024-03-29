import React from 'react';
import '../css/style.css';
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class DonationPopUp extends React.Component {
  constructor(props){
    super(props);
    this.state={
      loading : true
    }
  }
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <div className='MessageBox'>
                        <div>
                          <center>                          
                          </center>
                          <center>
                              <h1>{this.props.message}</h1>
                          </center>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DonationPopUp;
