import React, { useEffect, useState } from 'react';
import {Link as RRNavLink } from "react-router-dom";
import { Button } from 'reactstrap';

export default function AgricultureFund(props){
    return(
      <div className="carouselTextContainer">
          <div className="auctionTextDescription">
            <h1 className="auctionTextTitle">
              <center><i>Support Bahamian <br />Agriculture</i></center>
            </h1>
            <center>
              <b>Join Us in the fight against food <br />insecurity in the Bahamas</b>
            </center><br />
            <center>
              <RRNavLink 
                to={{
                  pathname: `/donate/Agriculture`
              }}
              
              // to="/donate/Agriculture"
              >
                <Button outline={false} style={{color: 'black'}} size="sm" color="warning">Donate</Button>
              </RRNavLink>
            </center>
          </div>
        </div>
      )
}