import React from 'react';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router';
import {BrowserRouter as Router, Link as RRNavLink } from "react-router-dom";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {
  UserCard,
  ProductCard,
  TaggedContentCard,
  FlippingCard,
  FlippingCardFront,
  FlippingCardBack,
  RecipeCard,
  NewsHeaderCard,
  CryptoCard,
  PaymentCard,
  DropdownCard
} from 'react-ui-cards'

export default (props) => 
    <div className="grow" style={{marginTop : '15px', minWidth : "300px", width : '25%', padding : '15px'}}>
      <Card 
        style={{minWidth : "300px", color:'inherit', textDecoration: 'none'}}
        tag={RRNavLink}
        to={`/donate/${props.type}`}
      >
        <CardImg top width="100%" height="200px" src={props.img} alt="Card image cap" />
        <CardBody style={{backgroundColor : '#eeeeee'}}>
          <CardTitle><b>{props.title}</b></CardTitle>
          <CardSubtitle>
            <i>{`${props.subTitle}`}</i>
          </CardSubtitle>
          <br />
            <CardText>{props.description}</CardText>
            {/* <center>
                <Button 
                    color="danger"
                    tag={RRNavLink}
                    to={`/donate/${props.type}`}
                    >Donate !!
                </Button>
            </center> */}
        </CardBody>
      </Card>
    </div>