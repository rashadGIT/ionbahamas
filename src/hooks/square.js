import React, { useEffect, useState } from 'react';
import { failIcon } from '../css/style.css.js'
import { square } from '../env/square'

const useSquare = ({ResponseReceived,formData}) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false); 
    
    const [isProcessing,setIsProcessing] = useState(false);
    const [data, setData] = useState({});
    
    const [card, setCard] = useState({});
    const [title, setTitle] = useState("")
    const [message, setMessage] = useState("")
    const [icon, setIcon] = useState("")
    const [isLoaded, setIsLoaded] = useState(false);
    
    const [isError, setIsError] = useState(false);
    const [cardErrors, setCardErrors] = useState([]);
    const [userErrors, setUserErrors] = useState([]);

    // let elem = document.getElementById('sq-card');
    // console.log(elem===null)

    // eslint-disable-next-line no-undef
    // let paymentForm = (elem===null) ? null : new SqPaymentForm({
    //         applicationId: square.applicationId,
    //         autoBuild: square.autoBuild,
    //         card : square.card,
    //         //inputClass: square.inputClass,
    //         //inputStyles: square.inputStyles,
    //         //cardNumber: square.cardNumber,
    //         //cvv: square.cvv,
    //         //expirationDate: square.expirationDate,
    //         //postalCode: square.postalCode,
    //         callbacks: { 
    //             paymentFormLoaded : () => {setIsLoaded(true)},
    //             cardNonceResponseReceived: async (errors, nonce, cardData) => {
    //                 console.log(errors)
    //                 if(errors){
    //                     setIsError(true)
    //                     setCardErrors(errors)
    //                     setIsProcessing(false)
    //                     setTitle("Invalid Card")
    //                     setMessage(errors.map(e => e.message).join("\\n"));
    //                     setData({errors})
    //                     setIcon({symbol : "fa fa-times", style : failIcon})
    //                     return;
    //                 }
    //                 let [response, responseErrors ]= await ResponseReceived(errors, nonce, cardData,formData)
    //                 console.log(response);
    //                 setUserErrors(responseErrors)
    //                 setError(responseErrors)
    //                 setData(response.data);
    //                 setResponse(response.data)
    //                 setIsError(response.isError);
    //                 setCard(response.cardInfo);
    //                 setIsProcessing(response.isProcessing)
    //                 setTitle(response.title)
    //                 setMessage(response.message)
    //                 setIcon(response.icon)
    //                 setIsLoading(false);
    //             }
    //         }
    //     })
        // let elem = document.getElementById('sq-card');
        // console.log(paymentForm)
        // console.log(isLoaded)
        // console.log(elem)
        //if(elem !== null) 
        // if(!isLoaded && elem !== null) 
        // paymentForm.destroy();
        // if(elem !== null) 
        // if(paymentForm)paymentForm.build();
    return []
    // return [{ response, error, isLoading, paymentForm, isLoaded, isProcessing, cardErrors}];
    // return [{data, isLoaded, isProcessing, card, isError, cardErrors, title, icon, message, paymentForm},userErrors]
}

export {
    useSquare
}