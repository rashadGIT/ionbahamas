import { combineReducers } from 'redux';
import { square } from '../env/square'
import { popupBox, defaultIcon } from '../css/style.css.js'

const paymentProcessor = (state = {}, action) => {
  // eslint-disable-next-line no-undef
  let processor = new SqPaymentForm({
    applicationId: square.applicationId,
    autoBuild: square.autoBuild,
    card : square.card,
    callbacks: {
        paymentFormLoaded: () => {},
        inputEventReceived: (inputEvent) => {},
        unsupportedBrowserDetected: () => {},
        cardNonceResponseReceived: async (errors, nonce, cardData) => {
            if(errors){
              // console.log(errors.map(x => x.message.replaceAll('/\\.\\s+/gm', '\\n')))
                action.callback({
                  cardData,
                  data : {status : 411},
                  isProcessing : false,
                  title : "Invalid Card",
                  message : errors.map(e => e.message).join("\\n"),
                  isError : true,
                  icon : {symbol : "fa fa-cog fa-spin", style : defaultIcon}
                })
                return;
            }
            action.callback(await action.payload(errors, nonce, cardData,action.formData))
        }
    }
})
  return processor;
}

const allReducers = combineReducers({
  paymentProcessor
})
export {
  allReducers,
}
