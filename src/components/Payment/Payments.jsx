// import React,{ useEffect, useState } from 'react';
// import '../../css/mysqpaymentform.css'
// import { delay } from '../../module/util'
// import Modal from 'react-modal';
// import { popupBox, defaultIcon } from '../../css/style.css.js'
// import { buildPayments } from './payment-action'
// import { useHistory } from "react-router-dom";
// import { moneyFormat } from '../../module/util'

// export default function Payments (props) {
//   const processingMsg = "Please Wait..."
//   const defaultTitle = "Payment Summary"
//   const [title, setTitle] = useState(defaultTitle);
//   const [message, setMessage] = useState(processingMsg);
//   const [icon, setIcon] = useState({symbol : "fa fa-cog fa-spin", style : defaultIcon})
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [isOpenAnimation, setIsOpenAnimation] = useState(false);
//   const [formData, setFormData] = useState(props.formData);
//   const [isOpen, setIsOpen] = useState(props.isOpen ? props.isOpen : false);
//   const [btnText, setBtnText] = useState(null)
//   const [response, setResponse] = useState({})
//   const dispatch = useDispatch();
//   const history = useHistory();

//   useEffect(()=> {
//     setBtnText(props.btnText !== undefined ? props.btnText : "Submit")
//   })

//   useEffect(async () => {
//     if(response.isError === true){
//       setTitle(response.title)
//       setIcon(response.icon)
//       setMessage(response.message)
//       setIsProcessing(false)
//     }else if(response.isError === false){
//       setTitle("Success")
//       setIcon(response.icon)
//       setMessage(response.message)
//       await delay(5000);
//       setMessage("Confirmation email sent to\\n" + formData.email)
//       await delay(5000)
//       history.push((response.goTo) ? response.goTo : "/");
//     }
//   },[response])

//   useEffect(() => {
//     Modal.setAppElement('body');
//     setFormData(props.formData)
//     dispatch(buildPayments(props.cardNonceResponseReceived,formData,setResponse))
//   },[isOpen, props.formData])

//   async function onGetCardNonce(event){
//     event.preventDefault();
//     setTitle("Processing...")
//     setIsProcessing(true)
//     setMessage(processingMsg)
//     setIcon({symbol : "fa fa-cog fa-spin", style : defaultIcon})
//     setIsOpenAnimation(true)
//     SqPaymentForm.requestCardNonce();
//   }

//   return (
//       <div>
//         <button 
//           id="sq-creditcard"
//           className="button-credit-card"
//           onClick={async (event) => { 
//             let [ errs, errMessage ] = await props.validator(event, formData)
//             if(errs.length > 0){
//               props.setInputError(errs)
//               if(errMessage.length > 0 )alert(errMessage)
//               return;
//             }
//             setIsOpen(true) 
//             return;
//           }}>
//             {btnText}
//         </button>
//         <Modal
//           isOpen={isOpen}
//           onAfterOpen={() => SqPaymentForm.build()}
//           style={popupBox}
//           contentLabel="Example Modal"
//         >
//           <h4>{title}</h4>
//           {
//             isOpenAnimation && 
//             <center>
//               <i style={icon.style} className={icon.symbol} /><br />
//               <b>{message.split("\\n").map((x,i) => <span key={`Reason ${i}`}>{x}<br/></span>)}</b>
//             </center>
//           }

//           <hr />
//           <div id="sq-card"></div>

//           <div style={{display : isProcessing ? 'none' : null}} >
//             <button
//               id="sq-creditcard" 
//               className="button-credit-card" 
//               onClick={onGetCardNonce}>
//                 Complete {moneyFormat(formData.amount)} Payment
//             </button>
//             <button
//               className="button-credit-card-cancel"
//               color="danger" 
//               onClick={() => {
//                 setTitle(defaultTitle)
//                 setIsOpenAnimation(false)
//                 setResponse({})
//                 SqPaymentForm.destroy()
//                 setIsOpen(false)
//                 }}>
//                 Go Back
//             </button>
//           </div>
//         </Modal>
//       </div>
//     )
// }
