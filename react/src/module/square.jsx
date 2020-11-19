import React, { useEffect, useState, useLayoutEffect } from 'react';
import useAxios from 'axios-hooks'
import axios from 'axios';
import { environment as env } from '../env/env.js';
import { failIcon } from '../css/style.css.js'
import { useSelector, useDispatch } from 'react-redux'

const membershipCardNonceResponseReceived = async (errors, nonce, cardData, formData) => {
    let message = "";
    
    let insert = await axios.post(`${env.proxy}/members/add`,
      {
        amount : formData.amount,
        nonce : nonce,
        fName : formData.fName,
        lName : formData.lName,
        email : formData.email,
        type : formData.type,
        address : formData.address,
        city : formData.city,
        state : formData.state,
        zip : formData.zip,
        country : formData.country,
        primaryPhone : formData.primaryPhone,
        secondaryPhone : formData.secondaryPhone,
        isPrimary : true,
        membershipTypeId : formData.id,
        secondaryMembers : JSON.stringify(formData.secondaryMembers)
      },
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
    ).then(x => x.data)
    .catch(err => {
      return {
        'status' : err.response.status,
        'title': 'Payment Failure',
        'result': err.response.data.message
     };
    });
    console.log(insert)
    if (insert.status === 411){
        const regex = /'/gi;
        let result = insert.result
        result = result.replace(regex, '');
        let messageArray = result.split(' ');
        let dup = messageArray[0];
        let val = messageArray[2];
        let field = messageArray[messageArray.length -1].split("_")[0];
        return {
            data : insert,
            status : insert.status,
            isError : true,
            icon : {symbol : "fa fa-times", style : failIcon},
            title : insert.title,
            message : `${dup} ${field} : ${val} already exist.\\nPlease enter a different ${field}.`,
            cardInfo : cardData,
            isProcessing : false
        }
    }
    return {
      data : insert,
      cardData,
      message,
      icon : {symbol : "fa fa-times", style : failIcon},
      isProcessing : false,
      isError : false,
    };
}
export{
    membershipCardNonceResponseReceived
}