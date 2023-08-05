// import { square } from '../../env/square'
// import { failIcon } from '../../css/style.css.js'

// const PaymentReducers = (state = {}, action) => {
//   // eslint-disable-next-line no-undef
//   return new SqPaymentForm({
//     applicationId: square.applicationId,
//     autoBuild: square.autoBuild,
//     card : square.card,
//     callbacks: {
//         paymentFormLoaded: () => {},
//         inputEventReceived: (inputEvent) => {},
//         unsupportedBrowserDetected: () => {},
//         cardNonceResponseReceived: async (errors, nonce, cardData) => {
//             if(errors){
//                 action.callback({
//                   cardData,
//                   data : {status : 411},
//                   isProcessing : false,
//                   title : "Invalid Card",
//                   message : errors.map(e => e.message).join("\\n"),
//                   isError : true,
//                   icon : {symbol : "fa fa-times", style : failIcon}
//                 })
//                 return;
//             }
//             action.callback(await action.payload(errors, nonce, cardData,action.formData))
//         }
//     }
//   })
// }

// export {
//   PaymentReducers,
// }
