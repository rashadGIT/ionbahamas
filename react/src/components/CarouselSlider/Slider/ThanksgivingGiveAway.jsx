import React, { useEffect, useState } from 'react';

export default function ThanksgivingGiveAway(){
    return(<div key={"Thanksgiving"}>
    <div className="carouselTextContainerThanksgiving">
      <div className="auctionTextDescriptionThanksgiving">
        <h1 className="auctionTextTitleThanksgiving">
          <center><i>Thanksgiving Gift Card <br />Giveaway</i></center>
        </h1>
        <center>
          <b>ION Bahamas is giving away thanksgiving gift cards to 5 families!</b>
          <p>
            Gift Card Drawing : <b>FRIDAY NOVEMBER 13TH</b>
          </p>
          <div>Application closes :  <b>Thursday NOVEMBER 12TH at midnight</b></div>
        </center>
        <center>
          {/* <Button 
            onClick={(event) => window.open("https://docs.google.com/forms/d/e/1FAIpQLScxDh1Y8zt2kvsifeNKt82sNhN-lETK1NQ8RbCprdSVRHb1qg/viewform?usp=sf_link")}
            outline={false} 
            style={{color: 'black'}} 
            size="lg" 
            color="warning">
              Application Today!
          </Button> */}
        </center>
      </div>
    </div>
  </div>);
}