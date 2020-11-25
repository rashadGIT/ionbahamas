import axios from 'axios';
import { environment as env } from '../env/env.js';
import { failIcon, successIcon } from '../css/style.css.js'

const membershipCardNonceResponseReceived = async (errors, nonce, cardData, formData) => {
    
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
    if (insert.status === 411){
        const regex = /'/gi;
        let result = insert.result
        result = result.replace(regex, '');
        let messageArray = result.split(' ');
        let dup = messageArray[0];
        let val = messageArray[2];
        let field = messageArray[messageArray.length - 1].split("_")[0];
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
    }else if (insert.status === 500){
      return {
        data : insert,
        status : insert.status,
        isError : true,
        icon : {symbol : "fa fa-times", style : failIcon},
        title : insert.title,
        message : `Opps, an error has occurred!!!`,
        cardInfo : cardData,
        isProcessing : false
      }
    }
    return {
      data : insert,
      cardData,
      message : "Thank you\\nWelcome to ION Bahamas",
      icon : {symbol : "fa fa-check", style : successIcon},
      isProcessing : false,
      isError : false,
      goTo : "/"
    };
}

const donationCardNonceResponseReceived = async (errors, nonce, cardData, formData) => {

  let submit = await axios.post(`${env.proxy}/payment/donate`,
  {
    amount : formData.amount,
    nonce : nonce,
    donation : formData.donation,
    fName : formData.fName,
    lName : formData.lName,
    email : formData.email,
    isAnonymous : formData.isAnonymous
  },
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(x => x.data)
  .catch(err => {
    return {
      'status' : err.response.status,
      'title': 'Payment Failure',
      'result': err.response.data.message
    };
  });

  if(submit.payment && submit.payment.status !== 200){
    return {
      data : submit,
      status : submit.status,
      isError : true,
      icon : {symbol : "fa fa-times", style : failIcon},
      title : submit.title,
      message : `Opps, an error has occurred!!!`,
      cardInfo : cardData,
      isProcessing : false
    }
  }

  return {
    data : submit,
    status : submit.status,
    isError : false,
    icon : {symbol : "fa fa-check", style : successIcon},
    title : "Success",
    message : "Thank you for your generous donation",
    cardInfo : cardData,
    isProcessing : false,
    goTo : "/donations"
  }
}
export{
    membershipCardNonceResponseReceived,
    donationCardNonceResponseReceived
}