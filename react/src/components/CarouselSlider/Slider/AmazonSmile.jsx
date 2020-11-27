import React, { useEffect, useState } from 'react';
const smileLink = "https://smile.amazon.com/ch/84-2453440";

export default function AmazonSmile(props){
    return(<div key={"Smile"}>
    {/* <img alt="" src="https://sierrapto.org/cms/wp-content/uploads/2015/08/Amazon-smiles-2.png" /> */}
    <a href={smileLink} target="_blank" rel="noopener noreferrer" >
      <div className="text">
        <div className="support-wrapper">
          <div className="support" style={{fontSize: '40px', lineHeight: '1.6',marginTop: '3px', marginBottom: '1.5px'}}>
            Support <br />
            Igniting Our Nation Bahamas
          </div>
        </div>
        <br />
        <br/>
        <p className="when-shop">When you shop at <b>smile.amazon.com,</b></p>
        <p className="donates">Amazon donates.</p>
      </div>
    </a>
  </div>)
}